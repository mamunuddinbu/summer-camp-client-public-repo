import React, { useState } from "react";

const AddClassForm = () => {
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform class creation logic and database submission here
    // using the form input values

    // Clear the form fields after submission
    setClassName("");
    setClassImage("");
    setAvailableSeats(0);
    setPrice(0);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add a Class</h2>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <div className="mb-4">
          <label className="block mb-2">
            Class Name:
            <input
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Class Image:
            <input
              type="text"
              value={classImage}
              onChange={(e) => setClassImage(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Instructor Name:
            <input
              type="text"
              value="John Doe"
              readOnly
              className="border border-gray-300 rounded-md px-2 py-1 w-full bg-gray-100"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Instructor Email:
            <input
              type="email"
              value="john@example.com"
              readOnly
              className="border border-gray-300 rounded-md px-2 py-1 w-full bg-gray-100"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Available Seats:
            <input
              type="number"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(parseInt(e.target.value))}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClassForm;
