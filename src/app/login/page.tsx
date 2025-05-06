'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simple login simulation
    if (email && password) {
      sessionStorage.setItem('user', email);
      router.push('/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 gap-4">
      <h1 className="text-3xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border px-4 py-2 rounded w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border px-4 py-2 rounded w-64"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
        Log In
      </button>
      <p>
        Don’t have an account?{' '}
        <a href="/signup" className="text-blue-600 underline">
          Sign Up
        </a>
      </p>
    </main>
  );
}
