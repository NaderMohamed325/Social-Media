



# Social Media Backend 🧠📱

A TypeScript-based backend for a social media application, built with Express.js, Prisma ORM, and PostgreSQL. This server provides APIs for user authentication, post management, comments, likes, and more.

## 🚀 Features

- 🔐 Authentication (Sign Up, Sign In)
- 🧑 User Profile Management
- 📝 Create / Read / Delete Posts
- 💬 Add / View Comments
- ❤️ Like & Unlike Posts
- 🧭 RESTful API structure
- 🛡️ Input validation and error handling
- 🌱 Prisma + PostgreSQL for DB access

---

## 📁 Project Structure

```

Social-Media/
├── prisma/                # Prisma schema and migrations
│   └── schema.prisma
├── src/                   # Source files
│   ├── controller/        # Route logic (auth, post, comment, etc.)
│   ├── middleware/        # Error handlers, guards
│   ├── router/            # Route definitions
│   ├── services/          # Business logic
│   ├── utils/             # Utility functions
│   └── index.ts           # App entry point
├── .env                   # Environment variables
├── package.json
└── tsconfig.json

````

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/NaderMohamed325/Social-Media.git
cd Social-Media
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<dbname>?schema=public"
PORT=3000
```

### 4. Setup Database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the Server

```bash
npm run dev
```

---

## 🧪 API Endpoints (Sample)

### Auth

* `POST /api/auth/sign-up/email`
* `POST /api/auth/sign-in/email`

### Posts

* `GET /api/posts`
* `POST /api/posts`
* `DELETE /api/posts/:id`

### Comments

* `GET /api/posts/:postId/comments`
* `POST /api/comments`

### Likes

* `POST /api/likes`
* `DELETE /api/likes/:id`

---

## 🛠 Tech Stack

* **Language:** TypeScript
* **Backend Framework:** Express.js
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Runtime:** Node.js
* **Dev Tools:** ts-node-dev, dotenv

---

## 🧠 Author

Made with ❤️ by [Nader Mohamed](https://github.com/NaderMohamed325)

---

## 📄 License

MIT License. Feel free to use and modify!

```

---


