# AIera Soft Skills Academy

A modern, professional educational website built with React, TypeScript, TailwindCSS, and Framer Motion. This project showcases essential soft skills training for the AI era with a futuristic yet calming design.

## 🚀 Features

### Core Functionality
- **Interactive Skill Wheel**: Clickable skills that update video content
- **Video Player**: Neon-bordered video player with fullscreen modal
- **Dark/Light Theme**: Seamless theme switching with local storage persistence
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations throughout the interface

### Sections
1. **Header**: Glassmorphism design with logo, theme toggle, and login button
2. **Hero**: Interactive skill wheel and video player
3. **Banner**: Glowing ticker with availability information
4. **Brochure & Instructors**: Course information and expert profiles
5. **Skills Section**: Searchable, expandable skill cards with practice exercises
6. **Footer**: Dark footer with neon accents and contact information

### Interactive Elements
- **Skill Cards**: Expandable with practice exercises and learning paths
- **Instructor Profiles**: Detailed modal views with social links
- **Brochure Preview**: Comprehensive course information modal
- **Search Functionality**: Real-time filtering of skills and topics

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Package Manager**: npm

## 🎨 Design System

### Colors
- **Primary**: Blue gradients (#0ea5e9)
- **Neon Accents**: Blue, Purple, Pink, Green, Yellow, Red
- **Dark Theme**: Custom dark color palette
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur

### Typography
- **Headings**: Poppins (Display)
- **Body**: Inter (Sans)

### Components
- **Glassmorphism Cards**: Semi-transparent with backdrop blur
- **Neon Borders**: Glowing borders with shadow effects
- **Gradient Text**: Colorful text gradients for emphasis
- **Smooth Transitions**: 300ms transitions throughout

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Main hero section
│   ├── Banner.tsx      # Availability banner
│   ├── BrochureInstructors.tsx  # Course & instructor info
│   ├── SkillsSection.tsx        # Skills grid with search
│   ├── Footer.tsx      # Site footer
│   ├── VideoModal.tsx  # Fullscreen video modal
│   ├── BrochureModal.tsx       # Brochure preview modal
│   └── InstructorProfile.tsx   # Instructor detail modal
├── context/            # React context
│   └── ThemeContext.tsx        # Dark/light theme management
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles & Tailwind imports

public/
├── skillsData.json     # Skills and topics data
├── instructorsData.json # Instructor information
├── brochureData.json   # Course brochure data
└── index.html          # HTML template
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd aiera-soft-skills-academy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
npm run build
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎭 Animation Features

- **Entrance Animations**: Staggered animations on scroll
- **Hover Effects**: Scale, color, and shadow transitions
- **Modal Transitions**: Smooth open/close animations
- **Loading States**: Skeleton loaders and spinners
- **Micro-interactions**: Button hover effects and feedback

## 🔧 Customization

### Adding New Skills
Edit `public/skillsData.json` to add new skills with:
- Title and description
- Topics array
- Topic color (blue, green, purple, pink, yellow, red)
- Practice exercises

### Adding Instructors
Edit `public/instructorsData.json` to add instructors with:
- Personal information
- Expertise areas
- Courses taught
- Social media links

### Styling
- Custom colors in `tailwind.config.js`
- Component styles in `src/index.css`
- Responsive utilities throughout components

## 🌟 Key Features Implementation

### Theme Switching
- Context-based theme management
- Local storage persistence
- Smooth transitions between themes

### Interactive Skill Wheel
- Clickable skill tiles
- Dynamic video updates
- Tooltip descriptions

### Search Functionality
- Real-time filtering
- Search across titles, descriptions, and topics
- Debounced input handling

### Modal System
- Reusable modal components
- Backdrop click to close
- Keyboard navigation support

## 🚀 Performance Optimizations

- **Lazy Loading**: Components load on scroll
- **Optimized Images**: Responsive image handling
- **Smooth Scrolling**: CSS scroll-behavior
- **Efficient Animations**: Hardware-accelerated transforms

## 🔒 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: ES6+, CSS Grid, Flexbox, CSS Variables

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: info@aiera-academy.com
- Website: [aiera-academy.com](https://aiera-academy.com)

---

**Built with ❤️ for the future of education**

"# softskillswithai" 
