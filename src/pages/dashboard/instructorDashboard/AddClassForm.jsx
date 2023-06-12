import React, { useState, useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddClassForm = () => {
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState(null);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);
  const { user } = useContext(AuthContext);

  const imgUpload = import.meta.env.VITE_Image_Upload_token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imgUpload}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", classImage);

    
      const response = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();

        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;

          // Create a new class object using the form input values
          const newClass = {
            className,
            classImage: imgURL,
            availableSeats,
            price,
            instructorName: user.displayName,
            instructorEmail: user.email,
            enrolledStudent:0,
          };

          // Make an HTTP POST request to your backend server
          await axios.post("http://localhost:5000/classes", newClass);

          // Clear the form fields after successful submission
          setClassName("");
          setClassImage(null);
          setAvailableSeats(0);
          setPrice(0);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Class added successfully',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          console.error("Image upload failed:", imgResponse.error);
        }
      } else {
        console.error("Image upload failed. Response:", response);
      }
    
  };

  return (
    <div className="container mx-auto p-4 bg-green-200 flex justify-center">
      <form onSubmit={handleSubmit} className="max-w-sm">
        <h2 className="text-xl font-bold mb-4">Add a Class</h2>
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
              type="file"
              onChange={(e) => setClassImage(e.target.files[0])}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Instructor Name:
            <input
              type="text"
              value={user.displayName}
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
              value={user.email}
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
