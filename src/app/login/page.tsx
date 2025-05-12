'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../lib/firebaseConfig';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem('user', email);
      router.push('/');
    } catch (error) {
      alert('Login failed: ' + (error as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <input className="mt-4 p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="mt-2 p-2 border" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin} className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Login
      </button>
    </div>
  );
}
