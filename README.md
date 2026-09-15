# Zenvia — Full-Stack E-Commerce Platform

Zenvia is a full-stack e-commerce platform built using the MERN stack. It provides a complete shopping experience for users along with a dedicated admin panel for managing products and the store.

## 🚀 Live Demo

* **User Website:** https://zenvia-frontend.onrender.com
* **Admin Panel:** https://zenvia-admin.onrender.com
* **Backend API:** https://zenvia-backend-c2nt.onrender.com

## ✨ Features

### 👤 User Features
- User registration and login
- Google authentication
- Product browsing and search
- Category and subcategory based products
- Shopping cart management
- Online payment integration
- Speech-based navigation
- User profile management
- Secure JWT authentication
- Admin dashboard
- Product management
- Multiple product image uploads
- Cloudinary image storage
- Responsive UI

### 🔐 Admin Features

* Dedicated admin dashboard
* Admin authentication
* Add new products
* Upload multiple product images
* Manage product information
* Remove products
* Manage product categories and sizes
* Product image hosting using Cloudinary

## 🛠️ Tech Stack

### Frontend

### Frontend
- React.js
- React Router
- Axios
- Context API
- Tailwind CSS
- Firebase Authentication
- Web Speech API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Cookie Parser
* Multer
* CORS

### Services

* MongoDB — Database
* Cloudinary — Image storage
* Firebase — Google Authentication
* Render — Deployment

## 📁 Project Structure

```text
Zenvia/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── admin/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
│
└── README.md
```

## 🔑 Authentication

Zenvia uses JWT-based authentication with HTTP-only cookies for maintaining authenticated sessions.

Google authentication is implemented using Firebase Authentication.

## 🖼️ Image Upload

Product images are uploaded through the admin panel using Multer and stored on Cloudinary. The resulting Cloudinary URLs are stored with the product data.

## ⚙️ Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

For the frontend, configure the required Firebase environment variables:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
```


## 💻 Installation

### 1. Clone the repository

```bash
git clone https://github.com/nishuiiitbh/Zenvia.git
cd Zenvia
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

Create your `.env` file and configure the required environment variables.

Start the backend:

```bash
npm run dev
```

### 3. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4. Install Admin Dependencies

Open another terminal:

```bash
cd admin
npm install
npm run dev
```

## 🌐 Deployment

The application is deployed using Render with separate services for:

* Frontend
* Admin panel
* Backend API

The backend uses MongoDB for persistent data storage and Cloudinary for product image storage.

## 🔒 Security

* JWT authentication
* HTTP-only cookies
* Protected authenticated routes
* Environment variables for sensitive credentials
* CORS configuration for deployed frontend applications

## 📌 Future Improvements

* Order tracking
* Wishlist functionality
* Product reviews and ratings
* Advanced admin analytics
* Improved product filtering and sorting
  ## 📸 Screenshots

### 🔐 Login
![Login Page](./Screenshot%202026-09-15%20220113.png)

### 🏠 Home
![Home Page](./Screenshot%202026-09-15%20220211.png)

### 🛍️ Collections
![Collections](./Screenshot%202026-09-15%20220242.png)


### 👕 Product Details
![Product Details](./Screenshot%202026-09-15%20220515.png)

### 📦 Orders
![Orders](./Screenshot%202026-09-15%20220200.png)

### 🛒 Cart
![Cart](./Screenshot%202026-09-15%20220535.png)

### 💳 Checkout & Payment
![Checkout](./Screenshot%202026-09-15%20220546.png)

### 📊 Admin Dashboard
![Admin Dashboard](./Screenshot%202026-09-15%20220658.png)

### 📋 Admin Products
![Admin Products](./Screenshot%202026-09-15%20220712.png)

### ➕ Add Product
![Add Product](./Screenshot%202026-09-15%20220726.png)

### 📦 Admin Orders
![Admin Orders](./Screenshot%202026-09-15%20220753.png)


