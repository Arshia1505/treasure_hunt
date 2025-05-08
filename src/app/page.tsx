

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  const router = useRouter();
  
  // Manage the authentication state (use sessionStorage or any persistent storage in a real app)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate checking authentication from session storage (or any other state management method)
    const user = sessionStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const startGame = () => {
    if (!isAuthenticated) {
      alert('Login/Sign In First');
      router.push('/'); // Redirect to the homepage
    } else {
      router.push('/level1');
    }
  };

  const goToLogin = () => {
    router.push('/login');
  };

  const goToSignup = () => {
    router.push('/signup');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-50 to-blue-100">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-grow text-center p-10 gap-6">
        <h1 className="text-4xl font-bold text-blue-900 text-shadow-md">🗺️ Welcome to the Treasure Hunt</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Solve the riddles one by one to find the hidden treasure. Are you ready for the challenge?
        </p>

        {/* Start Game Button */}
        <button
          onClick={startGame}
          className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition transform hover:scale-105"
        >
          Start the Hunt
        </button>

        {/* Login and Sign Up Links */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={goToLogin}
            className="px-6 py-3 text-white bg-green-600 rounded-md hover:bg-green-700 transition transform hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={goToSignup}
            className="px-6 py-3 text-white bg-orange-600 rounded-md hover:bg-orange-700 transition transform hover:scale-105"
          >
            Sign Up
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

