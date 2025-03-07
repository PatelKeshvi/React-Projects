import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}!`);
  };

  return (
    <form className="p-4 bg-white shadow rounded" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" name="email" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea name="message" className="form-control" rows="3" onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  );
}

export default ContactForm;
