const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * PARENT 
*/

const ParentSchema = new Schema({
    //identity
    firstName:{type:String,lowercase:true,required:true},
    lastName:{type:String,lowercase:true,required:true},
    otherNames:{type:String,lowercase:true,required:true},
    email:{type:String,lowercase:true,required:true},
    phone:{
        mobile:{number:String,required:true,confirmed:{type:Boolean, default:false}},
        landline:{number:String,confirmed:{type:Boolean, default:false}},
        other:[{number:String,confirmed:{type:Boolean,default:false}}]
    },
    password:{type:String,required:true},

        //location
        address:{type:String,lowercase:true,required:true},
        city:{type:String,lowercase:true,required:true},
        province:{type:String,lowercase:true,required:true},
        country:{type:String,lowercase:true,required:true},

            //features
            students:[],
            notifications:[],
            messages:[],
            issues:[]
});

/**
 * STUDENT 
*/

const StudentSchema = new Schema({
    //identity
    firstName:{type:String,lowercase:true,required:true},
    lastName:{type:String,lowercase:true,required:true},
    otherNames:{type:String,lowercase:true},
    uuid:{type:String,lowercase:true,required:true},
        //location
        address:{type:String,lowercase:true,required:true},
        city:{type:String,lowercase:true,required:true},
        province:{type:String,lowercase:true,required:true},
        country:{type:String,lowercase:true,required:true},
            //features
            exercises:[],
            assignments:[],
            tests:[],
            examinations:[],
            generalClassAttendance:[],
            classSubjectAttendance:[],
            schools:[{enrolled:{type:Date,default:Date.now},schoolCode:{type:Number}}],
            currentSchool:{
                enrolled:{type:Date,default:Date.now},
                schoolCode:{type:Number}
            },
            notifications:[],
            issues:[],
            guidanceCouncillors:[]
});

/**
 * STAFF 
*/

const StaffSchema = new Schema({
    //identity
        //location
            //features
});


/**
 * GUIDANCE COUNCILLORS 
*/

const GuidanceCouncillorSchema = new Schema({
    //identity
        //location
            //features
});

/**
 * DEVELOPERS 
*/

const DevelopersSchema = new Schema({
    //identity
        //location
            //features
});



module.exports = {ParentSchema,StudentSchema};