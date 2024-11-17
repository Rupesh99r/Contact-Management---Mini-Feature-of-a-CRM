# Contact-Management---Mini-Feature-of-a-CRM
Contact Management System
**Description**
The Contact Management System is a full-stack web application that helps users efficiently manage contact information for customers or clients. It allows users to:

Add new contacts.
View a list of all contacts with pagination and sorting.
Edit existing contact details.
Delete outdated or duplicate contacts.
The system is built using ReactJS with Material-UI (MUI) for the frontend, Node.js for the backend, and MongoDB as the database.

**Features:**

Add Contact: A form to input a new contact's details (First Name, Last Name, Email, Phone Number, Company, Job Title).
View Contacts: Displays contacts in a paginated and sortable table.
Edit Contact: Allows updating existing contact details.
Delete Contact: Deletes a selected contact.

**Setup Instructions:**

1. **Clone the Repository**

git clone https://github.com/your-username/contact-management-system.git

cd contact-management-system

2. **Frontend Setup:**

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the development server:

npm start

3. **Backend Setup:**

Navigate to the backend folder:

cd backend

Install dependencies:

npm install

Start the backend server:

node server.js

4. **Database Setup:**
   
Install and start MongoDB locally or set up a cloud MongoDB Atlas cluster.
Create a database named contacts.
The contacts collection will be created automatically when the app is run for the first time.
Schema for Contact (Mongoose Schema):

**javascript code**:

const contactSchema = new mongoose.Schema({

  firstName: String,

  lastName: String,
  
  email: String,
  
  phone: String,
  
  company: String,
  
  jobTitle: String,

});


**Application Structure**

->Frontend:

Framework: ReactJS

UI Components: Material-UI (MUI)

Key Components:

ContactForm: Handles adding and editing contacts.

ContactsTable: Displays a list of contacts with actions for editing and deleting.

->Backend:

Framework: Node.js with Express

Database: MongoDB (via Mongoose)

API Endpoints:

POST /contacts: Add a new contact.

GET /contacts: Retrieve all contacts.

PUT /contacts/:id: Update an existing contact.

DELETE /contacts/:id: Delete a contact.

->Database:

Choice: MongoDB

Reason: NoSQL database is ideal for flexible schema and quick iteration, with easy integration using Mongoose.
