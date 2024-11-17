import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ContactsTable from "./components/ContactsTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactsTable />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="/edit/:id" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
