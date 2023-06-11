import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes.jsx";
import AuthProvider from "./pages/auth/AuthProvider";
// import { QueryClient, QueryClientProvider } from "react-query";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-5xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        
{/* 
        <QueryClientProvider client={QueryClient}> */}
        <RouterProvider router={router} />

    {/* </QueryClientProvider> */}
      </AuthProvider>
    </React.StrictMode>
  </div>
);
