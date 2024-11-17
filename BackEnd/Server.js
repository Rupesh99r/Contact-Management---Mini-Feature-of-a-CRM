const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

mongoose.connect("mongodb://localhost:27017/contacts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  company: String,
  jobTitle: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.use(bodyParser.json());
app.use(cors());

// Create a new contact
app.post("/contacts", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Get all contacts
app.get("/contacts", async (req, res) => {
  const contacts = await Contact.find();
  res.send(contacts);
});

// Update a contact
app.put("/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(contact);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Delete a contact
app.delete("/contacts/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
