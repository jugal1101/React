📦 Orders Dashboard

A simple and interactive React dashboard for managing and displaying a list of customer orders. This project includes sorting, filtering, and search functionality with a clean UI layout.

🚀 Features

🔍 Search by customer name or order ID

🎯 Filter by:

Payment status (Paid, Pending, Not paid)

Order status (New, Completed, Canceled)

Price range

Date range

↕️ Sort by:

Order ID

Date

Customer name

Price

📅 Displays orders in a clean, responsive table format

🖥 Built with React and customizable via props or future backend integration

🧱 Tech Stack

React (useState)

CSS for styling (Dashboard.css)

No external dependencies required

📂 Project Structure
src/
├── components/
│   └── OrdersDashboard.jsx
├── styles/
│   └── Dashboard.css
└── App.js

📦 Getting Started
1. Clone the Repository
git clone https://github.com/your-username/orders-dashboard.git
cd orders-dashboard

2. Install Dependencies
npm install

3. Run the App
npm start


This will run the app in development mode. Open http://localhost:3000
 to view it in the browser.

🛠 How to Use
🔍 Filtering

Search by Name: Type a customer name in the input box.

Order ID: Type a partial or full ID (e.g., #5132) to filter.

Payment Filter: Choose between All, Paid, Pending, or Not paid.

Price: Set min/max price to filter orders in a price range.

Date Range: Pick a "from" and "to" date to view orders within that timeframe.

↕️ Sorting

Click on any of the sortable column headers:

Order ID

Date

Customer

Price

Clicking again toggles the order between ascending (asc) and descending (desc).

🎨 Styling

The component uses Dashboard.css for layout and styling.

CSS classes like .payment and .status are used for conditional formatting.

Extend the styles for dark mode, animations, etc.


## Demo 


https://github.com/user-attachments/assets/2f3d88ba-582e-46a8-b565-2e4f2c30dc9f


📌 Notes

All order data is stored in-memory. You can connect to a backend or API as needed.

Date sorting uses the Date object for accurate comparison.

Filtering is applied before sorting.

✅ Example Order Object
{
  id: "#513279",
  date: "2025-02-18",
  customer: "Arseniy Levchenko",
  product: "1 x Ollivander Wand",
  price: 78.0,
  payment: "Paid",
  status: "New"
}

🧪 To Do / Ideas for Improvement

Add pagination

Add order details modal

Allow editing or deleting orders

Fetch data from an API

Export table to CSV or PDF

📄 License

This project is open-source and available under the MIT License
. 
