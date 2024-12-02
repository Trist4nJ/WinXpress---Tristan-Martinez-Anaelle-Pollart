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
```

```bash 
cd WinXpress---Tristan-Martinez-Anaelle-Pollart
```

### **2. Set Up the Back-End**
1. Navigate to the backend directory:
```bash
cd backend
```

2.Install dependencies:
```bash
npm install
```

3. Create a .env file in the backend directory and add the following configuration:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=PetCareDB
PORT=5000
```

4. Start MariaDB and create the database:
```sql
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
```

5. Start the back-end server:
```bash
nodemon server.js
```

### **3. Set Up the Front-End**
1. Navigate to the frontend directory:
```bash
cd ../frontend
```

2. Install dependencies:
```bash
npm install
```

3.Start the front-end server:
```bash
npm run serve
```
### **How to Run the Application**
1. Ensure the back-end server is running:
```bash
nodemon server.js
```

2.Ensure the front-end server is running:
```bash
npm run serve
```
3.Open your browser and navigate to:
```bash
http://localhost:8080
```

### **Contributors**
Anaëlle Pollart and 
Tristan Martinez
