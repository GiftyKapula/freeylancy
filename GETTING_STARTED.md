# Freeylancy - Getting Started Guide

Welcome to your new Freeylancy website! This guide will help you get the site up and running.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation & Running

1. **Install dependencies:**

   ```powershell
   npm install
   ```

2. **Start the development server:**

   ```powershell
   npm start
   ```

3. **Open your browser:**
   The site will automatically open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Freeylancy/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   │   ├── Button.js
│   │   ├── Button.module.css
│   │   ├── Section.js
│   │   └── Section.module.css
│   ├── sections/           # Page sections
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── Work.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/             # Global styles & theme
│   │   ├── global.css
│   │   └── theme.js
│   ├── data/               # Content data
│   │   └── content.js
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── package.json
└── README.md
```

## 🎨 Design System

This project uses a Swiss-inspired design system with:

- **Minimalist color palette** - Clean blacks, whites, and a vibrant blue accent
- **Typography-focused** - Clear hierarchy with Inter font family
- **Generous whitespace** - Breathing room for content
- **Grid-based layouts** - Structured and organized
- **Mobile-first responsive** - Works beautifully on all devices

### Key Colors

- Primary Blue: `#0052FF`
- Black: `#1A1A1A`
- White: `#FFFFFF`
- Gray scale for text and borders

## ✏️ Customization

### 1. Update Your Content

Edit `src/data/content.js` to customize:

- Projects (Livelett, SyteSnap, Saccord)
- Services offered
- Technologies you use
- Company information
- Contact details

### 2. Modify Colors & Theme

Edit `src/styles/theme.js` to change:

- Color palette
- Font sizes
- Spacing values
- Border radius
- Shadows

### 3. Adjust Sections

Each section is in `src/sections/`:

- **Header** - Navigation bar
- **Hero** - Main landing section
- **Services** - Services showcase
- **Work** - Portfolio/projects
- **Contact** - Contact form
- **Footer** - Footer information

### 4. Add Images

To add project images:

1. Place images in `public/images/`
2. Update the project cards in `Work.js`
3. Replace the placeholder with `<img>` tags

Example:

```jsx
<img
  src="/images/livelett-screenshot.jpg"
  alt="Livelett app"
  className={styles.projectImage}
/>
```

## 🎯 Key Features

- ✅ Modern Swiss-inspired minimal design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Interactive hover effects
- ✅ Contact form with validation
- ✅ Project showcase cards
- ✅ Service grid display
- ✅ Clean, organized code structure
- ✅ CSS Modules for scoped styling
- ✅ Accessibility-friendly

## 🔧 Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`

Builds the app for production to the `build` folder.
The build is optimized and ready to deploy.

### `npm test`

Launches the test runner (if tests are added).

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Build your app: `npm run build`
2. Drag and drop the `build` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/freeylancy",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📝 Next Steps

1. **Replace placeholder content** with your actual information
2. **Add real project images** for Livelett, SyteSnap, and Saccord
3. **Update contact information** with your real email/phone
4. **Add social media links** in the footer
5. **Set up form submission** (integrate with EmailJS, Formspree, or your backend)
6. **Add Google Analytics** for tracking (optional)
7. **Optimize images** for web performance
8. **Add favicon** in `public/` folder
9. **Test on multiple devices** and browsers
10. **Deploy to production**

## 🎓 Tips for Best Results

### Performance

- Compress images before adding them
- Use WebP format for images when possible
- Lazy load images below the fold

### SEO

- Update meta tags in `public/index.html`
- Add alt text to all images
- Use semantic HTML (already done!)
- Add a sitemap when deploying

### Accessibility

- Maintain color contrast ratios
- Test with keyboard navigation
- Add ARIA labels where needed
- Test with screen readers

## 🆘 Troubleshooting

### Port already in use?

```powershell
# Kill the process and restart
npm start
```

### Module not found?

```powershell
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Build fails?

- Check for console errors
- Ensure all imports are correct
- Verify Node.js version (should be 14+)

## 📚 Resources

- [React Documentation](https://react.dev)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Swiss Design Principles](https://www.smashingmagazine.com/2009/07/lessons-from-swiss-style-graphic-design/)
- [Inter Font](https://rsms.me/inter/)

## 💡 Support

Need help? Here are some resources:

- React community: [reactjs.org/community](https://react.dev/community)
- Stack Overflow: Tag your questions with `reactjs`
- Create React App docs: [create-react-app.dev](https://create-react-app.dev/)

---

**Built with ❤️ using React and Swiss design principles**

Happy coding! 🎉
