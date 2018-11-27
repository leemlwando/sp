const {app,broker} = require("../index");

//start application
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Smart Parent Server Started On Port ${port}`));

//start broker
broker.start();