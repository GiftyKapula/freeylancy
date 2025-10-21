# Customization Guide

This guide shows you exactly what to edit to make the site your own.

## 🎯 Quick Customization Checklist

### 1. Company Information (5 minutes)

**File:** `src/data/content.js`

Update the `companyInfo` object:

```javascript
export const companyInfo = {
  name: "Freeylancy",
  tagline: "Design. Build. Deliver.",
  description: "Your custom description here...",
  email: "your-email@freeylancy.com", // ← Change this
  phone: "+1 (555) 123-4567", // ← Change this
  address: "Your location", // ← Change this
  social: {
    twitter: "https://twitter.com/yourhandle",
    linkedin: "https://linkedin.com/company/yours",
    github: "https://github.com/yourorg",
    dribbble: "https://dribbble.com/yourname",
  },
};
```

### 2. Project Details (10 minutes)

**File:** `src/data/content.js`

Update the `projects` array with your actual project links and details:

```javascript
{
  id: 1,
  name: 'Livelett',
  description: 'Update this description...',
  viewLink: 'https://youractuallink.com',  // ← Add real link
  // ... update other fields
}
```

### 3. Services (5 minutes)

**File:** `src/data/content.js`

Modify the `services` array if you offer different services:

```javascript
{
  id: 1,
  title: 'Your Service Name',
  tools: ['Tool1', 'Tool2'],
  description: 'What you offer...',
}
```

### 4. Hero Section Text (2 minutes)

**File:** `src/sections/Hero.js`

Change lines 15-22:

```javascript
<h1 className={styles.title}>
  Your Custom<br />Headline.
</h1>

<p className={styles.subtitle}>
  Your custom tagline and description...
</p>
```

### 5. Add Real Images (15 minutes)

#### Step 1: Add images to your project

Create an `images` folder in `public/`:

```
public/
  └── images/
      ├── livelett.jpg
      ├── sytesnap.jpg
      └── saccord.jpg
```

#### Step 2: Update Work.js

**File:** `src/sections/Work.js`

Replace line 27-30:

```javascript
// FROM:
<div className={styles.projectImage}>
  <span>📱</span>
</div>

// TO:
<div className={styles.projectImage}>
  <img
    src={`/images/${project.name.toLowerCase()}.jpg`}
    alt={project.name}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
```

### 6. Change Colors (5 minutes)

**File:** `src/styles/theme.js`

Update the primary color (line 6-8):

```javascript
export const COLORS = {
  primary: "#0052FF", // ← Your brand color
  primaryDark: "#0041CC", // ← Darker version
  primaryLight: "#E6EEFF", // ← Lighter version
  // ...
};
```

### 7. Update Page Title & Meta (2 minutes)

**File:** `public/index.html`

Lines 7-11:

```html
<meta name="description" content="Your SEO description here" />
<title>Your Company Name - Your Tagline</title>
```

### 8. Add Favicon (5 minutes)

#### Step 1: Create/get your favicon

- Create a 512x512px logo image
- Use [favicon.io](https://favicon.io/) to generate all sizes

#### Step 2: Add to public folder

```
public/
  ├── favicon.ico
  ├── logo192.png
  └── logo512.png
```

#### Step 3: Update index.html

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
```

## 🎨 Advanced Customization

### Change Fonts

#### Option 1: Use different Google Fonts

**File:** `public/index.html`

Replace line 12:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

**File:** `src/styles/global.css`

Update line 17:

```css
font-family: "Your Font", sans-serif;
```

#### Option 2: Use system fonts only

**File:** `src/styles/global.css`

Line 17:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Adjust Spacing

**File:** `src/styles/theme.js`

Modify the `SPACING` object to make everything more/less spacious.

### Modify Layout Widths

**File:** `src/styles/theme.js`

Lines 135-141:

```javascript
export const CONTAINER = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1400px", // ← Make this bigger/smaller
};
```

Then update container max-width in section CSS files.

### Add New Sections

1. Create new file: `src/sections/YourSection.js`
2. Create styles: `src/sections/YourSection.module.css`
3. Import in `src/App.js`:
   ```javascript
   import YourSection from "./sections/YourSection";
   ```
4. Add to the layout:
   ```javascript
   <main>
     <Hero />
     <YourSection /> {/* ← Add here */}
     <Services />
     // ...
   </main>
   ```

## 📱 Mobile Menu Customization

**File:** `src/sections/Header.js`

To change navigation items, update lines 48-71.

## 📧 Form Integration

### Option 1: EmailJS (Free, easy)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Update `src/sections/Contact.js`:

```javascript
import emailjs from "@emailjs/browser";

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
    .then(() => {
      alert("Message sent successfully!");
      // Reset form
    })
    .catch((error) => {
      alert("Failed to send message. Please try again.");
    });
};
```

### Option 2: Formspree (Free tier available)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action in `Contact.js`:

```javascript
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  className={styles.form}
>
```

### Option 3: Custom Backend

Update the `handleSubmit` function to call your API:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://your-api.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent!");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
```

## 🔍 SEO Optimization

### 1. Add React Helmet

```bash
npm install react-helmet-async
```

### 2. Update App.js

```javascript
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Freeylancy - Design & Development Agency</title>
        <meta name="description" content="Your description" />
        <meta property="og:title" content="Freeylancy" />
        <meta property="og:description" content="Your description" />
        <meta property="og:image" content="URL to your image" />
      </Helmet>
      {/* Rest of your app */}
    </HelmetProvider>
  );
}
```

## 📊 Add Analytics

### Google Analytics 4

Add to `public/index.html` before `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

## 🎭 Animation Libraries (Optional)

### Add Framer Motion

```bash
npm install framer-motion
```

Example usage in any component:

```javascript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>;
```

## 🎨 Color Scheme Generator

Don't like the blue? Generate a new color scheme:

1. Visit [coolors.co](https://coolors.co/)
2. Generate a palette
3. Update `src/styles/theme.js` with new colors
4. Ensure sufficient contrast for accessibility

## ✅ Pre-Launch Checklist

- [ ] All placeholder text replaced
- [ ] Real images added
- [ ] Contact information updated
- [ ] Social media links added
- [ ] Form submission working
- [ ] Favicon added
- [ ] Meta tags updated
- [ ] Tested on mobile
- [ ] Tested on tablet
- [ ] Tested on desktop
- [ ] All links working
- [ ] No console errors
- [ ] Fast page load (< 3s)
- [ ] Accessible (keyboard navigation works)
- [ ] Analytics added (optional)

---

Need more help? Check `GETTING_STARTED.md` for additional resources!
