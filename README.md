# MVC Structure CRUD API

A clean, modular, and scalable backend API built with **Node.js, Express, and MySQL**, following the **MVC (Model-View-Controller)** architectural pattern. 

This project demonstrates a robust implementation of CRUD operations with professional error handling and data validation.

## 🛠 Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL
- **Validation:** Joi
- **Architecture:** MVC Pattern

## ✨ Key Features
- **MVC Architecture:** Separation of concerns for better maintainability.
- **Global Error Handling:** Centralized error management using a custom `AppError` class.
- **Async Handling:** Custom `catchAsync` wrapper to eliminate repetitive `try-catch` blocks.
- **Data Validation:** Strict input validation using `Joi` middleware.
- **Database Security:** Prepared statements (`mysql2`) to prevent SQL injection.

## 📂 Folder Structure
- `controllers/` - Handles the business logic.
- `models/` - Manages database interactions.
- `routes/` - Defines API endpoints.
- `middleware/` - Handles validation and global error catching.
- `utils/` - Utility classes like `AppError` and `catchAsync`.
- `config/` - Database configuration.

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/lbarbaqadze/MVC_Structure.git](https://github.com/lbarbaqadze/MVC_Structure.git)
