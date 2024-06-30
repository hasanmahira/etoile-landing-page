// src/components/ContactForm.js
import React from "react"

const ContactForm = () => {
  return (
    <div className="max-w-md mx-auto p-8">
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
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
  )
}

export default ContactForm
