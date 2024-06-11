import express, { response } from "express";
const app = express();

app.use(express.json());

const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Server is listening on PORT ${PORT}...`);
});
app.get("/", function(request, response) {
    response.json({message: "This is the root route. How roude!"});
});

app.get("/comments", function(req, res){
    response.json({message: "Comments received"});
});