'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Level2() {
  const [answer, setAnswer] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem('level1-complete')) {
      router.push('/');
    }
  }, [router]);

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === 'echo') {
      sessionStorage.setItem('level2-complete', 'true');
      router.push('/level3');
    } else {
      alert('Nope! Try again.');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 gap-4">
      <h2 className="text-2xl font-bold">Level 2</h2>
      <p>I speak without a mouth and hear without ears. What am I?</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="border px-4 py-2 rounded"
        placeholder="Your answer"
      />
      <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </main>
  );
}
