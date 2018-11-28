const mongoose = require("mongoose");
const {ParentSchema,StudentSchema} = require ("../methods");
let User = {};

User.Parent = mongoose.model("Guardians",ParentSchema);
User.Student = mongoose.model("Students",StudentSchema);



module.exports = User;