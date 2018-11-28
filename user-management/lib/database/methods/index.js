const {ParentSchema,StudentSchema} = require("../schema");


ParentSchema.pre("save",ParentSchemaHandler);

function ParentSchemaHandler(done){
    let self = this;

    /**
     * PHONE
    */
    //make sure contacts are saved right or else null them
    if(!self.phone.landline.number){
        self.phone.landline = null;
    };

    if(self.phone.other.length){

        for(contact in self.phone.other){

            if(!contact.number){
                let i = self.phone.other.indexOf(contact);

                self.phone.other.pop(i);
            };
        };
    };

    //check if email exists

    //call done
    done();

};

module.exports = {ParentSchema,StudentSchema};