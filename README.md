# Unecon Career Guidance Website

A professional career assessment website for Saint Petersburg State University of Economics (Unecon) students. This static website uses psychological profiling to match students with their ideal career specialization.

## 🌟 Features

- **20 Psychological Questions**: Advanced profiling based on decision-making patterns and cognitive preferences
- **29 Specializations**: Comprehensive coverage of all Unecon programs
- **Professional Profiles**: Notable industry leaders for each specialization
- **Career Prospects**: Salary ranges and career paths
- **Beautiful Design**: Modern gradient UI with smooth animations
- **Fully Responsive**: Works on desktop, tablet, and mobile
- **GitHub Pages Ready**: Pure HTML/CSS/JavaScript - no dependencies

## 📁 Project Structure

```
career/
├── index.html              # Landing page
├── test.html              # Quiz page
├── results.html           # Results page
├── styles.css             # All styling
├── script.js              # Quiz logic
├── data.js                # Questions & specializations data
├── professionals.js       # Notable professionals database
├── images/                # Professional portraits & logo
│   ├── logo.png
│   └── [Professional Name].png (80+ images)
└── README.md             # This file
```

## 🚀 Deployment to GitHub Pages

1. **Create a new GitHub repository**
2. **Push all files to the repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Unecon Career Guidance Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select "main" branch as source
   - Click Save
4. **Access your site** at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) and Purple (#8B5CF6)
- **Gradients**: Modern blue-purple combinations
- **Status Colors**: Gold for winner, Blue for top-5, Gray for others

### Typography
- **Font**: System fonts (San Francisco, Segoe UI, Roboto)
- **Responsive**: Scales beautifully from mobile to desktop

### Components
- Card-based UI with elevation shadows
- Smooth transitions and animations
- Progress bars and status indicators

## 📊 How It Works

### Quiz Logic
1. User answers 20 carefully designed questions
2. Each answer has probability values for all 29 specializations
3. System calculates cumulative scores
4. Results are converted to percentages
5. Winner must have 10-15% lead over second place

### Calculation Formula
```javascript
// For each answer:
scores[specialization] += probability_value

// Convert to percentage:
percentage = (score / max_possible_score) * 100

// Ensure clear winner:
if (lead < 10%) {
    boost_top_scorer()
}
```

### Data Storage
- Uses localStorage to save progress
- Allows users to navigate back/forward
- Results persist until reset

## 🖼️ Image Requirements

### Professional Images
- **Format**: PNG files
- **Naming**: Exact match with professional name (e.g., "Terence Tao.png")
- **Fallback**: Colored placeholder with initials if image missing
- **Location**: `images/` directory

### Logo
- **File**: `images/logo.png`
- **Fallback**: Hidden if missing (graceful degradation)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔧 Customization

### Adding New Specializations
1. Update `data.js`: Add to `specializations` array and `specializationData` object
2. Update `professionals.js`: Add professional data
3. Update question probabilities: Add new column to all probability arrays

### Modifying Questions
1. Edit `data.js` questions array
2. Ensure probability arrays have correct length (29 values)
3. Adjust probabilities to match new logic

### Styling Changes
1. Modify CSS variables in `styles.css` `:root` section
2. All colors, spacing, and design tokens are centralized

## 📄 License

This project is created for educational purposes for Unecon students.

## 🤝 Contributing

This is a complete, deployment-ready website. To contribute:
1. Fork the repository
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 🎯 Key Features Implemented

✅ Pure HTML/CSS/JavaScript (no dependencies)
✅ Psychological profiling (not simple yes/no questions)
✅ 29 specializations with complete data
✅ 87 notable professionals with portraits
✅ Career prospects with salary ranges
✅ Modern gradient design
✅ Fully responsive
✅ Progress saving with localStorage
✅ Image fallbacks for missing portraits
✅ Smooth animations and transitions
✅ GitHub Pages ready

## 🚀 Quick Start

Simply open `index.html` in a web browser or deploy to any static hosting service!

---

**Built with ❤️ for Unecon students**
