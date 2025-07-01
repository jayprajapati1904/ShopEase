import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Heart,
  Star,
  ArrowRight,
  Search,
  User,
  Truck,
  Shield,
  RefreshCw,
  Headphones,
  X,
  Plus,
  Minus,
  Zap,
  Clock,
} from "lucide-react";
import Navbar from "./navbar";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [currentDealIndex, setCurrentDealIndex] = useState(0);

  const heroSlides = [
    {
      title: "Summer Collection 2025",
      subtitle: "Discover the latest trends",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
      cta: "Shop Now",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Tech Essentials",
      subtitle: "Upgrade your digital life",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop",
      cta: "Explore",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Home & Living",
      subtitle: "Transform your space",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop",
      cta: "Browse",
      gradient: "from-green-600 to-teal-600",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Earbuds Pro",
      price: 199,
      originalPrice: 249,
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 1240,
      badge: "Best Seller",
      description: "Premium sound quality with noise cancellation",
    },
    {
      id: 2,
      name: "Smart Watch Series X",
      price: 299,
      originalPrice: 399,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 856,
      badge: "New",
      description: "Advanced fitness tracking and health monitoring",
    },
    {
      id: 3,
      name: "Designer Backpack",
      price: 89,
      originalPrice: 120,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 432,
      badge: "Sale",
      description: "Stylish and functional for everyday use",
    },
    {
      id: 4,
      name: "Gaming Keyboard",
      price: 159,
      originalPrice: 199,
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 324,
      badge: "Hot",
      description: "Mechanical keys with RGB backlighting",
    },
    {
      id: 5,
      name: "Smartphone Camera Lens",
      price: 79,
      originalPrice: 99,
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 278,
      badge: "Popular",
      description: "Professional photography on your phone",
    },
    {
      id: 6,
      name: "Wireless Charger Pad",
      price: 45,
      originalPrice: 65,
      image:
        "https://images.unsplash.com/photo-1609592806374-b3eefb1b6b5b?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 567,
      badge: "Eco-Friendly",
      description: "Fast charging with sleek design",
    },
  ];

  const flashDeals = [
    {
      id: 101,
      name: "Bluetooth Speaker",
      price: 29,
      originalPrice: 59,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      timeLeft: "2h 15m",
      discount: "50%",
    },
    {
      id: 102,
      name: "Fitness Tracker",
      price: 49,
      originalPrice: 89,
      image:
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=300&fit=crop",
      timeLeft: "4h 32m",
      discount: "45%",
    },
    {
      id: 103,
      name: "USB-C Hub",
      price: 35,
      originalPrice: 55,
      image:
        "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300&h=300&fit=crop",
      timeLeft: "1h 45m",
      discount: "36%",
    },
  ];

  const categories = [
    { name: "Electronics", icon: "📱", color: "bg-blue-500", count: "2.5k+" },
    { name: "Fashion", icon: "👗", color: "bg-pink-500", count: "1.8k+" },
    { name: "Home", icon: "🏠", color: "bg-green-500", count: "950+" },
    { name: "Sports", icon: "⚽", color: "bg-orange-500", count: "670+" },
    { name: "Books", icon: "📚", color: "bg-purple-500", count: "1.2k+" },
    { name: "Beauty", icon: "💄", color: "bg-red-500", count: "580+" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing quality and fast shipping! Love shopping here.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612cf0e?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Great customer service and excellent product selection.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Emily Davis",
      rating: 4,
      comment: "The website is so easy to use and products are top-notch!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dealTimer = setInterval(() => {
      setCurrentDealIndex((prev) => (prev + 1) % flashDeals.length);
    }, 3000);
    return () => clearInterval(dealTimer);
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    const button = document.getElementById(`cart-btn-${product.id}`);
    if (button) {
      button.classList.add("animate-pulse");
      setTimeout(() => button.classList.remove("animate-pulse"), 600);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar setIsCartOpen={setIsCartOpen} getTotalItems={getTotalItems} />

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-50"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold">
                Shopping Cart ({getTotalItems()})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{item.name}</h3>
                        <p className="text-purple-600 font-bold">
                          ${item.price}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 bg-white rounded border">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 hover:bg-red-100 rounded-full text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-purple-600">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-opacity-40 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center max-w-lg max-h-screen px-6 py-8 border-2 border-purple-800 rounded-xl backdrop-blur-sm shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 text-white">
                  {slide.subtitle}
                </p>
                <button
                  className={`bg-gradient-to-r ${slide.gradient} text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2`}
                >
                  <span>{slide.cta}</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Flash Deals */}
      <section className="py-8 bg-gradient-to-r from-red-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Zap className="h-8 w-8 text-yellow-300" />
              <h2 className="text-2xl font-bold text-white">Flash Deals</h2>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Clock className="h-5 w-5" />
              <span>Ends Soon!</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flashDeals.map((deal, index) => (
              <div
                key={deal.id}
                className={`bg-white rounded-xl p-6 transform transition-all duration-500 ${
                  index === currentDealIndex
                    ? "scale-105 ring-4 ring-yellow-300"
                    : "hover:scale-102"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{deal.discount} OFF
                  </span>
                  <span className="text-red-500 font-semibold">
                    {deal.timeLeft}
                  </span>
                </div>
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold mb-2">{deal.name}</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-red-500">
                    ${deal.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    ${deal.originalPrice}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(deal)}
                  className="w-full bg-red-500 text-white py-2 rounded-full font-semibold hover:bg-red-600 transition-colors"
                >
                  Grab Deal
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className={`${category.color} rounded-2xl p-8 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300`}
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-white font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {category.count} items
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">
              Discover our handpicked selection of amazing products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        product.badge === "Best Seller"
                          ? "bg-yellow-400 text-yellow-900"
                          : product.badge === "New"
                          ? "bg-green-400 text-green-900"
                          : product.badge === "Sale"
                          ? "bg-red-400 text-red-900"
                          : product.badge === "Popular"
                          ? "bg-blue-400 text-blue-900"
                          : product.badge === "Eco-Friendly"
                          ? "bg-green-500 text-white"
                          : "bg-orange-400 text-orange-900"
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(product.id)
                          ? "text-red-500 fill-current"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>

                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-current" : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-purple-600">
                        ${product.price}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                  </div>

                  <button
                    id={`cart-btn-${product.id}`}
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">
              Join thousands of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "fill-current" : ""
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose ShopEase?</h2>
            <p className="text-gray-600">
              Experience shopping like never before
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Truck className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $50</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Safe and encrypted transactions</p>
            </div>
            <div className="text-center p-6">
              <RefreshCw className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day hassle-free returns</p>
            </div>
            <div className="text-center p-6">
              <Headphones className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ShopEase</h3>
              <p className="text-gray-300">
                Your one-stop shop for everything you need. Quality products,
                great prices, and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-purple-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-purple-300">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-purple-300">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-purple-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-purple-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-purple-300">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-purple-300">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-purple-300">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Subscribe to get special offers and updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 text-white placeholder-gray-300 rounded-l-full px-4 py-2 w-full focus:outline-none"
                />
                <button className="bg-purple-600 text-white px-4 rounded-r-full hover:bg-purple-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>© 2025 ShopEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
