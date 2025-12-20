# Portfolio Images Setup

## Instructions for Adding Your Images

To display your actual project images on the deployed site, follow these steps:

### 1. Upload Your Images to This Folder
Add the following image files to the `/public` folder in your GitHub repository:

- `profile.jpg` or `profile.png` - Your profile photo
- `mycare-dashboard-fuzzy.png` - MyCare dashboard background (blurred/fuzzy version)
- `mycare-dashboard-mobile.png` - MyCare mobile dashboard screenshot
- `moongarden-desktop.png` - Moon Garden desktop screenshot
- `moongarden-mobile.png` - Moon Garden mobile screenshot
- `hilareads-desktop.png` - Hilareads desktop screenshot
- `hilareads-mobile.png` - Hilareads mobile screenshot

### 2. Update the URLs in App.tsx
After uploading, open `/src/app/App.tsx` and replace the image URLs with:

```javascript
const profilePhoto = "/profile.jpg"; // or .png
const fuzzyDashboard = "/mycare-dashboard-fuzzy.png";
const mobileDashboard = "/mycare-dashboard-mobile.png";
const moonGardenDesktop = "/moongarden-desktop.png";
const moonGardenMobile = "/moongarden-mobile.png";
const hilareadsDesktop = "/hilareads-desktop.png";
const hilareadsMobile = "/hilareads-mobile.png";
```

### 3. Commit and Push
```bash
git add .
git commit -m "Add portfolio images"
git push
```

Vercel will automatically redeploy with your actual images!

## Image Optimization Tips
- Use PNG for screenshots with transparency
- Use JPG for photos (smaller file size)
- Recommended sizes:
  - Profile photo: 400x400px
  - Desktop screenshots: 1920px wide
  - Mobile screenshots: 400-500px wide
- Compress images before uploading (use tools like TinyPNG)
