import React from 'react';

const Payment = () => {
  return (
    <div className="bg-yellow-50 m-3 p-4">
      <h2 className="bg-green-300 text-3xl p-3">Payment</h2>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="cardNumber" className="text-lg font-semibold mb-1">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="expiration" className="text-lg font-semibold mb-1">
            Expiration Date
          </label>
          <input
            type="text"
            id="expiration"
            className="px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cvv" className="text-lg font-semibold mb-1">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
