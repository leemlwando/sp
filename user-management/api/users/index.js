const {Student,Parent} = require("../../lib").DB.User;
let defaultConfig;
let query;
const mongoose = require("mongoose");

module.exports = (req,res,next)=>{

    let {type,limit,pageNumber,skip,id,phone} = req.query;
    defaultConfig = {
        limit:10,
        currentPage:1
    };

    
    query = {};
     
    if(id && typeof(id) === "string"){
        query._id = id;
    };

    if(phone && typeof(phone) === "string"){
        query.phone;
    };
    console.log("query",query);
    switch(type){
        case "parent" || "guardian":
        Parent.find(query)
        .skip(!pageNumber ? null : Number(pageNumber * defaultConfig.limit))
            .limit(!limit ? Number(defaultConfig.limit) : Number(limit))
            .then(searchResults=>{
            res.json({success:true,length:searchResults.length});
        }).catch(err=>res.json(err));
            break;
        case "student":
            break;
        default :
    }
}