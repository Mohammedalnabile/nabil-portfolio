# Portfolio Project Structure

## 📁 Project Organization

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── my-photo.jpg
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── index.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Component Structure

### Header Component
- Sticky navigation bar
- Professional logo and navigation links
- Responsive design with mobile menu support

### Hero Component
- Eye-catching landing section
- Call-to-action buttons
- Animated background effects

### About Component
- Profile image with hover effects
- Personal introduction
- Skills showcase with interactive tags

### Projects Component
- Grid layout for project cards
- Technology tags
- Links to live demos and GitHub repos

### Contact Component
- Contact information cards
- Interactive contact form
- Social media links

### Footer Component
- Copyright information
- Additional social links
- Responsive layout

## 🚀 How to Run

```bash
# Navigate to the project directory
cd portfolio/portfolio

# Install dependencies
npm install

# Start development server
npm start
```

## 🎨 Customization

### Update Personal Information
1. **Header**: Edit `src/components/Header/Header.jsx`
2. **Hero**: Modify `src/components/Hero/Hero.jsx`
3. **About**: Update text and skills in `src/components/About/About.jsx`
4. **Projects**: Add your projects in `src/components/Projects/Projects.jsx`
5. **Contact**: Change contact details in `src/components/Contact/Contact.jsx`

### Update Photo
Replace `src/assets/my-photo.jpg` with your own photo

### Modify Colors
Global colors are defined in component CSS files using:
- Primary: `#38bdf8` (cyan)
- Background: `#0f172a` (dark blue)
- Secondary bg: `#1e293b`
- Text: `#e2e8f0`

## 📝 Best Practices Used

- ✅ Component-based architecture
- ✅ Separated concerns (each component in its own folder)
- ✅ Consistent naming conventions
- ✅ Responsive design
- ✅ Semantic HTML
- ✅ Clean and maintainable CSS
- ✅ Reusable components
- ✅ Professional styling with smooth animations

## 🔧 Technologies

- React 19.2.0
- CSS3 with modern features
- Responsive Design
- Smooth Scrolling
- CSS Animations

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px
