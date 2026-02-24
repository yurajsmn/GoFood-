# GoFood - Food Delivery Application

A full-stack MERN (MongoDB, Express.js, React, Node.js) food delivery web application that allows users to browse food items by category, manage orders, and authenticate securely.

## 🚀 Features

- **User Authentication**: Secure signup and login with JWT and bcrypt password hashing
- **Browse Food Items**: View food items organized by categories
- **Dynamic Menu**: Food items and categories loaded from MongoDB database
- **Responsive Design**: Built with Bootstrap and React Bootstrap for mobile-friendly UI
- **Image Carousel**: Featured carousel on home page
- **Dynamic Pricing**: Multiple quantity and size options for food items

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## 🛠️ Tech Stack

### Frontend

- **React** (v19.2.3)
- **React Router DOM** (v7.12.0)
- **Bootstrap** (v5.3.8)
- **React Bootstrap** (v2.10.10)

### Backend

- **Node.js**
- **Express.js** (v5.2.1)
- **MongoDB** with Mongoose (v9.1.6)
- **JWT** for authentication
- **bcrypt** for password hashing
- **express-validator** for input validation
- **CORS** enabled

## 📁 Project Structure

```
mernapp/
├── backend/
│   ├── models/
│   │   └── User.js          # User schema
│   ├── Routes/
│   │   ├── Createuser.js    # Authentication routes
│   │   └── DisplayData.js   # Food data routes
│   ├── db.js                # Database connection
│   ├── index.js             # Server entry point
│   └── package.json
├── src/
│   ├── Components/
│   │   ├── Card.jsx         # Food item card component
│   │   ├── Crouser.jsx      # Carousel component
│   │   ├── Footer.jsx       # Footer component
│   │   └── Navbar.jsx       # Navigation bar
│   ├── screens/
│   │   ├── Home.jsx         # Home page
│   │   ├── Login.jsx        # Login page
│   │   └── Signup.jsx       # Signup page
│   ├── App.js
│   └── index.js
├── public/
│   └── Image/
└── package.json
```

## 🚦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yurajsmn/GoFood-.git
cd mernapp
```

### 2. Install Dependencies

**Frontend:**

```bash
npm install
```

**Backend:**

```bash
cd backend
npm install
```

### 3. Configure Environment

Update the MongoDB connection string in `backend/db.js`:

```javascript
const mongoURL = "your-mongodb-connection-string";
```

**Note**: For production, use environment variables instead of hardcoding credentials.

### 4. Database Setup

Ensure your MongoDB database has the following collections:

- `food_items` - Contains food items with name, category, image, and options
- `FoodCato` - Contains food categories
- `users` - Automatically created for user authentication

### 5. Run the Application

**Start Backend Server:**

```bash
cd backend
npm start
# or for development with auto-reload
npm run dev
```

The backend server will run on `http://localhost:5000`

**Start Frontend:**

Open a new terminal:

```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 🔑 API Endpoints

### Authentication

- `POST /api/creatuser` - Create new user account
- `POST /api/loginuser` - User login

### Food Data

- `POST /api/fooddata` - Fetch food items and categories

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token-based authentication
- Express validator for input validation
- CORS configuration for cross-origin requests

## 📦 Available Scripts

### Frontend Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests

### Backend Scripts

- `npm start` - Start server with Node
- `npm run dev` - Start server with Nodemon (auto-reload)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Yuvraj Suman**

- GitHub: [@yurajsmn](https://github.com/yurajsmn)

## 📧 Support

For support, email yurajsmn@example.com or open an issue in the repository.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
