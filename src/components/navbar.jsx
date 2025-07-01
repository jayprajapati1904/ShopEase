import React, { useState } from "react";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ setIsCartOpen, getTotalItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white sticky top-0 z-50 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 lg:h-18">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl lg:text-3xl font-black tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                ShopEase
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="relative font-medium hover:text-purple-300 transition-all duration-300 group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/products"
                className="relative font-medium hover:text-purple-300 transition-all duration-300 group"
              >
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 rounded-full pl-12 pr-6 py-3 w-72 xl:w-80 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 group-focus-within:text-purple-400 transition-colors duration-300" />
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 hover:text-purple-300 transition-all duration-300 transform hover:scale-110 group"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                      {getTotalItems()}
                    </span>
                  )}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <Link
                  to="/profile"
                  className="relative p-2 hover:text-purple-300 transition-all duration-300 transform hover:scale-110 group"
                >
                  <User className="h-6 w-6" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-900 to-purple-900 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-purple-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block text-white hover:text-purple-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="block text-white hover:text-purple-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
              </Link>
              <Link
                to="/profile"
                className="block text-white hover:text-purple-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
