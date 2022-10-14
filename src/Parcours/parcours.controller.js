const Joi = require("joi");
require("dotenv").config();
const { v4: uuid } = require("uuid");
const { customAlphabet: generate } = require("nanoid");



const parcours = require("./parcours.model");



const CHARACTER_SET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const REFERRAL_CODE_LENGTH = 8;

const referralCode = generate(CHARACTER_SET, REFERRAL_CODE_LENGTH);

//Validate user schema
/* const sectionSchema = Joi.object().keys({
    nameSection: Joi.string().nameSection({ minDomainSegments: 2 }),
   
 
  }); */


exports.parcoursPost = async (req, res) => {
  try {
    const result = req.body
    if (result.error) {
      console.log(result.error.message);
      return res.json({
        error: true,
        status: 400,
        message: result.error.message,
      });
    }
    //Check if the email has been already registered.
 

    const id = uuid(); //Generate unique id for the user.
     result.parcoursId = id;
    const newparcours= new parcours(result);
    await newparcours.save();

    return res.status(200).json({
      success: true,
      message: "Section Saved",
      
    });
  } catch (error) {
    console.error("signup-error", error);
    return res.status(500).json({
      error: true,
      message: "Cannot save",
    });
  }
};


   exports.parcoursGetAll = async (req, res) => {
    parcours.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
  };  


 /*  exports.sectionGetByName= async (req, res) => {
   
       
    const styleName= req.body.nameSection
    console.log("naaame",styleName)
       
            async (req, res, next) => {
                try {
                 let style = await Section.findByName(req.body.nameSection);
                 if (!style) {
                  return res.send()
                 }
           
          } catch (err) {
            console.error("fetch-referred-error.", err);
            return res.status(500).json({
              error: true,
              message: err.message,
            });
          }
      
  };
  } */









