import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-bold mb-2">About Us</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies diam vitae eleifend tempus.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-600">123 Street, City</p>
            <p className="text-gray-600">info@example.com</p>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-bold mb-2">Useful Links</h2>
            <ul className="text-gray-600">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-center text-gray-600">
          <p className="mb-2">&copy; 2023 Your Website. All rights reserved.</p>
          <p><a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a> | <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
