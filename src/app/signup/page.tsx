'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../lib/firebaseConfig';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem('user', email);
      router.push('/');
    } catch (error) {
      alert('Signup failed: ' + (error as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h2 className="text-2xl font-bold">Sign Up</h2>
      <input className="mt-4 p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="mt-2 p-2 border" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup} className="mt-4 px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
        Sign Up
      </button>
    </div>
  );
}
