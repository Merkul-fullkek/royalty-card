const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const sequelize =  require("./db");
const corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req, res)=>{
    res.json({message: "Welcome to Loyalty-Coffe-Card Application!"})
});
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start();