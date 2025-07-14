## 📌 API Routes

### 🔐 **Authentication**

| Method | Endpoint                  | Description                  |
| ------ | ------------------------- | ---------------------------- |
| POST   | `/api/auth/sign-up/email` | Sign up using email          |
| POST   | `/api/auth/sign-in/email` | Sign in using email          |
| POST   | `/api/auth/sign-out`      | Sign out and destroy session |
| GET    | `/api/auth/session`       | Get current user session     |
| POST   | `/api/auth/verify`        | Verify user email/token      |
| POST   | `/api/auth/token/refresh` | Refresh access token (JWT)   |

---

### 👤 **Users**

| Method | Endpoint                  | Description                 |
| ------ | ------------------------- | --------------------------- |
| GET    | `/api/users`              | Get all users               |
| GET    | `/api/users/:id`          | Get a specific user by ID   |
| PUT    | `/api/users/:id`          | Update user profile         |
| DELETE | `/api/users/:id`          | Delete user (admin or self) |
| GET    | `/api/users/:id/posts`    | Get posts created by user   |
| GET    | `/api/users/:id/comments` | Get user comments           |
| GET    | `/api/users/:id/likes`    | Get posts liked by user     |

---

### 📝 **Posts**

| Method | Endpoint                  | Description            |
| ------ | ------------------------- | ---------------------- |
| POST   | `/api/posts`              | Create a new post      |
| GET    | `/api/posts`              | Get all posts          |
| GET    | `/api/posts/:id`          | Get a specific post    |
| PUT    | `/api/posts/:id`          | Update a post          |
| DELETE | `/api/posts/:id`          | Delete a post          |
| GET    | `/api/posts/:id/comments` | Get comments on a post |
| GET    | `/api/posts/:id/likes`    | Get likes on a post    |

---

### 💬 **Comments**

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | `/api/comments`     | Add a comment to a post |
| PUT    | `/api/comments/:id` | Edit a comment          |
| DELETE | `/api/comments/:id` | Delete a comment        |
| GET    | `/api/comments/:id` | Get a single comment    |

---

### ❤️ **Likes**

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/likes`         | Like a post             |
| DELETE | `/api/likes`         | Unlike a post           |
| GET    | `/api/likes/:postId` | Get all likes on a post |

---

### 🛡️ **Admin (Optional)**

| Method | Endpoint               | Description                  |
| ------ | ---------------------- | ---------------------------- |
| GET    | `/api/admin/sessions`  | View all active sessions     |
| DELETE | `/api/admin/users/:id` | Force delete a user and data |
| GET    | `/api/admin/accounts`  | View all linked accounts     |

---
