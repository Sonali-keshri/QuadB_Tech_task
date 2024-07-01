# React + Vite

# React To-Do Application

This is a simple To-Do application built using ReactJS and Redux. The application allows users to add, view, edit, delete, and mark tasks as complete. Tasks are persisted in local storage.

## Features

- Add new tasks
- View a list of tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as complete/incomplete
- Persistent storage using local storage

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Getting Started

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Sonali-keshri/QuadB_Tech_task.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd react-todo-app
    ```

3. **Install dependencies:**

    Using npm:
    ```sh
    npm install
    ```

    Using yarn:
    ```sh
    yarn install
    ```

4. **Start the development server:**

    Using npm:
    ```sh
    npm run dev
    ```

    Using yarn:
    ```sh
    yarn start
    ```

    This will start the development server and open the application in your default web browser. If it doesn't, you can manually open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

Here's a brief overview of the project structure:

react-todo-app/
│
├── public/
│ ├── index.html
│ └── ...
│
├── src/
│ ├── components/
│ │ ├── TaskInput.jsx
│ │ ├── TaskItem.jsx
│ │ └── TaskList.jsx
│ │
│ ├── store/
│ │ ├── features/
│ │ │ └── todoSlice.js
│ │ └── index.js
│ │
│ ├── App.jsx
│ ├── index.js
│ └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...



## Usage

- **Add Task:** Type a task into the input field and press the "Add" button.
- **Edit Task:** Click the "📝" button next to a task, modify the task, and press "📄" to save the modified task.
- **Delete Task:** Click the "❌" button next to a task to remove it.
- **Complete Task:** Click the "○" button before to a task to mark it as complete/incomplete.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## Project

Live Link - https://quadb-tech-sonali-assignment.netlify.app/
GitHub Link - https://github.com/Sonali-keshri/QuadB_Tech_task

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

Feel free to open an issue if you have any questions or need further assistance.

