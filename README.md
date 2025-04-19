# 🥗 CanteenEase - Smart Food Ordering & Management System

**CanteenEase** is a full-stack web application designed to simplify food ordering and management for college or office canteens. It provides a smooth experience for users, admins, and vendors, handling everything from browsing menus to processing secure payments.

---

## 🚀 Features

### 👨‍🍳 User Side
- 🛒 **Browse & Order**: View categorized menus, add items to cart, and place orders.
- 💳 **Online Payment**: Secure payments via **Stripe Gateway**.
- 🧾 **Order History**: Track previous orders with real-time updates.
- 🔐 **Login/Register**: Secure authentication using JWT & bcrypt.
- 📱 **Responsive UI**: Fully mobile-friendly design using HTML, CSS, JS, and Bootstrap.

### 🧑‍💼 Admin Panel
- 📊 **Dashboard**: View all user orders, earnings, and analytics.
- 🍱 **Menu Management**: Add, update, or remove food items with image uploads.
- 💼 **User Management**: View registered users and their activity.
- ⚙️ **Order Status Control**: Mark orders as “Preparing,” “Completed,” or “Cancelled.”

---

## 🛠️ Tech Stack

| Layer         | Technology Used                                      |
|---------------|-------------------------------------------------------|
| Frontend      | HTML, CSS, JavaScript, Bootstrap, AJAX                |
| Backend       | Node.js, Express.js                                   |
| Database      | MongoDB with Mongoose ODM                             |
| Authentication| JWT (JSON Web Token), bcrypt for password hashing     |
| File Upload   | Multer (for food item image uploads)                  |
| API Format    | RESTful JSON APIs                                     |
| Payments      | Stripe API                                            |
| Deployment    | GitHub Pages (Frontend/Admin), Render/Heroku (Backend)|

---

## 📂 Project Structure

```bash
CanteenEase/
│
├── frontend/        # Customer-facing app (Vite-based)
│
├── admin/           # Admin panel interface (Vite-based)
│
├── backend/         # RESTful API server with Node.js + Express
│   ├── models/      # Mongoose schemas (Users, Orders, Items)
│   ├── routes/      # All API endpoints
│   ├── middleware/  # JWT, validators, CORS, error handling
│   └── uploads/     # Image storage for food items
│
├── .env             # Environment variables (PORT, DB URI, JWT secret)
└── README.md        # Project documentation

## 📈 Example Use Case
Ramesh, a college student, logs in to CanteenEase using his credentials.
He effortlessly browses the menu, selects a Veg Biryani and Cold Coffee,
and completes the payment securely via Stripe. Instantly, his order is placed,
and he can track its real-time status—from “Order Received” to “Preparing” and eventually “Completed.”

On the admin side, staff members receive Ramesh’s order immediately in their dedicated panel.
They update the order status accordingly, allowing the kitchen team to begin preparation without delay.

Thanks to this streamlined digital process, manual queueing and in-person ordering are eliminated,
significantly reducing wait times for both placing and receiving food.
Students like Ramesh save valuable time, especially during peak lunch hours,
and the canteen staff operates more efficiently with a centralized dashboard for tracking all orders.
