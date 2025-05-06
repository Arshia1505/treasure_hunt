// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Dashboard() {
//   const router = useRouter();

//   useEffect(() => {
//     const user = sessionStorage.getItem('user');
//     if (!user) {
//       router.push('/login');
//     }
//   }, [router]);

//   const handleLogout = () => {
//     sessionStorage.removeItem('user');
//     router.push('/');
//   };

//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen p-10 gap-4">
//       <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
//       <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
//         Logout
//       </button>
//     </main>
//   );
// }


'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    router.push('/');
  };

  const goToHome = () => {
    router.push('/');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 gap-4">
      <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
      
      {/* Logout Button */}
      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded mb-4">
        Logout
      </button>

      {/* Link to Home Button */}
      <button onClick={goToHome} className="bg-blue-600 text-white px-4 py-2 rounded">
        Go to Home Page
      </button>
    </main>
  );
}
