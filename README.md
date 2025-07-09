🎬 Vidtube - YouTube Clone
Vidtube is a front-end project that replicates the core design and interactive experience of YouTube. Built using HTML, CSS, and JavaScript, this project offers a responsive layout, a dynamic sidebar, and simulated video browsing using query parameters.

🔥 Features
🎨 Modern UI/UX inspired by YouTube

🖥️ Responsive design for desktop and mobile

🎥 Dynamic video page loading via URL query parameters

🧭 Sidebar navigation with subscriptions and categories

🔎 Integrated search bar with mic icon and upload features

🎞️ Video thumbnails with view counts and channel info

🛠️ Tech Stack
HTML5 – structure & layout
CSS3 – custom styles, grid layout, media queries
JavaScript (Vanilla) – dynamic loading, sidebar toggle, video page data injection

📂 File Structure
bash
Copy
Edit
├── index.html          # Main homepage displaying video list
├── script.js           # Logic for sidebar toggle & dynamic video page
├── style.css           # Complete styling with responsiveness
├── video.html          # (Assumed) video playback template
├── images/             # Thumbnails, logos, icons


🚀 How It Works
Videos are shown on the homepage (index.html) as thumbnails.
Clicking a video navigates to a dynamic video.html page with the video URL and metadata passed via query parameters.
The script.js file extracts and injects this data to simulate a video playback experience.
A collapsible sidebar enhances the UI and is toggled using JavaScript.

📸 Preview
![Screenshot 2025-07-10 001132](https://github.com/user-attachments/assets/686f27f6-1b72-4eee-9df1-0bd36ead3ab5)
![Screenshot 2025-07-10 001121](https://github.com/user-attachments/assets/76ef3f91-b87a-4b77-9cc3-0d1f07f94cc8)
![Screenshot 2025-07-10 001039](https://github.com/user-attachments/assets/f71d4672-e336-4e42-9d50-71bc9b7e33ee)

📌 Future Enhancements (Optional)
Add real video playback functionality with <video> tags
Integrate with a backend or CMS for dynamic video data
User login and upload features




