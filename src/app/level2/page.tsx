'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import confetti from 'canvas-confetti'; // Import the confetti library

export default function Level2() {
  const [answer, setAnswer] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem('level1-complete')) {
      router.push('/');
    }
  }, [router]);

  // const handleSubmit = () => {
  //   if (answer.trim().toLowerCase() === 'echo') {
  //     sessionStorage.setItem('level2-complete', 'true');
  //     router.push('/level3');
  //   } else {
  //     alert('Nope! Try again.');
  //   }
  // };

    const handleSubmit = () => {
      if (answer.trim().toLowerCase() === 'echo') {
        sessionStorage.setItem('level2-complete', 'true');
        router.push('/level3');
        
        // Trigger confetti effect
        confetti({
          particleCount: 500,  // Increase particle count
          spread: 90,  // Widen the spread of the confetti
          origin: { x: 0.5, y: 0.5 },  // Start from the center
          colors: ['#ff0000', '#00ff00', '#0000ff', '#ffcc00'], // Custom colors (red, green, blue, yellow)
          shapes: ['circle', 'square'],  // Use circle and square shapes
          gravity: 0.6,  // Adjust gravity to make the confetti fall faster or slower
          ticks: 200,  // Number of ticks (how long the confetti stays on the screen)
          scalar: 1.5,  // Size scaling of confetti particles
          startVelocity: 30,  // Speed of confetti particles at the start
         
        });
      } else {
        alert('Wrong answer! Try again.');
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
