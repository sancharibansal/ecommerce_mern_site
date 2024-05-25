const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connection Successfull!"))
    .catch((err) => {
     console.log(err);
});

app.use(cors(
    {
        origin: ["https://deploy-mern-lwhq.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true;
    }
));  
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

mongoose.connect (mongodb+srv://sanchari06:SanMongoDB@clustersan06.xnt1da4.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSan06)

app.listen(process.env.PORT || 5173, ()=>{
    console.log("Backend server is running!");
});
