# KidQuest - Kids Learning Platform HTML5 Template

KidQuest is a commercial-grade, premium responsive HTML5 website template designed for children's online learning platforms, homeschooling cooperatives, coding academies, and STEM tutors. 

## Features

- **Kid-Friendly & Trustworthy UX:** Sleek, modern, harmonized color palettes suitable for parents seeking safe and structured curriculum paths.
- **Dual Dashboard Simulators:** Fully functional client-side Student and Parent Dashboard views embedded directly inside `login.html`.
- **Course Filtration & Live Search:** Instantly filters courses by subject categories, age groups, and difficulty levels.
- **Toggle-able Dark Mode:** Persistent dark theme setting across all pages with zero light-mode flashing during reload.
- **Interactive Mini-Game:** Custom Catch the Sprite game built directly into the 404 error page.
- **COPPA Conscious Safety Corner:** Dedicated Parent Trust sections and safe newsletter gates.

## Tech Stack

- **Markup:** Semantic HTML5
- **Grid Layout:** Bootstrap 5 (grid and containers utilities only)
- **Styling:** Vanilla CSS3 Custom Properties (variables)
- **Animations:** CSS Keyframes & GSAP timeline triggers
- **Scripting:** Vanilla JavaScript (no external runtime dependencies)

## Project Structure

```text
/online-learning-kids/
│
├── index.html
├── home-2.html
├── courses.html
├── course-details.html
├── subscription-plans.html
├── instructors.html
├── instructor-details.html
├── blog.html
├── blog-details.html
├── contact.html
├── login.html
├── signup.html
├── 404.html
│
└── assets/
    ├── css/
    │   ├── bootstrap.min.css
    │   ├── style.css
    │   ├── dark.css
    │   └── animations.css
    │
    ├── js/
    │   ├── main.js
    │   ├── theme-toggle.js
    │   ├── student-dashboard.js
    │   ├── parent-dashboard.js
    │   └── animations.js
    │
    ├── images/
    ├── icons/
    └── fonts/
```

## How to Customize

1. **Colors:** Modify `:root` color tokens in [style.css](file:///c:/Users/sriva/OneDrive/Desktop/august websites/Online_Learning_Platform_for_Kids/assets/css/style.css) and [dark.css](file:///c:/Users/sriva/OneDrive/Desktop/august websites/Online_Learning_Platform_for_Kids/assets/css/dark.css) to suit your brand identity.
2. **Curriculum/Courses:** Adding course items on the [courses.html](file:///c:/Users/sriva/OneDrive/Desktop/august websites/Online_Learning_Platform_for_Kids/courses.html) grid is easy—simply clone a card block and customize its data-attributes (`data-title`, `data-subject`, `data-age`, `data-difficulty`).
