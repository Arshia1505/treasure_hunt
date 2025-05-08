// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function SignUpPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     if (email && password) {
//       sessionStorage.setItem('user', email);
//       router.push('/dashboard');
//     } else {
//       alert('Please fill in all fields');
//     }
//   };

//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen p-10 gap-4">
//       <h1 className="text-3xl font-bold">Sign Up</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         className="border px-4 py-2 rounded w-64"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="border px-4 py-2 rounded w-64"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignUp} className="bg-green-600 text-white px-4 py-2 rounded">
//         Sign Up
//       </button>
//       <p>
//         Already have an account?{' '}
//         <a href="/login" className="text-blue-600 underline">
//           Log In
//         </a>
//       </p>
//     </main>
//   );
// }

'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig';
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
      alert('Signup failed: ' + error.message);
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
