# 🧠 Resumint — Resume Builder

**Resumes that get you hired.**

Resumint is a modern, full-stack resume builder that helps you design a standout, ATS-optimized resume in minutes. Pick from professionally crafted templates, fill in your details through a guided flow, and export a pixel-perfect PDF ready to send to recruiters.

🔗 **Live Demo:** [resume-builder-zeta-five-66.vercel.app](https://resume-builder-zeta-five-66.vercel.app)

---

## ✨ Features

- ⚡ **Lightning Fast** — Build a polished, professional resume in under 5 minutes with a guided flow
- 🧩 **Multiple Pro Templates** — Recruiter-approved, ATS-friendly layouts (Modern Professional, Clean Minimal, Creative Profile, and more)
- 📥 **Instant PDF Export** — Download pixel-perfect resumes that keep formatting flawless everywhere
- 🔐 **User Authentication** — Secure login/logout with a personal dashboard
- 📊 **Dashboard Overview** — Track total resumes created, downloads, and last-edited date at a glance
- 📝 **Section-based Editor** — Build out Profile, Work Experience, Skills, and Education section by section
- 📈 **Progress Tracking** — See completion percentage for each resume you're working on
- 🎨 **Live Template Preview** — Preview all templates before creating or editing a resume

---

## 🖥️ Tech Stack

- **Frontend:** React (JavaScript), CSS
- **Backend:** Node.js
- **Deployment:** Vercel

> Update this section with your exact libraries/frameworks (e.g. Express, MongoDB, Tailwind, etc.) as used in `/frontend` and `/backend`.

---

## 📸 Screenshots

| Landing Page | Dashboard | Templates |
|---|---|---|
| Hero section with stats & testimonials | Manage all your resumes in one place | Choose from multiple resume styles |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/Nayanvavadiya/Resume-builder.git
   cd Resume-builder
```

2. **Set up the backend**
```bash
   cd backend
   npm install
```
   Create a `.env` file inside `backend/` with your required environment variables (e.g. database URI, JWT secret, port).

```bash
   npm start
```

3. **Set up the frontend**
```bash
   cd ../frontend
   npm install
   npm start
```

4. Open your browser at `http://localhost:3000` (or the port shown in your terminal).

---

## 📁 Project Structure

```text
.
├── backend/
│   ├── config/              # Database configuration
│   │   └── db.js
│   ├── controllers/         # Business logic
│   │   ├── resumeController.js
│   │   ├── uploadImages.js
│   │   └── userController.js
│   ├── middleware/          # Custom middleware
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   │   ├── resumeRoutes.js
│   │   └── userRoutes.js
│   ├── uploads/             # Uploaded images
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js            # Backend entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/          # Images & static assets
│   │   ├── components/      # Reusable React components
│   │   ├── context/         # React Context API
│   │   ├── pages/           # Application pages
│   │   ├── utils/           # Helper functions & API utilities
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx         # Frontend entry point
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
└── README.md
```

---

## 🗺️ Roadmap

- [ ] Add more resume templates
- [ ] AI-powered content suggestions
- [ ] Cover letter builder
- [ ] Multi-language support
- [ ] Resume analytics (views, ATS score)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Nayan Vavadiya**
GitHub: [@Nayanvavadiya](https://github.com/Nayanvavadiya)

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
