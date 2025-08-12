import React, { useState } from 'react';
import './bookingApp.css';

export default function AppointmentBooking() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', time: '', service: '', doctor: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...appointments];
      updated[editIndex] = formData;
      setAppointments(updated);
      setEditIndex(null);
    } else {
      setAppointments([...appointments, formData]);
    }
    setFormData({ name: '', email: '', phone: '', date: '', time: '', service: '', doctor: '' });
  };

  const handleEdit = (index) => {
    setFormData(appointments[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  return (
    <div className="booking-container">
      <h1>Book an Appointment</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Appointment Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label>Appointment Time</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />

        <label>Select Service</label>
        <select name="service" value={formData.service} onChange={handleChange} required>
          <option value="">--Select Service--</option>
          <option value="consultation">Consultation</option>
          <option value="therapy">Therapy</option>
          <option value="checkup">Check-up</option>
        </select>

        <label>Select Doctor</label>
        <select name="doctor" value={formData.doctor} onChange={handleChange} required>
          <option value="">--Select Doctor--</option>
          <option value="Dr. Smith">Dr. Akhil Sarkar</option>
          <option value="Dr. Johnson">Dr. Alkesh Dudhat</option>
          <option value="Dr. Brown">Dr. Hiren Pipaliya</option>
        </select>

        <button type="submit">{editIndex !== null ? 'Update' : 'Book Now'}</button>
      </form>

      <h2>Appointments Booked ✅</h2>
      <ul>
        {appointments.map((appt, index) => (
          <li key={index}>
            {appt.name} - {appt.service} with {appt.doctor} on {appt.date} at {appt.time}
            <span>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}