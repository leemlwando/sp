const createError = require("http-errors");
const {Student,Parent} = require("../../../../lib").DB.User;

module.exports = (req,res,next)=>{
    
    //party type
        let {type} = req.query;
    
    let {
        firstName,
        lastName,
        otherNames,
        email,
        password,
        confirmPassword,
        phone,
        address,
        city,
        province,
        country
    } = req.body //extract fields

    /**
     * @TODO [CHECK FIELDS]
    */

    let User = {
        firstName,
        lastName,
        otherNames,
        email,
        type,
        password,
        phone,
        address,
        city,
        province,
        country
    };

    function randomNumber(min,max){
        return Math.random() * (min-max)+min;
    }

    /**
     * SAVE BY TYPE
    */
   switch(type){
    case "parent":
        setInterval(function(){
            Parent.findOne({"email.id":email}).then(parentEmail=>{
                if(parentEmail){
                   return res.json({success:false,message:"email exists"})
                };
    
                Parent.create({firstName,lastName,otherNames,email:{id:email},password,type,
                    phone:{
                        mobile:{number:phone.mobile},
                        landline:{number:phone.landline},
                        other:{number:phone.other}
                    },
                address,city,province,country
            }).then(parent=>{
                    if(!parent){
                        return res.json({success:false, message:"user not created"});
                    };
        
                    res.json(parent);
                    //catch error-save parent
                }).catch(err=>res.json(err));
                //catch error-findEmail
            }).catch(err=>res.json(err));
        },150)
        
        break;
    case "guardian":
    Parent.findOne({"email.id":email}).then(parentEmail=>{
        if(parentEmail){
            return res.json({success:false,message:"email exists"})
        };

        Parent.create({firstName,lastName,otherNames,email:{id:email},password,type,
            phone:{
                mobile:{number:phone.mobile},
                landline:{number:phone.landline},
                other:{number:phone.other}
            },
        address,city,province,country
    }).then(parent=>{
            if(!parent){
                return res.json({success:false,message:"could not save user"})
            };

            res.json(parent);
            //catch error-save parent
        }).catch(err=>res.json(err));
        //catch error-findEmail
    }).catch(err=>res.json(err));
        break;
    case "student":
        break;
    default:
   }

}; //route handler