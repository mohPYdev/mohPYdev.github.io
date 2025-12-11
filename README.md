# Mohammad Rafieian - Academic Personal Website

A modern, professional academic personal website built from scratch with dark warm colors, smooth animations, and a seamless user experience.

## 🎨 Features

- **Dark Warm Color Scheme** - Professional academic theme with burgundy, amber, and warm brown tones
- **Smooth Animations** - Elegant transitions and scroll-triggered animations
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Single Page Application** - Smooth scrolling navigation with active section highlighting
- **Modern Design** - Clean, professional layout perfect for academic portfolios
- **Performance Optimized** - Fast loading and smooth interactions

## 📁 Project Structure

```
mohPYdev.github.io/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive JavaScript
├── images/
│   └── profile.jpg     # Profile image
└── README.md           # This file
```

## 🚀 Local Testing

### Option 1: Simple HTTP Server (Recommended)

Since this is a static website, you can use any simple HTTP server:

#### Using Python 3:
```bash
# Navigate to the project directory
cd /home/mohpydev/Work/mohPYdev.github.io

# Start a simple HTTP server
python3 -m http.server 8000

# Or if you have Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: **http://localhost:8000**

#### Using Node.js (if you have it installed):
```bash
# Install http-server globally (one time)
npm install -g http-server

# Start the server
http-server -p 8000
```

#### Using PHP:
```bash
php -S localhost:8000
```

### Option 2: VS Code Live Server

If you use VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Browser Direct Open

You can also open `index.html` directly in your browser, but some features (like smooth scrolling to sections) work better with a local server.

## 🌐 Deploying to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Push your files to GitHub:**
   ```bash
   git add .
   git commit -m "Add modern academic website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

3. **Wait a few minutes** for GitHub to build your site

4. **Access your site** at: `https://mohpydev.github.io`

### Method 2: Using GitHub CLI

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Add modern academic website"

# Add your GitHub repository as remote
git remote add origin https://github.com/mohpydev/mohPYdev.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow steps 2-4 from Method 1.

### Method 3: Using GitHub Desktop

1. Open GitHub Desktop
2. Add your repository
3. Commit and push your changes
4. Enable GitHub Pages in repository settings (same as Method 1, step 2)

## 📝 Important Notes

### Repository Name

For GitHub Pages to work automatically, your repository must be named:
- `mohpydev.github.io` (if your GitHub username is `mohpydev`)

If your repository has a different name, you'll need to:
1. Go to Settings → Pages
2. Select the branch and folder
3. Your site will be at: `https://mohpydev.github.io/REPOSITORY-NAME`

### Custom Domain (Optional)

If you want to use a custom domain:
1. Add a `CNAME` file in the root directory with your domain name
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

### Profile Image

Make sure your profile image (`images/profile.jpg`) exists. If you don't have one:
- Add your image to the `images/` folder
- Or update the image path in `index.html` (line with `src="images/profile.jpg"`)

## 🛠️ Customization

### Colors

Edit the CSS variables in `styles.css` (at the top of the file) to change the color scheme:

```css
:root {
  --bg-primary: #1a0f0a;
  --accent-gold: #d4a574;
  /* ... more colors ... */
}
```

### Content

Edit `index.html` to update:
- Personal information
- Education details
- Experience
- Projects
- Publications
- Contact information

### Animations

Adjust animation speeds and effects in `styles.css` and `script.js`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Images not loading
- Make sure image paths are correct
- Check that images exist in the specified folders
- Use relative paths (e.g., `images/profile.jpg`)

### Styles not applying
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors
- Verify `styles.css` is linked correctly in `index.html`

### GitHub Pages not updating
- Wait a few minutes (GitHub needs time to build)
- Check repository settings → Pages
- Verify you're pushing to the correct branch
- Clear browser cache

### Smooth scroll not working
- Make sure you're using a local server (not just opening the file)
- Check browser console for JavaScript errors

## 📄 License

This website template is free to use and modify for personal academic websites.

## 📧 Contact

For questions or issues, feel free to reach out:
- Email: Mohammad.Rafieian@utdallas.edu
- GitHub: [mohpydev](https://github.com/mohpydev)

---

**Built with ❤️ for academic professionals**

