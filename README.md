<div align="center">

<img src="https://github.com/your-repo/assets/hero-glass.png" width="900" alt="Glass Timer Banner"/>

# ✨ GLASS TIMER
### A futuristic, animated, heartbeat-synced timer with premium glassmorphism UI.

<br/>

<p>
  <img src="https://img.shields.io/badge/React-111?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TailwindCSS-111?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8" />
  <img src="https://img.shields.io/badge/Framer Motion-111?style=for-the-badge&logo=framer&logoColor=purple" />
  <img src="https://img.shields.io/badge/Lucide Icons-111?style=for-the-badge&logo=lucide&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-111?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
</p>

<br/>

---

## 🌌 A visually stunning timer experience

<img src="https://github.com/your-repo/assets/timer-preview-hero.png" width="650" style="border-radius: 20px; box-shadow: 0 0 40px rgba(0,255,200,0.4);" />

### Designed to look like a Dribbble-shot UI:
Glass panels, neon lights, smooth animations, and a heartbeat-like pulse every second.

---

## ✨ Features

### 🎯 Premium UI & UX
- Real **glassmorphism**
- Neon gradients and glowing lights
- Heartbeat animation synced with timer
- Smooth framer-motion transitions
- Animated Lucide icons

### ⏳ Smart Functionality
- Start / Pause / Reset
- Auto-save state with **localStorage**
- **History panel** with beautiful entries
- Fully responsive layout
- Dark aesthetic everywhere

---

## 🧠 Demo Preview

(Add your GIF here)

> The entire interface feels alive —  
> every second triggers a heartbeat pulse on the timer display 🔥

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-111?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TailwindCSS-111?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8" />
  <img src="https://img.shields.io/badge/Framer Motion-111?style=for-the-badge&logo=framer&logoColor=purple" />
  <img src="https://img.shields.io/badge/Lucide Icons-111?style=for-the-badge&logo=lucide&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-111?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
</p>

---

## 📦 Installation

Clone the repo:

```bash
git clone https://github.com/your-user/glass-timer.git
cd glass-timer
npm run dev
```

## 🧠 How It Works
🎯 Heartbeat Animation

Every time the timer increments, the <motion.h2> gets a new key, triggering a scale animation:
```bash
key={time}
animate={{ scale: [1, 1.15, 0.98, 1] }}
transition={{ duration: 0.6 }}
```

💾 LocalStorage Auto-Save
```bash
localStorage.setItem("timer", JSON.stringify({ time, isRunning }));
```
🧱 Glassmorphism UI

Layered gradient background + frosted panel:
```bash
backdrop-blur-xl bg-white/10 border border-white/20
```
## 🤝 Contributing

Pull requests are welcome!
If you'd like to add new features or improve animations, feel free to open an issue.

## ⭐ Show Your Support

If you like this project, please ⭐ star the repository — it helps a lot!

## 📜 License

This project is licensed under the MIT License.

<div align="center">
Built with ❤️ by Robson Muniz

“From Portugal to the world — code with style.”
</div>