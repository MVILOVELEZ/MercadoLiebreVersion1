// Mercado Liebre

const express = require("express");
const app = express();

const path = require("path");
app.use(express.static("public"));

app.listen(3000, () => console.log("Servidor corriendo por puerto 3000"));
    
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html')); 
});