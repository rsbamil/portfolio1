<h1 align="center">👨‍💻 Rohit Kumar — Developer Portfolio</h1>

<p align="center">
  <b>Software Developer · Full-Stack · Microservices · .NET · React</b><br/>
  <a href="https://github.com/rsbamil">GitHub</a> ·
  <a href="https://www.linkedin.com/in/rohitkummarrr">LinkedIn</a> ·
  <a href="https://leetcode.com/u/Rohit_kumar_45/">LeetCode</a> ·
  <a href="https://drive.google.com/file/d/1NKWSbrvIfMg3JJOcLYE3RH98q1mxrc6u/view?usp=sharing">Resume</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-latest-38B2AC?style=flat-square&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Docker-ready-2496ED?style=flat-square&logo=docker" />
  <img src="https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=flat-square&logo=render" />
</p>

---

## 📌 About

A personal developer portfolio built with **Next.js 15** and **Tailwind CSS**, showcasing my projects, skills, experience, and a working contact form. Designed to be fast, responsive, and production-ready with Docker and Render deployment support.

---

## 🗂️ Sections

| Section | Description |
|---|---|
| 🦸 **Hero** | Introduction, tech stack, and quick links |
| 👤 **About Me** | Personal summary and background |
| 💼 **Experience** | Work history and roles |
| 🛠️ **Skills** | Technology stack with icons |
| 🚀 **Projects** | Featured projects with live demos and source code |
| 🎓 **Education** | Academic background |
| 📝 **Blog** | Latest posts fetched from dev.to |
| 📬 **Contact** | Working contact form via Gmail / Telegram |

---

## 🚀 Featured Projects

| # | Project | Stack | Links |
|---|---|---|---|
| 1 | **AI Career Helper** | Next.js, TypeScript, MongoDB, OpenAI API | [Code](https://github.com/rsbamil/Ai-Career-Coach) |
| 2 | **Hospital Management System** | React, Express, MongoDB, Tailwind | [Code](https://github.com/rsbamil/Hospital-Management-System) · [Demo](https://hospital-management-system-xi-three.vercel.app/) |
| 3 | **Mocktail Animations** | React, Framer Motion, GSAP | [Code](https://github.com/rsbamil/mocktail) · [Demo](https://mocktail-steel.vercel.app/) |
| 4 | **Media Player App** | React, Redux, JWT, Tailwind | [Code](https://github.com/rsbamil/Media-Player) |
| 5 | **ConnectSphere** | React, ASP.NET Core, PostgreSQL, RabbitMQ, Redis | [Code](https://github.com/rsbamil/ConnectSphere) · [Demo](https://cs-frontend-2rox.onrender.com) |

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS, Sass, Lottie, Framer Motion
- **Backend (Contact):** Nodemailer (Gmail), Telegram Bot API
- **Libraries:** react-icons, react-toastify, react-google-recaptcha, sharp
- **DevOps:** Docker, Render (Blueprint)

---

## ⚙️ Local Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Git](https://git-scm.com/)

### Clone & Install

```bash
git clone https://github.com/rsbamil/professional-portfolio.git
cd professional-portfolio
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_GTM=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
GMAIL_PASSKEY=
EMAIL_ADDRESS=
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🐳 Docker (Local)

### Using Docker Compose

```bash
docker-compose up --build
```

### Manual Docker Build

```bash
# Build image
docker build -t rohit-portfolio -f Dockerfile.prod .

# Run container
docker run -p 3000:3000 --env-file .env.local rohit-portfolio
```

Open [http://localhost:3000](http://localhost:3000).

---

## ☁️ Deploy to Render

This project includes a `render.yaml` **Blueprint** for one-click deployment.

### Steps

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → **New → Blueprint**
3. Connect your GitHub repo — Render auto-detects `render.yaml`
4. Click **Apply** to create the service
5. Go to **Service → Environment** and fill in your secret variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_APP_URL` | Your Render URL (e.g. `https://rohit-portfolio.onrender.com`) |
| `TELEGRAM_BOT_TOKEN` | From [@BotFather](https://t.me/BotFather) on Telegram |
| `TELEGRAM_CHAT_ID` | Your Telegram chat ID |
| `GMAIL_PASSKEY` | Gmail App Password (16-char) |
| `EMAIL_ADDRESS` | Your Gmail address |

6. Trigger a **Manual Deploy** — your portfolio goes live 🎉

> **Free Tier Note:** Render free services spin down after inactivity. First request after sleep may take ~30s (cold start).

---

## 🔑 Getting Secret Keys

### Gmail App Password

1. Go to [myaccount.google.com](https://myaccount.google.com/) → **Security**
2. Enable **2-Step Verification**
3. Go to **App Passwords** → select "Mail" → "Other (Portfolio)"
4. Copy the generated 16-character password → use as `GMAIL_PASSKEY`

### Telegram Bot & Chat ID

1. Open Telegram → search **@BotFather** → `/newbot`
2. Copy the token → use as `TELEGRAM_BOT_TOKEN`
3. Send a message to your bot, then visit:
   ```
   https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
   ```
4. Copy the `chat.id` value → use as `TELEGRAM_CHAT_ID`

---

## 📁 Project Structure

```
portfolio1/
├── app/                    # Next.js App Router pages & components
│   ├── components/
│   │   └── homepage/       # Hero, About, Skills, Projects, Contact...
│   └── page.js             # Main entry page
├── public/                 # Static assets (images, icons)
├── utils/
│   └── data/               # All customizable data files
│       ├── personal-data.js
│       ├── projects-data.js
│       ├── skills.js
│       ├── experience.js
│       ├── educations.js
│       └── contactsData.js
├── Dockerfile.prod         # Production Docker image
├── render.yaml             # Render Blueprint for deployment
├── next.config.js          # Next.js configuration
└── .env.example            # Environment variable template
```

---

## 🎨 Customization

All portfolio content lives in `utils/data/`. Edit these files to make it yours:

- **`personal-data.js`** — Name, bio, email, social links, resume URL
- **`projects-data.js`** — Project cards (name, description, tools, links)
- **`skills.js`** — Your tech skills list
- **`experience.js`** — Work experience entries
- **`educations.js`** — Education history
- **`contactsData.js`** — Contact section info

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <a href="https://github.com/rsbamil">Rohit Kumar</a></p>
