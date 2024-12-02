# **PetCare**

PetCare is a web application designed to help pet owners manage their pets' care, including appointments, health records, and more. This project is built using **Vue.js** for the front-end and **Node.js** with **MariaDB** for the back-end.

---

## **Features**
- Add and manage pet profiles (name, species, birth date, vaccines, weight, height).
- Display all pets with their details.
- Search pets by name.
- Delete pet profiles.
- Dynamic synchronization between front-end and back-end.

---

## **Technologies Used**
- **Front-End**: Vue.js
- **Back-End**: Node.js
- **Database**: MariaDB
- **Styling**: HTML, CSS
- **API Communication**: RESTful API

---

## **Prerequisites**
Before running the project, ensure you have the following installed:
1. [Node.js](https://nodejs.org/) (v16 or higher recommended)
2. [NPM](https://www.npmjs.com/)
3. [MariaDB](https://mariadb.org/)
4. [Postman](https://www.postman.com/) (optional, for testing APIs)

---

## **Installation Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/Trist4nJ/WinXpress---Tristan-Martinez-Anaelle-Pollart.git
cd WinXpress---Tristan-Martinez-Anaelle-Pollart


2. Set Up the Back-End
Navigate to the backend directory:
bash
Copier le code
cd backend
Install dependencies:
bash
Copier le code
npm install
Create a .env file in the backend directory and add the following configuration:
env
Copier le code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=PetCareDB
PORT=5000
Start MariaDB and create the database:
sql
Copier le code
CREATE DATABASE PetCareDB;

USE PetCareDB;

CREATE TABLE animals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  species VARCHAR(255) NOT NULL,
  birthDate DATE NOT NULL,
  vaccines TEXT,
  weight FLOAT,
  height FLOAT
);
Start the back-end server:
bash
Copier le code
nodemon server.js
3. Set Up the Front-End
Navigate to the frontend directory:
bash
Copier le code
cd ../frontend
Install dependencies:
bash
Copier le code
npm install
Start the front-end server:
bash
Copier le code
npm run serve
How to Run the Application
Ensure the back-end server is running:
bash
Copier le code
nodemon server.js
Ensure the front-end server is running:
bash
Copier le code
npm run serve
Open your browser and navigate to:
bash
Copier le code
http://localhost:8080
API Documentation
The back-end provides RESTful APIs for managing pets. Here are the available endpoints:

GET /api/animals

Fetches all animals from the database.
Example Response:
json
Copier le code
[
  {
    "id": 1,
    "name": "Buddy",
    "species": "Dog",
    "birthDate": "2020-01-01",
    "vaccines": "Rabies, Parvovirus",
    "weight": 10.5,
    "height": 50
  }
]
POST /api/animals

Adds a new animal to the database.
Request Body (JSON):
json
Copier le code
{
  "name": "Buddy",
  "species": "Dog",
  "birthDate": "2020-01-01",
  "vaccines": "Rabies, Parvovirus",
  "weight": 10.5,
  "height": 50
}
DELETE /api/animals/:id

Deletes an animal from the database by ID.
Troubleshooting
If the back-end server doesn't start:

Ensure the .env file is configured correctly.
Check if MariaDB is running and the database exists.
If the front-end doesn't load:

Ensure the back-end server is running.
Check for errors in the browser console.
If API requests fail:

Verify the back-end server is running on http://localhost:5000.
Ensure CORS is enabled in the back-end (server.js).
Contributors
Anaëlle Pollart
Tristan Martinez
