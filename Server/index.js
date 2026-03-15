const express = require("express");
const cors = require("cors");
const adminRouter = require("./Routes/AdminRoute");

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods:['GET',"POST","PUT"],
    credentials:true
}));
app.use(express.json());

app.use("/auth", adminRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
