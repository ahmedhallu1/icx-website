# AIESEC in Alexandria Website

A modern, responsive website for AIESEC in Alexandria showcasing the organization's programs, opportunities, and team contact information. Built with HTML5, Tailwind CSS, and vanilla JavaScript.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Parallax effects, scroll animations, and smooth transitions
- **Dynamic Content**: Real-time opportunity fetching from N8N webhook
- **Visa Information Lookup**: Comprehensive visa requirements database searchable by country
- **Contact Directory**: Team structure with VP and team leader information

### Pages
1. **Home** (`index.html`)
   - Hero section with parallax background
   - Safety index showcase
   - Video section
   - Opportunity categories (Global Volunteer, Global Talent, Global Teacher)
   - Visa information lookup tool
   - Stories carousel
   - Footer with social links

2. **Why Alexandria** (`why-alex.html`)
   - City information and highlights
   - Benefits of choosing Alexandria
   - Local opportunities

3. **EPs Stories** (`stories.html`)
   - Success stories from exchange participants
   - Photo and testimonial gallery
   - Inspiring journeys

4. **Contact Us** (`contact.html`)
   - Team structure with VP and team leaders
   - Contact information (email, WhatsApp)
   - Professional layout with photos

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Data Management**: JSON files for visa data
- **Backend Integration**: N8N webhook for opportunities API
- **Design**: Custom CSS animations and effects

## 📋 Project Structure

```
icx-website/
├── index.html              # Home page
├── why-alex.html           # City information page
├── stories.html            # Success stories page
├── contact.html            # Contact page
├── site.css               # Main stylesheet with custom CSS
├── site.js                # Core JavaScript functionality
├── visa-data.json         # Visa requirements database
├── visa-data.js           # Visa data configuration
├── n8n-visa-workflow.json # N8N workflow export
├── aiesec-logo.png        # Logo asset
├── stanley.png            # Hero background image
├── Favicon.png            # Website favicon
└── README.md              # This file
```

## 🎨 Design Features

### Color Scheme
- **Navy**: `#061226`, `#0b1d3a` - Primary background
- **Gold**: `#e2c37b`, `#cfa24e` - Accent colors
- **Mist**: `#d6e0f2` - Light text
- **Ink**: `#f7f3ea` - Bright text

### Program Colors
- **Global Volunteer**: `#f05b4b` (Red)
- **Global Talent**: `#14b7bb` (Teal)
- **Global Teacher**: `#f28a2f` (Orange)

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - works with simple HTTP server

### Installation

1. Clone the repository
```bash
git clone https://github.com/aiesec-alexandria/icx-website.git
cd icx-website
```

2. Run a local server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using Live Server in VS Code
# Install Live Server extension and click "Go Live"
```

3. Open in browser
```
http://localhost:8000
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔗 Key Integrations

### N8N Opportunities Webhook
- Endpoint: `https://n8n.srv1235027.hstgr.cloud/webhook/opportunities`
- Method: GET
- Returns: Array of opportunity objects with fields: id, title, type, description, location, duration

### Visa Data
- Local JSON database with requirements for each visa type
- 5 visa categories: E-Visa, Tourist Visa, Visa on Arrival, Free Visa, Visa Extension Protocol
- Country-specific requirements and notes

## 💬 Features Explanation

### Opportunity Filtering
- Click any opportunity type in the navigation
- Automatically loads and filters opportunities by category
- Smooth scroll to opportunities section
- Works from any page on the site

### Visa Lookup
- Search for visa requirements by country name
- Get specific documents, fees, and application steps
- Country-specific additional requirements
- Important notes and reminders

### Contact Management
- VP + Team Leaders structure
- Direct contact links (Email, WhatsApp)
- Responsive layout adapts to mobile and desktop
- Professional photo placeholders

## 🎯 JavaScript Functions

### Core Functions
- `filterOpportunities(category)` - Filter and display opportunities by category
- `setupParallax()` - Initialize parallax background effects
- `setupVisaLookup()` - Initialize visa search functionality
- `openModal(type)` - Open visa details modal

### Utility Functions
- `escapeHTML(value)` - XSS protection
- `formatText(value)` - Text formatting with line breaks
- `normalizeCountry(value)` - Country name normalization

## 📊 Visa Database Structure

```json
{
  "visaCategories": {
    "E-Visa": {
      "title": "E-Visa",
      "description": "...",
      "requirements": [],
      "countryExtras": [],
      "applicationSteps": [],
      "generalNotes": []
    }
  },
  "countries": {
    "CountryName": ["Visa Type 1", "Visa Type 2"]
  }
}
```

## 🌐 Navigation

### Main Navigation
- Home
- Why Alex
- EPs Stories
- Contact Us
- Opportunities (dropdown)
  - Global Volunteer
  - Global Talent
  - Global Teacher

### Mobile Navigation
- Hamburger menu for smaller screens
- Same navigation structure
- Auto-closes on link click

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast text
- Focus management
- Reduced motion support (prefers-reduced-motion)

## 🔒 Security Features

- XSS protection through HTML escaping
- No sensitive data in frontend code
- External API calls through secure endpoints
- Safe DOM manipulation

## 📈 Performance Optimizations

- Smooth scrolling with CSS
- Lazy loading for images
- Intersection Observer for animations
- Debounced event handlers
- Optimized CSS animations
- Minimal JavaScript overhead

## 🐛 Common Issues & Solutions

### Opportunities not loading
- Check N8N webhook endpoint is accessible
- Verify internet connection
- Check browser console for errors

### Images not displaying
- Ensure image files are in project root
- Check file names match exactly (case-sensitive)
- Use full paths for external images

### Mobile layout issues
- Clear browser cache
- Check viewport meta tag in HTML
- Test in different browsers

## 📝 Editing Content

### Update Team Information
Edit `contact.html` - Replace placeholder names, emails, and WhatsApp links

### Update Visa Requirements
Edit `visa-data.json` - Modify requirements, application steps, and country-specific notes

### Update Stories
Edit `stories.html` - Add/modify success story cards

### Change Colors
Edit CSS variables in `site.css` (`:root` section) to update the color scheme

## 🚀 Deployment

### Deployment Steps
1. Ensure all links are correct (use relative paths)
2. Test all functionality locally
3. Upload files to hosting server
4. Set up HTTPS
5. Configure N8N webhook in production
6. Test on live domain

### Recommended Hosts
- Netlify
- Vercel
- GitHub Pages
- Traditional web hosting (Apache, Nginx)

## 📞 Support & Contribution

For questions or contributions:
- Contact AIESEC Alexandria team
- Submit issues for bugs
- Suggest features for improvements

## 📄 License

© 2026 AIESEC in Alexandria. All rights reserved.

## 🙏 Credits

- Built for AIESEC in Alexandria
- Designed with modern web standards
- Optimized for all devices
- Maintained by the web team

---

**Last Updated**: January 28, 2026

For more information about AIESEC, visit [www.aiesec.org](https://www.aiesec.org)
