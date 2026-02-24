# GoFood - Food Ordering Application

A full-stack MERN (MongoDB, Express, React, Node.js) food ordering application where users can browse food items, add them to cart, place orders, and track their order history.

## 🚀 Features

### User Authentication

- **User Registration** with automatic geolocation detection
- **Secure Login** with JWT authentication
- **Password Hashing** using bcrypt for security

### Food Ordering

- Browse food items by categories
- Search functionality to find specific food items
- Add items to cart with customizable quantity and size options
- View cart with item details (name, quantity, size, price)
- Real-time cart badge showing item count
- Remove items from cart
- Place orders with order date tracking

### Order Management

- View order history with complete details
- Orders grouped by date
- Display of food items with images, quantities, sizes, and prices

### Additional Features

- Responsive design for mobile and desktop
- Modal-based cart view
- Automatic location detection for user signup
- CORS-enabled backend for cross-origin requests

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## 🛠️ Tech Stack

### Frontend

- **React** (v19.2+) - UI library
- **React Router DOM** - Client-side routing
- **React Bootstrap** - UI components
- **Bootstrap** - CSS framework
- **Material-UI Icons** - Icon library

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT authentication
- **express-validator** - Input validation
- **CORS** - Cross-Origin Resource Sharing

## 📁 Project Structure

```
mernapp/
├── backend/
│   ├── models/
│   │   ├── User.js          # User schema
│   │   └── order.js         # Order schema
│   ├── Routes/
│   │   ├── Createuser.js    # User registration & login
│   │   └── DisplayData.js   # Food data routes
│   │   └── Orderdata.js     # Order management routes
│   ├── db.js                # Database connection
│   ├── index.js             # Server entry point
│   └── package.json
├── src/
│   ├── Components/
│   │   ├── Card.jsx         # Food item card component
│   │   ├── ContextReducer.jsx # Cart state management
│   │   ├── Crouser.jsx      # Carousel component
│   │   ├── Footer.jsx       # Footer component
│   │   └── Navbar.jsx       # Navigation bar
│   ├── screens/
│   │   ├── Cart.jsx         # Cart page
│   │   ├── Home.jsx         # Home page with food items
│   │   ├── Login.jsx        # Login page
│   │   ├── Myorder.jsx      # Order history page
│   │   └── Signup.jsx       # Registration page
│   ├── Modal.jsx            # Modal component for cart
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
- `foodCategory` - Contains food categories
- `users` - Automatically created for user authentication
- `orders` - Automatically created for storing orders

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
- `POST /api/getuserdata` - Get user data by email/name/location

### Food Data

- `POST /api/fooddata` - Fetch food items and categories

### Orders

- `POST /api/orderData` - Place a new order
- `POST /api/myOrderData` - Fetch user's order history

## 🎯 Usage

1. **Sign Up**: Create an account (location is auto-detected)
2. **Login**: Access your account
3. **Browse**: View food items organized by category
4. **Search**: Use the search bar to find specific items
5. **Add to Cart**: Select quantity and size, then add to cart
6. **View Cart**: Click the "MyCart" button to see cart items
7. **Checkout**: Place your order
8. **My Orders**: View your order history

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token-based authentication (stored in localStorage)
- Express validator for input validation
- CORS configuration for cross-origin requests
- Secure HTTP-only cookies support

## 📦 Available Scripts

### Frontend Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests

### Backend Scripts

- `npm start` - Start server with Node
- `npm run dev` - Start server with Nodemon (auto-reload)

## 🌟 Key Features

### Cart Management

- Context API for global state management
- Actions: ADD, UPDATE, REMOVE, DROP
- Persistent cart across page refreshes
- Real-time price calculations

### Automatic Location Detection

- Uses browser Geolocation API
- Reverse geocoding to get readable address
- Falls back to coordinates if address lookup fails

### Responsive Design

- Mobile-first approach
- Bootstrap grid system
- Responsive navigation and modals

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
- Repository: [GoFood-](https://github.com/yurajsmn/GoFood-)

## 🙏 Acknowledgments

- Food images from Unsplash
- Icons from Material-UI
- UI components from React Bootstrap
- Geolocation API from BigDataCloud

---

Made with ❤️ by Yuvraj Suman

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
