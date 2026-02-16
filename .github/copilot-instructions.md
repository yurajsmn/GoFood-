# GoFood MERN App - AI Coding Agent Instructions

## Architecture Overview

This is a MERN stack food ordering application with **separate frontend and backend codebases**:
- **Frontend**: React app (root directory) running on port 3000
- **Backend**: Express API (`/backend` directory) running on port 5000
- **Database**: MongoDB Atlas cluster named "GoFood"

## Directory Structure Conventions

- `/backend` - Standalone Express server with its own `package.json`
  - `db.js` - MongoDB connection initialization
  - `index.js` - Express app entry point
  - `models/` - Mongoose schemas (e.g., User.js)
  - `Routes/` - Express route handlers (note: capital 'R')
- `/src` - React frontend
  - `screens/` - Page-level components (Home, Login, Signup)
  - `Components/` - Reusable UI components (Card, Navbar, Footer, Crouser)

## Critical Development Workflows

### Running the Application
**Both servers must run simultaneously:**
1. Frontend: `npm start` (from root directory)
2. Backend: `npm run dev` or `npm start` (from `/backend` directory)

The backend uses **nodemon** for hot-reloading in development mode (`npm run dev`).

### Database Connection Pattern
- MongoDB connection is established via `mongoDb()` function in `backend/db.js`
- Connection is initiated in `backend/index.js` before route registration
- Direct collection access pattern: `mongoose.connection.db.collection("food_items")`

## Project-Specific Conventions

### Routing
- Backend API routes are prefixed with `/api` (e.g., `/api/creatuser`)
- Frontend uses React Router v7 with client-side routing
- Route component mapping in `src/App.js`: `/` → Home, `/login` → Login, `/createuser` → Signup

### API Patterns
- Routes follow Express Router pattern exported from `backend/Routes/`
- Validation uses `express-validator` with inline validators in route definitions
- Example from `backend/Routes/Createuser.js`:
  ```javascript
  router.post("/creatuser", 
    [body("email").isEmail(), body("password").isLength({ min: 5 })],
    async (req, res) => { ... }
  )
  ```
- Responses use `{ success: true/false }` pattern

### Styling & UI
- Bootstrap 5.3.8 with React Bootstrap 2.10.10 for styling
- Green theme (`bg-success` class used throughout for brand consistency)
- Components use mix of Bootstrap classes and inline styles
- Note: Some components have `classname` instead of `className` (legacy bug - should be fixed)

### Data Models
- User schema includes: name, location, email, password, date (auto-generated)
- Passwords are stored plain (⚠️ **security issue** - should implement bcrypt hashing)

## Known Issues & Patterns

1. **Typo in endpoint**: `/creatuser` instead of `/createuser` (backend route)
2. **Case sensitivity**: `Routes/` directory uses capital R
3. **Missing CORS**: Backend doesn't configure CORS - may need to add if frontend/backend run on different origins
4. **Incomplete Login**: Login.jsx is a placeholder without implementation
5. **Hard-coded credentials**: MongoDB connection string contains credentials in `db.js` (should use environment variables)

## Component Communication

- No state management library (Redux/Context) - components manage local state
- API calls should target `http://localhost:5000/api/...`
- Form submissions use controlled components pattern (not fully implemented in Signup.jsx yet)

## Testing
- Frontend uses React Testing Library (@testing-library/react, jest-dom, user-event)
- No backend tests currently configured
- Run frontend tests: `npm test` (from root)
