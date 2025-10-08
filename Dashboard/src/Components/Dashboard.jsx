import React, { useState } from "react";
import "./Dashboard.css";

const initialOrders = [
  { id: "#513279", date: "2025-02-18", customer: "Arseniy Levchenko", product: "1 x Ollivander Wand", price: 78.0, payment: "Paid", status: "New" },
  { id: "#513278", date: "2025-02-17", customer: "Stanislav Ostrynskyi", product: "1 x Hogwarts Gift Trunk", price: 149.9, payment: "Pending", status: "New" },
  { id: "#513280", date: "2025-02-17", customer: "Alina Miroshnychenko", product: "1 x Ollivander Wand", price: 189.9, payment: "Paid", status: "Completed" },
  { id: "#513277", date: "2025-02-16", customer: "Alyona Kulish", product: "1 x Ollivander Wand", price: 39.0, payment: "Not paid", status: "Canceled" },
  { id: "#513281", date: "2025-02-19", customer: "Dmytro Ivanov", product: "2 x Hogwarts Gift Trunk", price: 299.8, payment: "Paid", status: "Completed" },
];

export default function OrdersDashboard() {
  const [orders, setOrders] = useState(initialOrders);
  const [filters, setFilters] = useState({
    search: "",
    id: "",
    payment: "All",
    status: "All",
    minPrice: "",
    maxPrice: "",
    fromDate: "",
    toDate: "",
  });
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    const sorted = [...orders].sort((a, b) => {
      if (field === "price") return order === "asc" ? a.price - b.price : b.price - a.price;
      if (field === "date") return order === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
      return order === "asc"
        ? a[field].toString().localeCompare(b[field].toString())
        : b[field].toString().localeCompare(a[field].toString());
    });
    setOrders(sorted);
  };

  const filteredOrders = orders.filter((order) => {
    const matchSearch = order.customer.toLowerCase().includes(filters.search.toLowerCase());
    const matchId = order.id.toLowerCase().includes(filters.id.toLowerCase());
    const matchPayment = filters.payment === "All" || order.payment === filters.payment;
    const matchStatus = filters.status === "All" || order.status === filters.status;
    const matchPrice =
      (!filters.minPrice || order.price >= parseFloat(filters.minPrice)) &&
      (!filters.maxPrice || order.price <= parseFloat(filters.maxPrice));
    const matchDate =
      (!filters.fromDate || new Date(order.date) >= new Date(filters.fromDate)) &&
      (!filters.toDate || new Date(order.date) <= new Date(filters.toDate));

    return matchSearch && matchId && matchPayment && matchStatus && matchPrice && matchDate;
  });

  return (
    <div className="orders-container">
      <header className="orders-header">
        <h1>Orders</h1>
      </header>
      <div className="filters-box">
        <div className="filter-row">
          <input
            type="text"
            placeholder="Search by Customer Name"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
          <input
            type="text"
            placeholder="Order ID"
            value={filters.id}
            onChange={(e) => setFilters({ ...filters, id: e.target.value })}
          />
          <select value={filters.payment} onChange={(e) => setFilters({ ...filters, payment: e.target.value })}>
            <option value="All">All Payments</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Not paid">Not paid</option>
          </select>
        </div>

        <div className="filter-row">
          <input
            type="number"
            placeholder="Price"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPricePrice: e.target.value })}
          />
          <input
            type="date"
            value={filters.fromDate}
            onChange={(e) => setFilters({ ...filters, fromDate: e.target.value })}
          />
        </div>
      </div>
      <table className="orders-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>Order ID</th>
            <th onClick={() => handleSort("date")}>Date</th>
            <th onClick={() => handleSort("customer")}>Customer</th>
            <th>Product</th>
            <th onClick={() => handleSort("price")}>Price</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>£{order.price.toFixed(2)}</td>
                <td>
                  <span className={`payment ${order.payment.toLowerCase().replace(" ", "-")}`}>{order.payment}</span>
                </td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


