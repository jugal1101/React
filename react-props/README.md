⚛️ React Project – useState & Props

This project demonstrates how to build a React.js application using functional components, useState for state management, and props for passing data between components.

🚀 Features

✅ State Management with useState

📤 Props for passing data to child components

🔄 Dynamic Rendering based on state

🖱️ Event handling with onClick, onChange

🛠️ Tech Stack

⚛️ React.js – Frontend framework

🎨 CSS – Styling

🔧 JavaScript (ES6+) – Logic and interactivity

📂 Project Structure
MyReactApp/
│── src/
│   ├── components/
│   │   ├── ParentComponent.jsx   # Holds state (useState)
│   │   └── ChildComponent.jsx    # Receives data via props
│   ├── App.jsx                   # Root component
│   ├── index.js                  # Entry point
│   └── styles.css                # Styling
│
└── README.md

⚙️ Installation & Setup

Clone the repo:

git clone https://github.com/your-username/my-react-props-usestate.git
cd my-react-props-usestate


Install dependencies:

npm install


Start the app:

npm start


Open in browser:

http://localhost:3000


ChildComponent.jsx
import React from "react";

export default function ChildComponent({ number }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Received Count via Props: {number}</p>
    </div>
  );
}

📸 Example Output

<img width="764" height="730" alt="Screenshot 2025-08-08 at 4 06 46 PM" src="https://github.com/user-attachments/assets/f357ef51-eeb8-429f-bea4-b5e44409a9a9" />


🌟 Future Improvements

🔍 Add more props (like strings, arrays, objects)

🔄 Pass callback functions as props

💾 Store state in LocalStorage
