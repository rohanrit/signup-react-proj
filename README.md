# Registration Form

![Screenshot (101)](https://github.com/user-attachments/assets/27a4986c-bce3-4a6c-8050-0aa32ceac00e)

## Description

This project replicates the Sharecare registration page using React and Material-UI. The registration form includes fields for user input, form validation, and a responsive design that adapts to different screen sizes.

## Features

- **Responsive Layout:** Adjusts seamlessly between desktop, tablet, and mobile views.
- **Registration Form:** Includes fields for name, email, and other required inputs.
- **Form Validation:** Ensures data is entered correctly using Formik and Yup.
- **Styling:** Mimics the appearance of the Sharecare registration page using Material-UI.
- **Unit Tests:** Contains unit tests to verify the functionality of components.

## Tech Stack

- **React:** JavaScript library for building user interfaces.
- **Material-UI:** Component library for React with pre-designed components.
- **Formik:** Library for handling form state and validation.
- **Yup:** Validation library for Formik.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/signup-react-proj.git
   ```

2. Navigate to the project directory:

   ```bash
   cd signup-react-proj
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1.  Start the development client & json server: (Note: start both the client and json server on seperate terminals for the form to work)

```bash
npm start
```

```bash
npm run server
```

3.  Open your browser and go to http://localhost:3000 to view the registration form.

## Storage

You can view the data by opening http://localhost:5000/registrations to view data saved in db.json under root directory.

```bash
 http://localhost:5000/registrations
```

To fetch single user data go to url
sample user id = 97c7

```bash
http://localhost:5000/registrations/<user id>
```

## Running Tests

1. To run the unit tests:
   ```bash
   npm test
   ```

## For any inquiries, please reach out to rohanrit@gmail.com.
