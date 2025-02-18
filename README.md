# Password Reset Application

This project is a simple React application that allows users to reset their passwords. It consists of two main components: a form to request a password reset and a form to set a new password.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/NickshanJ/Password-reset.git
   ```

2. Navigate to the project directory:
   ```
   cd Password-reset
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the application, run:
```
npm start
```

The application will be available at `https://password-reset-0.netlify.app/`.


## Project Structure

```
Password-reset
├── src
│   ├── components
│   │   ├── ForgetPasswordForm.jsx
│   │   └── ResetPassword.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
├── README.md
└── .gitignore
```

## Components

### ForgetPasswordForm.jsx:

- This component renders a form for users to input their email address to request a password reset.

- It handles form submission and sends a POST request to the server to initiate the password reset process.

### ResetPassword.jsx:

- This component renders a form for users to reset their password.

- It takes a token from the URL parameters, handles form submission, and sends a POST request to update the password on the server.

## App.jsx:

- This component sets up the routing for the application using React Router.

- It defines routes for the forget password form and the reset password form.

## index.js:

- This is the entry point of the application.

- It renders the `App` component into the root DOM element.

##Usage:

##Forget Password:

Navigate to the home page or /forget-password.

Enter your email address in the form and submit it.

If the email is registered, you will receive a password reset link in your email.

##Reset Password:

Click on the password reset link sent to your email.

You will be redirected to the /reset-password/:token page.

Enter your email address and new password in the form and submit it.

If the token is valid, your password will be updated successfully.
