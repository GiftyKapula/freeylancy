# 🚀 Quick Reference - Freeylancy Website

## 🎯 Most Common Tasks

### 1. Change Your Contact Info (2 min)

📁 File: `src/data/content.js`

```javascript
export const companyInfo = {
  email: 'your-email@freeylancy.com',     // ← Line 82
  phone: '+1 (555) 123-4567',             // ← Line 83
  address: 'Your location',                // ← Line 84
```

### 2. Update Project Links (1 min)

📁 File: `src/data/content.js`

```javascript
viewLink: 'https://your-actual-link.com',  // ← Lines 7, 17, 27
```

### 3. Change Hero Headline (1 min)

📁 File: `src/sections/Hero.js`

```javascript
<h1 className={styles.title}>
  Your Custom
  <br />
  Headline. // ← Lines 17-19
</h1>
```

### 4. Change Primary Color (30 sec)

📁 File: `src/styles/theme.js`

```javascript
primary: '#0052FF',                 // ← Line 6 (your brand color)
```

### 5. Add Real Images (5 min)

1. Put images in: `public/images/`
2. 📁 File: `src/sections/Work.js`, Line 27

```javascript
<img src={`/images/${project.name.toLowerCase()}.jpg`} alt={project.name} />
```

## 🎨 Color Variables

All in `src/styles/theme.js`:

- **Primary Blue**: `#0052FF` (CTAs, accents)
- **Text Primary**: `#1A1A1A` (headlines)
- **Text Secondary**: `#666666` (body text)
- **Background**: `#FFFFFF` (main)
- **Background Alt**: `#FAFAFA` (sections)

## 📱 Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Development Commands

```powershell
npm start          # Start dev server (http://localhost:3000)
npm run build      # Build for production
npm test           # Run tests (if added)
```

## 📁 File Structure at a Glance

```
src/
├── components/          # Reusable UI components
├── sections/           # Page sections (Header, Hero, etc.)
├── styles/             # Global styles & theme
├── data/
│   └── content.js      # ← EDIT THIS FOR CONTENT
└── App.js              # Main app
```

## 🎭 Component Usage

### Button

```javascript
<Button variant="primary" size="large" href="#contact">
  Click Me
</Button>
```

Variants: `primary`, `secondary`, `ghost`
Sizes: `small`, `medium`, `large`

### Section

```javascript
<Section size="large" variant="dark" bordered>
  Your content
</Section>
```

## 📞 Adding About Section (Optional)

Already created at `src/sections/About.js`!

To use it:

1. Open `src/App.js`
2. Add import: `import About from './sections/About';`
3. Add to layout: `<About />` (between Services and Work)

## 🔗 Form Integration Quick Setup

### EmailJS (Easiest)

1. Sign up: [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Update `Contact.js` handleSubmit

### Formspree (No code)

1. Get form endpoint from [formspree.io](https://formspree.io)
2. Add action to form in `Contact.js`

## 📊 Add Analytics

Add to `public/index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXX");
</script>
```

## 🚀 Deploy

### Vercel (Recommended)

1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Deploy!

### Netlify

```powershell
npm run build
# Drag 'build' folder to netlify.com/drop
```

## 🐛 Common Issues

### Port 3000 in use?

```powershell
# Just close the other app or terminal using port 3000
```

### Module not found?

```powershell
npm install
```

### Changes not showing?

```powershell
# Hard refresh: Ctrl + Shift + R (Windows)
# Or clear cache and refresh
```

## ✅ Pre-Launch Checklist

Essential:

- [ ] Contact info updated (`content.js`)
- [ ] Project links updated (`content.js`)
- [ ] Real images added (`public/images/`)
- [ ] Form working (EmailJS/Formspree)
- [ ] Favicon added (`public/`)
- [ ] Meta tags updated (`index.html`)
- [ ] Tested on mobile
- [ ] All links work
- [ ] No console errors

## 📚 Documentation Files

- `PROJECT_SUMMARY.md` - What's been built
- `GETTING_STARTED.md` - Detailed setup
- `CUSTOMIZATION.md` - How to customize everything
- `README.md` - Project overview

## 💡 Pro Tips

1. **Test mobile first** - Most users will visit on mobile
2. **Optimize images** - Use WebP format, compress before adding
3. **Keep it simple** - Don't over-customize, Swiss design = minimal
4. **Use the theme** - All colors/spacing in `theme.js` for consistency
5. **Deploy early** - Get it online, iterate from there

## 🎨 Design Principles (Swiss Style)

- Less is more
- Function over form
- Typography is key
- Grid-based layout
- Lots of whitespace
- Limited color palette
- Sharp, clean lines

## 📧 Contact for the Site

Default placeholders (CHANGE THESE!):

- Email: `hello@freeylancy.com`
- Phone: `+1 (555) 123-4567`

All in: `src/data/content.js`, line 82-84

---

## 🎉 You're Ready!

1. View: `npm start` → http://localhost:3000
2. Edit: `src/data/content.js`
3. Deploy: Push to GitHub → Vercel

**Need help?** Check the full documentation files!

---

_Built with React 18 + Swiss Design Principles_
