import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    let formErrors = {}; 
    
    // Validate all fields 
    Object.keys(formData).forEach((key) => validateField(key, formData[key])); 
    
    if (Object.keys(formErrors).length === 0) { 
      // Submit the form 
      console.log('Form submitted:', formData); 
    }
  };

  const validateField = (name, value) => {
    let error = '';
    if (!value) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} field is required.`;
    }
    else if (name === 'email' && !validateEmail(value)) {
      error = 'Please enter a valid email address.';
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));

  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };


  return (
    <section className="bg-[linear-gradient(to_bottom_right,_bisque,_beige)] pl-[10px]">
      <h1 className="font-bold xs:text-[8vw] xs:mt-[0.75em] ">Contact</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input type="text" id="name" name="name" className="xs:w-80 sm:w-[60] sm: mb-4"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <div className="bg-red-300">{errors.name}</div>}

        <label htmlFor="email" className="block mb-2">Email address:</label>
        <input type="email" id="email" name="email" className="xs:w-80 mb-4" 
        value={formData.email}
        onChange={handleChange} 
        onBlur={handleBlur}
        />
        {errors.email && <div className="bg-red-300">{errors.email}</div>}

        <label htmlFor="message" className="block mb-2">Message:</label>
        <textarea className="xs:w-80 mb-4" id="message" name="message" rows={6} 
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        >
        </textarea>
        {errors.message && <div className="bg-red-300">{errors.message}</div>}
        <button className="block bg-blue-600 text-white font-bold p-[2px]">Submit</button>
      </form>
    </section>
  )
}
