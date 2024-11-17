import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`/contacts/${id}`).then((response) => {
        setFormData(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/contacts/${id}`, formData).then(() => navigate("/"));
    } else {
      axios.post("/contacts", formData).then(() => navigate("/"));
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ m: 2 }}>
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        required
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Job Title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        required
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">
        {id ? "Update" : "Add"} Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
