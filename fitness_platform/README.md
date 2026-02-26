# Performance Tracking Dashboard UI

![Dashboard Preview](./assets/screenshots/overview.png)

A responsive, multi-screen dashboard UI built with **React** and **Tailwind CSS** — a pixel-accurate implementation of selected screens from a Figma community UI kit, adapted for real-world responsiveness across desktop, tablet, and mobile viewports.

---

## Screens

| Screen       | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| Sign In      | Authentication entry screen                                      |
| Sign Up      | New user registration screen                                     |
| Overview     | Main dashboard with activity summary                             |
| Progress     | Workout goals, health score, and calorie statistics              |
| Diet Details | Meal breakdown with ingredients, directions, and nutrition facts |
| Profile      | User profile and personal stats                                  |

### Screenshots

**Overview**
![Overview](./assets/screenshots/overview.png)

**Progress**
![Progress](./assets/screenshots/progress.png)

**Diet Details**
![Diet Detail](./assets/screenshots/diet-detail.png)

**Profile**
![Profile](./assets/screenshots/profile.png)

---

## Tech Stack

- **React** — component-based UI architecture
- **Tailwind CSS** — utility-first styling
- **React Router** — client-side routing
- **React Icons** — icon library

---

## Responsive Behavior

The original Figma design targets extra-large (XL) desktop screens. This implementation adapts the layout across three breakpoints:

- **Mobile** (`< 768px`) — stacked layout, slide-in sidebar via hamburger menu
- **Tablet** (`768px – 1024px`) — two-column grid, collapsible sidebar
- **Desktop** (`> 1024px`) — full sidebar visible, multi-column layout matching the original design

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/chiamakauyanna/dashboard-UI

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Design Source

Based on the **[45 Premium Online Gym UI Kit (Community)](https://www.figma.com/design/KXmVvvB676MHSdyXOdikGz/45--Premium-Online-Gym-UI-Kit--Community-?node-id=1-189)** — a Figma community resource. This project is a frontend implementation exercise and is not affiliated with the original design authors.

---

## Notes

- This is a UI-only project with no backend or live authentication.
- All data is static placeholder content.
- Built to demonstrate frontend execution, responsive layout adaptation, and reusable component architecture.

---

## Author

Frontend Developer — focused on clean, responsive UI implementation.
