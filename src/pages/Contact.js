import React, { useState } from "react";

const Contact = () => {
  const [anonymous, setAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", anonymous ? { message: formData.message } : formData);
    alert("Message submitted!");
  };

  const sumbitMessage = (e) => {
    console.log(e)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Me</h2>
      <p className="text-2xl  text-center mb-8 text-gray-800">Have a suggestion, project idea, questions or anything else..</p>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
      >
        {/* Anonymous Toggle */}
        <div className="flex items-center justify-between">
          <label htmlFor="anonymous" className="text-gray-700 font-medium">
            Stay Anonymous
          </label>
          <input
            id="anonymous"
            type="checkbox"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
            className="w-5 h-5"
          />
        </div>

        {/* Conditional Fields */}
        {!anonymous && (
          <>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded mt-1"
                required
              />
            </div>
          </>
        )}

        {/* Always Visible Message Field */}
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border p-2 rounded mt-1"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={sumbitMessage}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
