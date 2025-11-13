# Premium Personal Portfolio Website

A modern, feature-rich portfolio website inspired by premium templates like Lendex. Built with vanilla HTML, CSS, and JavaScript with advanced animations and interactions.

## Features

### Design & UI
- **Dark/Light Mode Toggle** - Seamlessly switch between themes with persistent preference storage
- **Animated Particle Background** - Interactive particles.js background effect
- **Side Navigation** - Fixed sidebar navigation with smooth scrolling and active states
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern Gradient Color Scheme** - Beautiful gradients with CSS variables for easy customization
- **Poppins Font** - Premium Google Font for professional typography

### Sections

1. **Hero Section**
   - Split-screen layout with animated shapes
   - Auto-typing effect showing multiple roles
   - CTA buttons for portfolio and CV download
   - Social media links
   - Scroll indicator with bounce animation

2. **About Section**
   - Professional image frame with decoration
   - Personal information grid
   - Animated counters for statistics
   - Detailed biography

3. **Services Section**
   - 6 service cards with hover effects
   - Icon-based design
   - Responsive grid layout

4. **Resume Section**
   - Timeline layout for Education
   - Timeline layout for Experience
   - Hover animations on timeline items
   - Date badges with gradient design

5. **Skills Section**
   - Animated progress bars for technical skills
   - Circular progress indicators for professional skills
   - Smooth animations triggered by scroll

6. **Portfolio Section**
   - Filterable project gallery (All, Web App, Mobile, Design)
   - Hover overlays with project details
   - Responsive grid layout
   - Smooth filter animations

7. **Testimonials Section**
   - Auto-rotating testimonial slider
   - Manual navigation controls
   - Quote icons and author details
   - Smooth fade transitions

8. **Contact Section**
   - Contact information cards
   - Working contact form
   - Responsive form layout
   - Icon-based design

### Interactive Features

- **Smooth Scrolling** - Buttery smooth navigation between sections
- **Scroll Animations** - Elements fade in as you scroll
- **Active Navigation Highlighting** - Current section highlighted in navigation
- **Portfolio Filtering** - Filter projects by category with smooth animations
- **Testimonial Slider** - Auto-play with manual controls
- **Mobile Menu** - Hamburger menu with slide-in navigation
- **Form Validation** - Client-side form validation
- **Counter Animations** - Numbers animate up when scrolled into view
- **Skill Bars** - Progress bars animate when visible
- **Hover Effects** - Smooth transitions on all interactive elements

### Technical Features

- **CSS Variables** - Easy theme customization
- **Intersection Observer API** - Efficient scroll-based animations
- **LocalStorage** - Theme preference persistence
- **Responsive Grid & Flexbox** - Modern layout techniques
- **Optimized Performance** - Smooth 60fps animations
- **Cross-browser Compatible** - Works on all modern browsers
- **SEO Friendly** - Semantic HTML structure

## Technologies Used

- HTML5
- CSS3 (CSS Variables, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Particles.js - Interactive background particles
- Font Awesome 6.4.0 - Icon library
- Google Fonts (Poppins) - Typography

## Quick Start

1. **Download/Clone** the repository
2. **Open** `index.html` in your browser
3. **Customize** the content to match your personal brand
4. **Deploy** to your preferred hosting platform

## Customization Guide

### 1. Personal Information

Edit `index.html`:
- Update your name in the hero section (line 61)
- Modify the typed text array in `script.js` (line 168-173)
- Change social media links (lines 38-41)
- Update contact information (lines 587-605)
- Replace project details in portfolio section
- Customize services, resume timeline, and testimonials

### 2. Colors & Theme

Edit `styles.css` (lines 2-20):
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;    /* Accent color */
    --accent-color: #14b8a6;       /* Additional accent */
}
```

### 3. Particles Background

Edit `script.js` (lines 2-59) to customize:
- Particle count
- Colors
- Movement speed
- Interaction modes

### 4. Typography

Change font in `index.html` (line 12):
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Update CSS (line 50):
```css
font-family: 'YourFont', sans-serif;
```

### 5. Add Your Images

Replace placeholder icons with actual images:
- Hero section image (line 82-84 in index.html)
- About section image (line 109-111)
- Project screenshots in portfolio section
- Testimonial author photos

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages
4. Select branch to deploy (usually `main`)
5. Your site will be live at `https://username.github.io/repository-name`

### Netlify
1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Site deployed instantly with custom domain options

### Vercel
1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click
4. Get automatic deployments on every push

### Traditional Web Hosting
1. Upload all files via FTP/cPanel
2. Ensure `index.html` is in the root directory
3. Access via your domain name

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## File Structure

```
personal-portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Performance Tips

1. **Optimize Images** - Compress images before uploading
2. **Lazy Loading** - Add lazy loading for images
3. **Minify CSS/JS** - Use minification tools for production
4. **CDN** - Consider using CDN for Font Awesome and Particles.js
5. **Caching** - Set up proper caching headers

## Customization Ideas

- Add a blog section
- Integrate with backend for contact form
- Add Google Analytics
- Implement PWA features
- Add more language options
- Include a pricing section
- Add client logos section
- Create case studies for projects

## Troubleshooting

**Particles not showing?**
- Check if particles.js CDN is loading
- Open browser console for errors

**Dark mode not persisting?**
- Check if localStorage is enabled in browser
- Clear cache and cookies

**Mobile menu not working?**
- Ensure JavaScript is enabled
- Check console for errors

## Credits

- Design inspired by premium portfolio templates (Lendex)
- Icons from Font Awesome
- Fonts from Google Fonts
- Particles.js by Vincent Garreau

## License

Free to use for personal and commercial projects. No attribution required.

## Support

For questions or issues:
- Open an issue on GitHub
- Reach out via the contact form

---

**Made with ❤️ for developers and creatives**
