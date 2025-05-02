'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Level1() {
  const [answer, setAnswer] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === 'shadow') {
      sessionStorage.setItem('level1-complete', 'true');
      router.push('/level2');
    } else {
      alert('Wrong answer! Try again.');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 gap-4">
      <h2 className="text-2xl font-bold">Level 1</h2>
      <p>I follow you everywhere but never make a sound. What am I?</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Your answer"
        className="border px-4 py-2 rounded"
      />
      <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </main>
  );
}
