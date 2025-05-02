'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Level3() {
  const [answer, setAnswer] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem('level2-complete')) {
      router.push('/');
    }
  }, [router]);

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === 'map') {
      sessionStorage.setItem('level3-complete', 'true');
      router.push('/success');
    } else {
      alert('Keep thinking...');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 gap-4">
      <h2 className="text-2xl font-bold">Final Level</h2>
      <p>I show you the way but I’m not alive. What am I?</p>
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
