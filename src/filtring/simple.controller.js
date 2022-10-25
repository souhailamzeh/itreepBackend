const Parcours = require("../Parcours/parcours.model");
const Etablissment = require("../etablisement/etablisement.model");
const AssoParcoursEtablissment = require("../AssociationParcourEtablisement/associationpe.model");
const AssoEtablissmentFiliere = require("../AssociationFiliereEtablisement/associationfe.model");
const Filiere = require("../Filiere/filiere.model");

const resultSimple = require("../filtring/helpers/resultSimple.json");

var output = [];
global.output2 ;


exports.simpleFiltring = async (req, res) => {
  try {
    //fetch parcours

    var result = await Parcours.find({ 'typeBac.score': req.body.score, 'typeBac.type': req.body.type });

    if (result.length > 0) {
      result.forEach(parcour => {
        // fetch table asso parcours etablissment

        AssoParcoursEtablissment.find({ parcourId: parcour.parcoursId }).then(value => {
         // console.log("test simple parcours", element.parcoursId)

          value.forEach(assoPE => {

            // fetch  etablismment 

            Etablissment.find({ etablisementId: assoPE.etablisementId }).then(etablissments => {
              etablissments.forEach(etablissment => {
                // fetch table asso etablissment filiere 

                AssoEtablissmentFiliere.find({ etablisementId: etablissment.etablisementId }).then((value) => {
                  value.forEach(assoEF => {

                    //fetch filieres

                    Filiere.find({ filiereId: assoEF.filiereId }).then((filieres) => {
                      //console.log("test simple etablissmnet", etablissment)
                     // console.log("test simple parcour", parcour)
                      //console.log("test simple fileires", filieres)
                      resultSimple.parcours.forEach(element => {
                        element.infoParcour.push(parcour)
                        element.etablissments.infoEtablissment.push(etablissment)
                        element.etablissments.Filieres.infoFiliere.push(filieres)

                      });
                     
 
                      output.push(resultSimple.parcours)
                      output2 =output


                    })

                  });

                })


              });

            })

          });

        })


      });

      console.log('result'  ,output2)

      return res.status(200).json({
        success: true,
        data : output,
        message: "data loaded",

      });
    } else {
      return res.json({
        error: true,
        status: 400,
        message: 'no data exist ',
      });
    }

  } catch (error) {
    console.error("signup-error", error);
    return res.status(500).json({
      error: true,
      message: "Cannot save",
    });
  }
};


