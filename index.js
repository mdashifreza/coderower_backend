const express = require("express");
const app = express();
require("dotenv").config();

// Middleware
const cors = require("cors");
app.use(cors());
const body_parser = require("body-parser");
app.use(body_parser.json());

// Route instance
const router = express.Router();

// MongoDB connection
const mongoose = require("mongoose");
const uri = "mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database";

mongoose.connect(uri)
    .then(() => {
        console.log("Connection established successfully");
    })
    .catch((error) => {
        console.log("Error caught.", error);
    });

// Define the Configuration schema
const ConfigurationSchema = new mongoose.Schema({
        id: String,
        data: [[String]],
        remark: String,
    });

// Create the Configuration model
const Configuration = mongoose.model('Configuration', ConfigurationSchema);

// Route to read data
router.get("/configurations/:id", async (req, res) => {
    const configId = req.params.id;
    console.log(configId);
    try {
        const configuration = await Configuration.findOne({ id: configId });
        if (!configuration) {
            return res.status(404).json({ message: 'Configuration is empty' });
        }
        res.json(configuration);
    } catch (error) {
        console.log("Error in fetching data from MongoDB.", error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to add dummy data
router.post("/configurations", async (req, res) => {
    const { id, data, remark } = req.body;
    try {
        // Create a new Configuration instance with the provided data
        const newConfiguration = new Configuration({
            id : id,
            data : data,
            remark : remark,
        });
        // Save the new configuration to the database
        await newConfiguration.save();

        res.status(201).json({ message: 'Dummy data added successfully' });
    } catch (error) {
        console.log("Error in adding dummy data to MongoDB.", error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to add dummy data
router.put("/configurations/:id", async (req, res) => {
    const configId = req.params.id;
    const { remark } = req.body;
    try{
        const findByConfigIdForUpdate = await Configuration.findOne({ id : configId });

        if (!findByConfigIdForUpdate) {
            return res.status(404).json({ message: 'record not found by id:' });
        }

        findByConfigIdForUpdate.remark = remark;

        await findByConfigIdForUpdate.save();

        res.json({ message: 'Remark updated successfully', findByConfigIdForUpdate: findByConfigIdForUpdate });

    }catch(error){
        console.log("Error in updating remark in MongoDB.", error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//delete route
router.delete("/configurations/:id", async (req, res) => {
    const configId = req.params.id;
    try {
        const deletedConfiguration = await Configuration.findOneAndDelete({ id: configId });
        if (!deletedConfiguration) {
            return res.status(404).json({ error: 'Configuration not found' });
        }

        res.status(200).json({ message: 'Configuration deleted successfully' });
    } catch (error) {
        console.log("Error in deleting configuration from MongoDB.", error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//endpoint deployed
router.get("/", (req, res) => {
    res.json({ endpoint: "server is running at: " });
});
// Use router
app.use("/api", router);

// Start the server
const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
