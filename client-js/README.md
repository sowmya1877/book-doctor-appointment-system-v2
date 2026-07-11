# 🏥 Book Doctor Appointment System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that enables patients to book doctor appointments online. The system provides secure user authentication, doctor management, appointment booking, and an admin dashboard.

---

## 🌐 Live Demo

### Frontend
https://book-doctor-appointment-system-v2-1.onrender.com

### Backend API
https://book-doctor-appointment-system-v2.onrender.com

---

## 🎥 Project Demo

Watch the complete project demonstration below.

### 📺 Demo Video (Google Drive)

🔗 https://drive.google.com/file/d/1yvuXVG0y9Is8JIeNbBN4aUXjSx3S6-A8/view?usp=sharing
> The video demonstrates the complete workflow of the application, including:
>
> - User Registration
> - User Login
> - JWT Authentication
> - View Doctors
> - Search Doctors
> - Book Appointment
> - Appointment Management
> - Admin Dashboard
> - Add/Edit/Delete Doctors
> - Responsive User Interface

---

## ✨ Features

### Patient Features

- User Registration
- Secure Login
- JWT Authentication
- View All Doctors
- Search Doctors
- View Doctor Details
- Book Appointments
- View Appointment History

### Admin Features

- Admin Dashboard
- Add Doctor
- Edit Doctor
- Delete Doctor
- Manage Appointments

### General Features

- Responsive Design
- REST API Integration
- MongoDB Database
- Secure Authentication

---

## 🛠 Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Bootstrap
- CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- JSON Web Token (JWT)

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
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/sowmya1877/book-doctor-appointment-system-v2.git
```

### 2. Navigate to the Project

```bash
cd book-doctor-appointment-system-v2
```

---

## 💻 Frontend Setup

```bash
cd client-js
npm install
npm run dev
```

---

## ⚙ Backend Setup

Open another terminal.

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

JWT_SECRET=YOUR_SECRET_KEY

PORT=5000
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |

### Doctors

| Method | Endpoint |
|---------|----------|
| GET | `/api/doctors` |
| POST | `/api/doctors/add` |
| PUT | `/api/doctors/:id` |
| DELETE | `/api/doctors/:id` |

### Appointments

| Method | Endpoint |
|---------|----------|
| POST | `/api/appointments/book` |
| GET | `/api/appointments` |
| PUT | `/api/appointments/:id/status` |
| DELETE | `/api/appointments/:id` |

---

## 🔒 Authentication

The application uses **JWT (JSON Web Token)** for authentication.

Features include:

- Secure User Registration
- Secure Login
- Protected Routes
- Token-Based Authentication
- Authorization Middleware

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
- Doctor Ratings & Reviews

---

## 👩‍💻 Author

**Sowmya Reddy**

B.Tech – Artificial Intelligence and Data Science

Annamacharya Institute of Technology and Sciences

Academic Year: **2026–2027**

GitHub:
https://github.com/sowmya1877

---

## 📄 License

This project is developed for educational purposes.

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.