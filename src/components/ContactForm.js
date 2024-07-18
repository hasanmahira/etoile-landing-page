import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "contacts"), formData);
      console.log("Document written with ID: ", docRef.id);
      alert('Information submitted successfully!');
      setFormData({
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Failed to submit information. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-3xl text-center text-white mb-4">JOIN THE STARS</h2>
      <p className="text-lg text-center text-white mb-6">
        Etoile Design ile Yıldızların Arasında Yerinizi Alın!
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="Surname"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;