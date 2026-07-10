# 🏥 Book Doctor Appointment System

A full-stack MERN web application for booking doctor appointments online. Patients can register, log in, view doctors, and book appointments. Administrators can manage doctors and appointments.

## ✨ Features

- User Registration & Login
- JWT Authentication
- View Doctors
- Search Doctors
- Doctor Details
- Book Appointment
- Admin Dashboard
- Add Doctor
- Edit Doctor
- Delete Doctor
- Appointment Management
- Responsive Design

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Frontend: Render Static Site
- Backend: Render Web Service
- Database: MongoDB Atlas

## 📂 Project Structure

```
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
│   ├── server.js
│   └── package.json
│
└── README.md
```

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

## 🔐 Environment Variables

Create a `.env` file inside the `server` folder.

```env
MONGO_URI=Your_MongoDB_Connection_String
JWT_SECRET=Your_JWT_Secret
PORT=5000
```

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

## 📸 Screenshots

Add screenshots of:

- Home Page
- Login
- Register
- Doctors
- Doctor Details
- Book Appointment
- Admin Dashboard

## 🌟 Future Enhancements

- Online Payment
- Email Notifications
- Video Consultation
- AI-based Doctor Recommendation
- Appointment Reminders

## 👩‍💻 Author

**Sowmya Reddy**

B.Tech – Artificial Intelligence and Data Science

Annamacharya Institute of Technology and Sciences

Academic Year: 2026–2027

## 📄 License

This project is for educational purposes.