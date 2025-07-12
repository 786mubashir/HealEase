# HealEase

A comprehensive full-stack MERN application for managing hospital appointments with role-based access control.

## 📁 Project Structure

```
healease/
├── backend/                    # Backend API (Node.js + Express + MongoDB)
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── controllers/
│   │   ├── authController.js   # Authentication logic
│   │   ├── userController.js   # User management
│   │   └── appointmentController.js # Appointment management
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── Appointment.js     # Appointment schema
│   ├── routes/
│   │   ├── authRoutes.js      # Authentication routes
│   │   ├── userRoutes.js      # User routes
│   │   └── appointmentRoutes.js # Appointment routes
│   ├── .env                   # Environment variables
│   ├── package.json           # Backend dependencies
│   └── server.js              # Express server
├── frontend/                   # Frontend React App
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── PrivateRoute.jsx
│   │   │   ├── AppointmentForm.jsx
│   │   │   ├── AppointmentList.jsx
│   │   │   ├── DoctorList.jsx
│   │   │   ├── PatientList.jsx
│   │   │   └── StatsCard.jsx
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx # Authentication context
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   ├── api.js          # Axios configuration
│   │   │   ├── authService.js  # Authentication API calls
│   │   │   ├── userService.js  # User API calls
│   │   │   └── appointmentService.js # Appointment API calls
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json           # Frontend dependencies
│   ├── vite.config.js         # Vite configuration
│   └── tailwind.config.js     # Tailwind CSS configuration
├── package.json               # Root package.json with scripts
└── README.md
```

## 🚀 Features

### Backend (Node.js + Express + MongoDB)

- **Authentication**: Secure user registration and login with JWT tokens
- **Role-based Access**: Separate functionality for doctors and patients
- **Password Security**: Bcrypt hashing for secure password storage
- **Appointment Management**: Complete CRUD operations for appointments
- **User Management**: Filter users by role (doctor/patient)
- **Conflict Prevention**: Prevents double booking of appointment slots

### Frontend (React + Vite)

- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Authentication Flow**: Login/Register with form validation
- **Dashboard**: Role-specific dashboards for doctors and patients
- **Appointment Booking**: Interactive form with date/time selection
- **Real-time Updates**: Live appointment status management
- **Responsive Design**: Works seamlessly on all devices

## 🛠️ Tech Stack

**Backend:**

- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

**Frontend:**

- React 18 + Vite
- React Router for navigation
- Axios for API calls
- Tailwind CSS for styling
- Lucide React for icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd healease
   ```

2. **Install root dependencies**

   ```bash
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   npm run install-backend
   ```

4. **Install frontend dependencies**

   ```bash
   npm run install-frontend
   ```

5. **Set up environment variables**
   Create a `.env` file in the `backend/` directory:

   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/healease
   JWT_SECRET=your-secret-key-here-change-in-production
   ```

6. **Start MongoDB**
   Make sure MongoDB is running on your system.

7. **Run the application**

   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and frontend development server (port 3000).

### Alternative: Run Backend and Frontend Separately

**Backend:**

```bash
cd backend
npm run dev
```

**Frontend:**

```bash
cd frontend
npm run dev
```

## 🌐 Free Deployment

Want to deploy your application for free? Check out our comprehensive deployment guide:

📖 **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete guide to deploy on Render, Vercel, and MongoDB Atlas

**Quick Deploy:**
```bash
# Run the deployment script
chmod +x deploy.sh
./deploy.sh
```

**Free Hosting Services Used:**
- 🗄️ **Database**: MongoDB Atlas (512MB free)
- 🔧 **Backend**: Render.com (750 hours/month free)
- 🌐 **Frontend**: Vercel (unlimited deployments free)

## 📝 Available Scripts

### Root Level

- `npm run dev` - Run both backend and frontend concurrently
- `npm run backend` - Run only backend server
- `npm run frontend` - Run only frontend server
- `npm run install-all` - Install dependencies for both backend and frontend
- `npm run install-backend` - Install backend dependencies
- `npm run install-frontend` - Install frontend dependencies

### Backend

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔧 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Users

- `GET /api/users` - Get all users
- `GET /api/users/doctors` - Get all doctors
- `GET /api/users/patients` - Get all patients

### Appointments

- `POST /api/appointments` - Create appointment (patients only)
- `GET /api/appointments` - Get user's appointments
- `GET /api/appointments/all` - Get all appointments
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment

## 💡 Key Features

### Security

- JWT token-based authentication
- Password hashing with bcrypt
- Protected routes and middleware
- Role-based access control

### User Experience

- Intuitive navigation with tab-based interface
- Real-time form validation
- Loading states and error handling
- Responsive design for all screen sizes

### Data Management

- Conflict prevention for appointment slots
- Proper data relationships with population
- Comprehensive error handling
- Data validation at both frontend and backend

## 🔒 Security Considerations

- Environment variables for sensitive data
- JWT token expiration handling
- Input validation and sanitization
- CORS configuration for cross-origin requests
- Password complexity requirements

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with modern React and Node.js best practices
- Follows RESTful API conventions
- Implements secure authentication patterns
- Uses responsive design principles
"# HealEase" 
