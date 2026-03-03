
# 🔗 URL Shortener (Node.js + Express + MongoDB)

A simple and stylish URL Shortener web application built using **Node.js**, **Express**, **MongoDB**, and a clean **HTML/CSS frontend**.
It allows users to convert long URLs into short links and redirect them to the original site.

---

## 🚀 Features

* Shorten long URLs
* Redirect short URLs to original URLs
* Beautiful glassmorphism UI
* Copy short URL feature
* REST API backend
* MongoDB storage

---

## 🛠 Tech Stack

**Frontend:**

* HTML
* CSS
* JavaScript

**Backend:**

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📁 Project Structure

```
url-shortener/
│
├── models/
│   └── Url.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server.js
├── package.json
└── README.md
```

---

## ⚙ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

---

### 4️⃣ Run the Server

```bash
node server.js
```

Server will start at:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### ➤ Create Short URL

**POST** `/shorten`

**Request Body:**

```json
{
  "originalUrl": "https://www.google.com"
}
```

**Response:**

```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

---


## 🖥 Frontend Usage

1. Open `index.html` in browser
2. Enter a long URL
3. Click **Shorten**
4. Copy and use the generated short URL

---

## ✨ Future Improvements

* Custom alias support
* Click counter
* URL expiration
* User authentication
* QR code generation
* Rate limiting
* Deployment (Render / Railway / Vercel)



## 🧑‍💻 Author

GitHub: [https://github.com/Sujith-git-123](https://github.com/Sujith-git-123)

---

## 📜 License

This project is licensed under the MIT License.


