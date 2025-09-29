"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
//import { Utils } from './Utils';
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const path_1 = __importDefault(require("path"));
const app = Express();
const port = 3000;
const mongoURI = "mongodb+srv://db_test:0401@cluster0.jktxjqn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
app.use((0, cors_1.default)());
app.use(Express.static(path_1.default.join(__dirname, "src", 'public')));
mongoose_1.default
    .connect(mongoURI)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
app.use(Express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api", UserRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
