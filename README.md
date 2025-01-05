
# To-Do App

A simple and intuitive To-Do app that helps users manage their daily tasks efficiently. This project is built using React, Node.js, and MongoDB.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Persistent data storage with MongoDB

## Technologies Used

- **Frontend**: React, JSX, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: (Add your deployment platform here, e.g., Firebase, Heroku, etc.)
- **Testing**: Jest, React Testing Library

## Installation

### Clone the repository:

```bash
git clone https://github.com/Striver-3110/TODO.git
cd TODO
```

### Install dependencies:

For the **frontend**:
```bash
cd frontend
npm install
```

For the **backend**:
```bash
cd backend
npm install
```

### Environment Variables

You may need to set the following environment variables for the backend (create a `.env` file in the root of your backend directory):

- `DB_URI` = Your MongoDB connection string
- `PORT` = Port number (default is `5000`)

### Running the App

To run the **frontend**:
```bash
cd frontend
npm start
```

To run the **backend**:
```bash
cd backend
npm start
```

### Running Tests

To run the tests for the **frontend**:
```bash
cd frontend
npm test
```

For the **backend**:
```bash
cd backend
npm test
```

## CI/CD Pipeline

This project uses **GitHub Actions** for CI/CD, which will run tests and deploy the app to your chosen platform (e.g., Heroku, Firebase) on each push to the `main` branch.

## Contribution

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a new Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
