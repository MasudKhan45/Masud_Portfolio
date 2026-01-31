# The Data Sprinter - 3D Interactive Portfolio

**An immersive 3D runner-style portfolio experience showcasing the career journey of Masud Khan.**

![Portfolio Preview](public/assets/profile.jpg)

## 🎮 Experience Overview

**"The Data Sprinter"** is a unique portfolio presentation that transforms your career story into an interactive journey. As you scroll, you control a futuristic character running through different zones representing different phases of Masud's professional evolution.

### Journey Zones

1. **🏠 Home Base** - Rooftop Identity Card with profile and START RUN button
2. **🏭 Industrial Zone** - Mechanical engineering experience (Bhilai Steel Plant, GFG Student Chapter)
3. **☁️ The Drop** - Transition zone representing the leap from mechanical to data analytics
4. **🌃 Neon City** - Data analytics projects with holographic displays

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Usage

1. **Open** the site (default: `http://localhost:5173`)
2. **Admire** the Identity Card and idle camera animation
3. **Click** "START RUN" to begin the journey
4. **Scroll** to run through the zones and explore projects
5. **Read** the project cards that appear along the way
6. **Reach** the end for contact options

## 🛠️ Tech Stack

- **React** + **Vite** - Fast development and build
- **Three.js** via **React Three Fiber** - 3D rendering
- **@react-three/drei** - R3F helpers (ScrollControls, Text, Html)
- **@react-three/postprocessing** - Visual effects (Bloom, Vignette, Glitch)
- **Zustand** - State management
- **GSAP** - Animation library (ready for advanced transitions)

## 📁 Project Structure

```
src/
├── components/
│   ├── canvas/          # 3D components
│   │   ├── Character.jsx      # Player character
│   │   ├── Scene.jsx          # Main 3D scene
│   │   ├── ZoneIndustrial.jsx # Mechanical zone
│   │   ├── TheDropZone.jsx    # Transition zone
│   │   ├── ZoneNeon.jsx       # Data analytics zone
│   │   ├── HomeInterface.jsx  # Identity card
│   │   ├── InfoPopup.jsx      # Project cards
│   │   ├── Starfield.jsx      # Background stars
│   │   └── Effects.jsx        # Post-processing
│   └── dom/             # HTML overlays
│       ├── UI.jsx       # Main UI wrapper
│       └── Footer.jsx   # End screen
├── data/
│   └── resumeData.js    # Resume content
├── store/
│   └── useStore.js      # Game state
└── App.jsx              # Entry point
```

## 🎨 Customization

### Adding 3D Models

Replace the placeholder character:

1. Download a rigged character from [Mixamo](https://www.mixamo.com/)
2. Export as `.glb` with animations (Idle, Run, Jump)
3. Place in `public/assets/models/`
4. Update `Character.jsx`:

```jsx
import { useGLTF, useAnimations } from '@react-three/drei'

const { scene, animations } = useGLTF('/assets/models/character.glb')
const { actions } = useAnimations(animations, ref)

// Play animation based on gameStatus
useEffect(() => {
  if (gameStatus === 'running') {
    actions['Run'].play()
  } else {
    actions['Idle'].play()
  }
}, [gameStatus])
```

### Modifying Content

Edit `src/data/resumeData.js` to update:
- Personal information
- Experience entries
- Project details
- Skills

### Changing Colors

The cyberpunk theme uses:
- **Cyan/Teal**: `#00ffff` (Neon accents, runner glow)
- **Magenta**: `#ff00ff` (Project holograms)
- **Orange**: `#ff6600` (Industrial zone)
- **Red**: `#ff0044` (Visor, warnings)

## 🎯 Performance Tips

- **Post-processing is expensive** - Reduce bloom intensity or disable on mobile
- **Particle count** - Reduce starfield count from 2000 to 500 on low-end devices
- **Shadows** - Disable `castShadow` and `receiveShadow` for better FPS

## 📝 Resume PDF

Place your PDF in `public/assets/resume.pdf` and the download button in the footer will work automatically.

## 🚧 Known Issues

- Browser environment currently unavailable for automated testing
- Responsive mobile layout needs manual testing
- Scroll physics on touch devices may need adjustment

## 📄 License

This project is open source and available under the MIT License.

---

**Created with ❤️ using React Three Fiber**
