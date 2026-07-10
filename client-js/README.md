# 🏥 Book Doctor Appointment System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that enables patients to book doctor appointments online. The system provides secure user authentication, doctor management, appointment booking, and an admin dashboard.

---

## 🌐 Live Demo

**Frontend:**  
https://book-doctor-appointment-system-v2-1.onrender.com

**Backend API:**  
https://book-doctor-appointment-system-v2.onrender.com

---

## 🎥 Project Demo

📺 **Watch the complete project demonstration here:**

👉 **Google Drive Video:**  
https://drive.google.com/file/d/1kgymElX-HLCA8kch02BflXmhxMm9dEtW/view?usp=sharing

---

## ✨ Features

- User Registration
- User Login
- JWT Authentication
- View Doctors
- Search Doctors
- Doctor Details
- Book Appointment
- Appointment Management
- Admin Dashboard
- Add Doctor
- Edit Doctor
- Delete Doctor
- Responsive Design

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Frontend – Render Static Site
- Backend – Render Web Service
- Database – MongoDB Atlas

---

## 📂 Project Structure

```text
book-doctor-appointment-system-v2
│
├── client-js
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── uploads
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/sowmya1877/book-doctor-appointment-system-v2.git
```

### Frontend

```bash
cd client-js
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` folder.

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_JWT_SECRET
PORT=5000
```

---

## 📡 API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Doctors

- GET `/api/doctors`
- POST `/api/doctors/add`
- PUT `/api/doctors/:id`
- DELETE `/api/doctors/:id`

### Appointments

- POST `/api/appointments/book`
- GET `/api/appointments`
- PUT `/api/appointments/:id/status`
- DELETE `/api/appointments/:id`

---

## 🔒 Authentication

The application uses **JWT (JSON Web Token)** authentication.

- Secure User Registration
- Secure User Login
- Protected Routes
- Token-based Authentication

---

## 🚀 Future Enhancements

- Online Payment Gateway
- Email Notifications
- SMS Notifications
- Video Consultation
- AI-based Doctor Recommendation
- Appointment Reminder System
- Doctor Availability Calendar
- Patient Medical History

---

## 👩‍💻 Author

**Sowmya Reddy**

B.Tech – Artificial Intelligence and Data Science

Annamacharya Institute of Technology and Sciences

Academic Year: **2026–2027**

---

## 📄 License

This project is developed for educational purposes.