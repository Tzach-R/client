# 📖 Cozy Book Club - Final Project

## 📌 Project Overview
**Cozy Book Club** is a full-stack web application where users can **browse, add, and favorite books**. It includes:
- **User Authentication** (Login & Register)
- **Book Management** (Add, Edit, Delete)
- **Favorites Feature** (Save books to favorites)
- **Dark Aesthetic** UI
- **Responsive Design** for all screen sizes

## 🛠️ Technologies Used
- **Frontend:** React, React Router, Axios, Bootstrap
- **Backend:** Node.js, Express.js, MongoDB, JWT Authentication
- **Database:** MongoDB (Mongoose ORM)

## 🔧 Installation & Setup
### **1️⃣ Clone the Project**
```sh
 git clone https://github.com/your-repo/final-book-club.git
```

### **2️⃣ Install Backend (Server)**
```sh
cd server
npm install
```
Create a `.env` file in the `server` folder and add:
```sh
MONGO_URI=mongodb://localhost:27017/bookclub
JWT_SECRET=yourSecretKeyHere
```
Start the server:
```sh
node server.js
```

### **3️⃣ Install Frontend (Client)**
```sh
cd ../client
npm install
npm start
```

## 🔑 Features & Functionality
✅ **User Registration & Login** (JWT Authentication)  
✅ **Book Management** (CRUD Operations)  
✅ **Favorite Books** (Save books to a user’s profile)  
✅ **Responsive UI** (Dark Theme)  
✅ **Secure API** (Authentication & Authorization)  

## 🎨 UI & Design
The project follows a **Dark Cosy aesthetic**, with **earthy tones, serif fonts, and cozy book-like visuals**.

## 🛠 Future Improvements
- Implement an **Admin Panel** for book moderation.
- Add **User Profiles** with avatars and book lists.
- Improve **Search & Filtering** features for books.

## 👨‍💻 Authors
Developed by me as part of a final project for a fullstack development course.

📌 **Enjoy building your online book club!** 🚀📚

