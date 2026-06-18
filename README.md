# Aziz Zoaib — Portfolio Website

Personal portfolio for [azizzoaib.com](https://azizzoaib.com) built with Next.js 16, Tailwind CSS v4 and Groq AI.

## Features

- **AI Chat Widget** — Floating chat assistant powered by Groq Llama 3.1, trained on CV/profile data via `public/context.md`
- **Responsive design** — Mobile-first with hamburger nav, photo, CV download button
- **Dark theme** — Slate/cyan palette with gradient accents
- **Sections** — Hero, About, Skills, Experience timeline, Projects, Awards & Certifications, Community, Contact
- **Dynamic API route** — `/api/chat` handles Groq requests server-side

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 + `@tailwindcss/postcss` |
| AI | Groq API (`llama-3.1-8b-instant`) |
| Icons | lucide-react |
| Hosting | EC2 + nginx + systemd |
| SSL | Let's Encrypt (certbot) |

## Local development

```bash
npm install
cp .env.local.example .env.local   # add your GROQ_API_KEY
npm run dev
```

Create `.env.local`:
```
GROQ_API_KEY=your_groq_api_key_here
```

## Build & deploy

```bash
npm run build
npm start
```

## EC2 deployment

The app runs as a systemd service on EC2 behind nginx.

**Systemd service:** `/etc/systemd/system/portfolio.service`
```ini
[Service]
User=ec2-user
WorkingDirectory=/home/ec2-user/my-portfolio
ExecStart=/home/ec2-user/.nvm/versions/node/v20.20.2/bin/node /home/ec2-user/my-portfolio/node_modules/.bin/next start -p 3000
Environment="NODE_ENV=production"
Environment="GROQ_API_KEY=your_key_here"
```

**Redeploy:**
```bash
cd /home/ec2-user/my-portfolio
git pull origin main
npm install
npm run build
sudo systemctl restart portfolio
```

## AI context

The chat widget reads `public/context.md` as its knowledge base. Update this file to change what the AI knows about Aziz. No retraining needed — changes take effect after restart.

## Project structure

```
app/
  api/chat/route.ts     # Groq API route
  components/
    ChatWidget.tsx      # Floating AI chat widget
  globals.css           # Tailwind v4 styles
  layout.tsx            # Root layout + viewport meta
  page.tsx              # Main portfolio page
public/
  aziz-zoaib.jpg        # Profile photo
  aziz-zoaib-cv.pdf     # CV download
  context.md            # AI knowledge base
```
