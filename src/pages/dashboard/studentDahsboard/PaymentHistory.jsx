import React, { useState, useEffect } from "react";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    // Fetch payment history data from the server or any other data source
    // and update the paymentHistory state
    const fetchPaymentHistory = async () => {
      try {
        // Fetch payment history data
        const response = await fetch("api/payment/history");
        const data = await response.json();
        setPaymentHistory(data);
      } catch (error) {
        console.error("Error fetching payment history:", error);
      }
    };

    fetchPaymentHistory();
  }, []);

  return (
    <div className="bg-orange-200 m-3">
      <h2 className="bg-green-300 text-3xl p-3 ">Payment History</h2>
      {paymentHistory.length === 0 ? (
        <p className="p-3">No payment history available.</p>
      ) : (
        <ul className="p-3">
          {paymentHistory.map((payment) => (
            <li key={payment.id}>
              <p>Payment ID: {payment.id}</p>
              <p>Amount: {payment.amount}</p>
              <p>Date: {payment.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistory;
