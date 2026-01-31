# 🚀 The Data Sprinter - Deployment Guide

## Current Status ✅

Your 3D portfolio is **fully functional** and running on:
- **Local Dev Server**: http://localhost:5173
- **Status**: All core features implemented
- **Performance**: Optimized for desktop browsers

---

## 📋 Quick Start Checklist

### To View Your Portfolio:

1. ✅ Dev server is running (`npm run dev`)
2. 🌐 Open **http://localhost:5173** in your browser
3. 🎮 Click **"START RUN"** on the Identity Card
4. 🖱️ **Scroll down** to explore your career journey
5. 📊 View project details as you run through the Neon City

---

## 🎨 What You Should See

### **Home Screen:**
- Starfield background (2000+ stars)
- Your profile photo in a glowing cyan ring
- "MASUD KHAN" title
- "START RUN" button with cyberpunk styling
- Smooth camera floating around the character

### **Industrial Zone (0-30%):**
- Orange-lit factory buildings
- Steam vents on rooftops
- 3 experience billboards (Bhilai Steel, GFG, Chegg)
- Gritty, industrial atmosphere

### **The Drop (30-50%):**
- Dark transition zone
- Floating cloud particles
- Blue accent lighting
- Represents the career transition

### **Neon City (50-100%):**
- Glowing cyan grid floor
- 5 project monuments with:
  - Wireframe pedestals
  - Magenta holograms
  - Floating info cards
- Your Smart IV Drip, Fake News Detector, etc.

### **Finish Line (85%+):**
- "LEVEL COMPLETE" message
- EMAIL ME button
- DOWNLOAD RESUME button

---

## 🛠️ Common Issues & Fixes

### "I see a blank screen"
✅ **Fixed!** This was caused by the postprocessing library. Now using custom effects.

### "Nothing happens when I scroll"
- Make sure you clicked "START RUN" first
- Try refreshing the page (Ctrl + R)
- Check browser console for errors (F12)

### "The character doesn't move smoothly"
- This is normal during heavy scroll
- Performance can be improved by:
  - Reducing starfield particles (edit `Starfield.jsx`)
  - Disabling shadows
  - Using a dedicated GPU

### "I want to replace the placeholder character"
1. Download rigged character from [Mixamo](https://www.mixamo.com/)
2. Export as GLB with Idle/Run animations
3. Place in `public/assets/models/character.glb`
4. Update `Character.jsx` with GLB loader code (see README)

---

## 📦 Building for Production

```bash
# Build optimized production version
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` folder.

---

## 🌐 Deployment Options

### **Option 1: Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Option 2: Netlify**

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### **Option 3: GitHub Pages**

1. Add to `vite.config.js`:
```js
export default defineConfig({
  base: '/Masud_Portfolio/',
  plugins: [react()],
})
```

2. Build and deploy:
```bash
npm run build
cd dist
git init
git add .
git commit -m "Deploy"
git remote add origin <your-repo-url>
git push -f origin main:gh-pages
```

---

## 📝 Final Touches

### Add Your Resume PDF
1. Save your resume as `resume.pdf`
2. Place in `public/assets/resume.pdf`
3. The download button will work automatically

### Update Contact Info
Edit `src/data/resumeData.js`:
```js
personal: {
    email: "your@email.com",
    linkedin: "your-linkedin-url",
    github: "your-github-username"
}
```

### Add SEO Meta Tags
Edit `index.html`:
```html
<meta name="description" content="Masud Khan - Mechanical Engineer & Data Analyst Portfolio">
<meta property="og:title" content="The Data Sprinter | Masud Khan">
<meta property="og:image" content="/assets/profile.jpg">
```

---

## 🎯 Performance Tips

**For Better FPS:**
- Reduce `Starfield` count from 2000 to 500
- Disable shadows in Scene.jsx
- Lower spotlight intensity

**For Mobile:**
- Add touch controls (swipe to scroll)
- Reduce particle effects
- Simplify geometry

---

## 🐛 Debug Mode

To check what's happening:

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for any red errors
4. Check Network tab for failed asset loads

---

## ✨ Next Level Enhancements

### Add Audio
```bash
npm install @react-three/audio
```
Add cyberpunk soundtrack and footstep sounds.

### Advanced Transitions
Use GSAP for smooth camera cinematics during "The Drop".

### Loading Screen
Create animated progress bar with "SYSTEM INITIALIZING..." text.

### Particle Effects
Add data stream particles and neon sparks.

---

## 📞 Need Help?

If something isn't working:
1. Check the dev server terminal for errors
2. Clear browser cache and hard reload (Ctrl + Shift + R)
3. Delete `node_modules` and run `npm install` again
4. Check that all files are saved

---

## 🎊 You're Ready!

Your portfolio is complete and ready to impress recruiters and collaborators. The unique 3D runner format makes you stand out from traditional portfolios.

**Share it proudly! 🚀**
