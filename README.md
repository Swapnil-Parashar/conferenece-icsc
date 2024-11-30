# ICSC Landing Page - README

Welcome to the **ICSC Landing Page** repository! This project is a dynamic and responsive web application built with **React** to serve as the online hub for an international conference. It includes user authentication powered by **Firebase** for a personalized user experience.

---

## Features

### General Features
- **Responsive Design**: Optimized for all devices, including desktops, tablets, and smartphones.
- **Modern UI/UX**: Professionally designed interface with easy navigation and a focus on user engagement.
- **Dynamic Content**: Automatically updated information about conference schedules, speakers, and venue details.

### Authentication Features
- **Firebase Authentication**: Secure sign-in and sign-up options using:
  - Email and password
  - Google Authentication
- **User Personalization**: Authenticated users can access exclusive features, such as saving sessions or receiving event reminders.
- **Profile Management**: Display user details like name and email with options to log out.

---

## Tech Stack

- **Frontend**: React, React Router
- **Authentication**: Firebase Authentication
- **Styling**: CSS3, Material UI
- **Deployment**: Firebase Hosting

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- Firebase account

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/conferenece-icsc.git
   cd conferenece-icsc
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project.
   - Enable Firebase Authentication (email/password and Google).
   - Generate and download your Firebase config file.
   - Add the Firebase config details to a `.env` file:
     ```
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     ```

4. **Run the project**:
   ```bash
   npm start
   ```

5. **Build for production** (optional):
   ```bash
   npm run build
   ```

---

## File Structure

```
📁 src
 ┣ 📁 components       // Reusable React components
 ┣ 📁 pages            // Pages like Home, Login, Schedule, etc.
 ┣ 📁 firebase         // Firebase configuration and helper functions
 ┣ 📁 assets           // Images and static assets
 ┣ 📁 styles           // CSS or Tailwind configurations
 ┗ App.js              // Main app file
```

---

## Features Breakdown

### Landing Page
- Overview of the conference, including the theme and location.
- Call-to-action buttons for registration and schedule view.

### Authentication
- **Sign Up and Login**: Smooth, validated user authentication powered by Firebase.
- **Google Sign-In**: Quick access for users with Google accounts.
- **Protected Routes**: Pages accessible only to authenticated users.

### Schedule and Speakers
- Dynamic rendering of session schedules and speaker profiles.

### Registration
- Interactive form for user registration with real-time validation.

---

## Deployment

To deploy the application, follow the platform-specific instructions:

### Firebase Hosting
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Initialize Firebase:
   ```bash
   firebase login
   firebase init
   ```
3. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

## Contributing

Contributions are welcome! If you have ideas or find any issues, feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

