# Next.js Portfolio with Admin Dashboard

A modern, full-stack portfolio website built with Next.js 14, TypeScript, MongoDB, and NextAuth. Features a complete admin dashboard for managing all portfolio content dynamically.

## Features

### Frontend
- ✨ Modern, responsive design with Tailwind CSS
- 🌓 Dark/Light mode support
- 🎨 Smooth animations and transitions
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Optimized performance with Next.js 14
- 🎯 SEO-friendly with metadata
- 📧 Working contact form

### Admin Dashboard
- 🔐 Secure authentication with NextAuth
- 📊 Analytics dashboard with statistics
- 🎨 Manage projects, skills, services, testimonials
- 📬 View and manage contact messages
- ⚙️ Site settings management
- 🖼️ Image upload support (ready for Cloudinary)
- 🔄 Real-time updates

### Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Forms**: React Hook Form (ready to integrate)
- **Charts**: Chart.js (ready for analytics)

## Project Structure

```
nextjs-portfolio/
├── app/
│   ├── admin/              # Admin dashboard pages
│   │   ├── layout.tsx      # Admin layout with sidebar
│   │   ├── page.tsx        # Dashboard home
│   │   ├── login/          # Login page
│   │   ├── projects/       # Projects management
│   │   ├── skills/         # Skills management
│   │   └── settings/       # Site settings
│   ├── api/                # API routes
│   │   ├── auth/          # NextAuth routes
│   │   ├── admin/         # Protected admin APIs
│   │   └── contact/       # Public contact API
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── admin/             # Admin-specific components
│   └── [sections]/        # Frontend sections
├── lib/                    # Utility functions
│   ├── mongodb.ts         # Database connection
│   └── auth.ts            # Auth helpers
├── models/                 # Mongoose models
│   ├── User.ts
│   ├── Project.ts
│   ├── Skill.ts
│   ├── Experience.ts
│   ├── Testimonial.ts
│   ├── Service.ts
│   ├── Contact.ts
│   └── Settings.ts
├── middleware.ts           # Auth middleware
└── types/                  # TypeScript types
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
```bash
cd /home/user/personal-portfolio/nextjs-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/portfolio
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Admin Credentials (for first-time setup)
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=changeme123
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

4. **Set up MongoDB**

**Option A: Local MongoDB**
```bash
# Install MongoDB
# macOS:
brew install mongodb-community
brew services start mongodb-community

# Ubuntu/Debian:
sudo apt install mongodb
sudo systemctl start mongodb

# Windows: Download from mongodb.com
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Add it to `.env` as `MONGODB_URI`

5. **Create first admin user**
```bash
node scripts/create-admin.js
```

Or register through the API:
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"yourpassword","name":"Admin"}'
```

6. **Run the development server**
```bash
npm run dev
```

7. **Open your browser**
- Portfolio: [http://localhost:3000](http://localhost:3000)
- Admin Dashboard: [http://localhost:3000/admin](http://localhost:3000/admin)

## Usage

### Admin Dashboard

1. **Login**: Navigate to `/admin/login`
   - Default: `admin@example.com` / `changeme123`

2. **Manage Content**:
   - **Projects**: Add/edit/delete portfolio projects
   - **Skills**: Manage technical and professional skills
   - **Services**: Update service offerings
   - **Testimonials**: Add client testimonials
   - **Messages**: View contact form submissions
   - **Settings**: Update site information and SEO

### API Endpoints

#### Public APIs
- `GET /api/settings` - Get site settings
- `POST /api/contact` - Submit contact form
- `GET /api/admin/projects` - Get all projects
- `GET /api/admin/skills` - Get all skills

#### Protected APIs (Admin only)
- `POST /api/admin/projects` - Create project
- `PUT /api/admin/projects/[id]` - Update project
- `DELETE /api/admin/projects/[id]` - Delete project
- Similar routes for skills, services, testimonials, etc.

## Customization

### 1. Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#6366f1',  // Change primary color
  },
  secondary: {
    500: '#ec4899',  // Change secondary color
  },
}
```

### 2. Content
- Update sections in `components/` folder
- Modify text in each component file
- Add your information in the admin dashboard

### 3. SEO
Update metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your description',
}
```

### 4. Add More Sections
Create new components in `components/` and import them in `app/page.tsx`

## Database Models

### Project
- title, description, category
- image, liveUrl, githubUrl
- tags[], featured, order

### Skill
- name, category (technical/professional)
- level (0-100), icon, order

### Experience
- title, company, location
- startDate, endDate, current
- description, type (work/education)

### Testimonial
- name, position, company
- content, image, rating
- featured, order

### Service
- title, description, icon, order

### Contact
- name, email, subject
- message, read status

### Settings
- Personal info (name, email, phone, location)
- Hero section (title, subtitles)
- Social links
- SEO settings

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Add environment variables
5. Deploy

### Environment Variables for Production
```
MONGODB_URI=your-production-mongodb-uri
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=your-production-secret
```

### Other Platforms
- **Netlify**: Similar to Vercel
- **Railway**: Easy database hosting
- **DigitalOcean**: Full control
- **AWS/Azure/GCP**: Enterprise solutions

## Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
mongosh

# Check connection string format
mongodb://localhost:27017/portfolio
mongodb+srv://user:pass@cluster.mongodb.net/portfolio
```

### NextAuth Issues
- Ensure `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Clear cookies and try again

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Features to Add

- [ ] Image upload with Cloudinary
- [ ] Blog section
- [ ] Email notifications
- [ ] Analytics integration
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Advanced search/filter
- [ ] Export data functionality

## Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## License

MIT License - Feel free to use for personal or commercial projects

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review MongoDB and Next.js documentation
3. Create an issue on GitHub

---

**Built with ❤️ using Next.js 14, TypeScript, and MongoDB**

## Quick Start Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Set up `.env` file
- [ ] Start MongoDB
- [ ] Create admin user
- [ ] Run dev server (`npm run dev`)
- [ ] Login to admin at `/admin/login`
- [ ] Add your content through dashboard
- [ ] Customize colors and styling
- [ ] Deploy to Vercel
