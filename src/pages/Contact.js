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
    e.preventDefault()
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formData);
    console.log(raw)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://wordle-latest.onrender.com/personalWebsite/sendAMessage", requestOptions)
      .then((response) => response.text())
      .then((result) => alert("message sent"))
      .catch((error) => alert("something went wrong", error));
  };



  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Me</h2>
      <p className="text-2xl  text-center mb-8 text-gray-800">Have a suggestion, project idea, questions or anything else..</p>
      <form
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
        onSubmit={handleSubmit}
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
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
