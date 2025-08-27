# 📱 PropertyApp - React Native Take-Home Assignment

This is a **React Native (Expo)** project built for the Take-Home Assignment.  
The app implements a **Login → Dashboard flow** with validation, API simulation, and modern UI/UX.  

---

## 🚀 Features
- **Login Screen**
  - Email & Password input fields with validation.
  - Labels above inputs (Email address, Password).
  - Password field with show/hide eye icon.
  - "Forgot Password?" link (right aligned).
  - Custom back button `<` with theme color.
  - Login button disabled until both fields are filled.
  - Error message on invalid input or wrong credentials.
- **Dashboard Screen**
  - Custom top bar with **Back button** and **Sign Out button**.
  - Welcome message with profile avatar.
  - Stylish feature cards (Properties, Payments, Notifications, Settings).
  - Responsive layout across different screen sizes.

---

## 🔑 Login Credentials
Use these credentials to test the app:

- **Email:** `test@test.com`  
- **Password:** `123456`  

👉 If login is successful → You will be redirected to the **Dashboard screen**.  
👉 If login fails → An error message will appear.  

---

## 🛠️ Setup & Installation Instructions

### 1. Prerequisites
Before running this project, make sure you have installed:
- **Node.js** (LTS version recommended) → [Download Here](https://nodejs.org/)
- **Expo CLI** (globally) → install using:
  ```bash
  npm install -g expo-cli


Clone the Repository --- 
git https://github.com/Ashirvad945/create_reactnative-task-loginpage.git
cd PropertyApp

Install Dependencies     ---- >Since node_modules is not included, you must install them manually:

`npm install`

 Start the App
 `npm start`




🖼️ Screens Flow
Login Screen → Enter credentials → Press Login.
Dashboard Screen → Greeting + Feature Cards + Sign Out button.
Sign Out → Redirects back to Login screen.
