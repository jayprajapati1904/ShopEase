import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { loadRazorpayScript } from "../utils/loadRazorpay";
import useAuthStore from "../context/authStore.js";

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { user } = useAuthStore();
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // Redirect if no cart items or not authenticated
  useEffect(() => {
    if (cartItems.length === 0) navigate("/cart");
    if (!user) navigate("/signin");
  }, [cartItems, user, navigate]);

  const handlePayment = async () => {
    if (!user) {
      alert("Please sign in to continue to payment.");
      return navigate("/signin");
    }

    if (!address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Failed to load Razorpay SDK.");
      return;
    }

    try {
      // Send data to backend
      const { data } = await api.post("/payment/orders", {
        userId: user.id,
        amount: getTotalPrice() * 100, // in paise
        currency: "INR",
        address,
      });

      const { orderId, amount, currency, key } = data;

      const options = {
        key,
        amount: amount.toString(),
        currency,
        name: "ShopEase",
        description: "Order Payment",
        order_id: orderId,
        handler: function (response) {
          alert("Payment successful!");
          console.log("Payment success response:", response);
          clearCart();
          navigate("/products");
        },
        prefill: {
          name: user.username || "Customer",
          email: user.email || "customer@example.com",
        },
        notes: {
          address: address,
        },
        theme: {
          color: "#8b5cf6",
        },
        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: true,
          paylater: true,
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-purple-600">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto space-y-8">
        {/* 👤 Customer Details */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Name:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        </div>

        {/* 📦 Address Input */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
          <textarea
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
            rows="3"
            placeholder="Enter your complete delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* 🛒 Order Summary */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>₹{getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* 💳 Pay Now Button */}
        <button
          onClick={handlePayment}
          className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
