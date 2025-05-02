'use client';

import { useRouter } from 'next/navigation';

export default function Landing() {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center p-50'>
      <h1 className='text-3xl font-bold mb-4'>This is Landing Page</h1>
      <button onClick={() => router.push('/dashboard')} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer'>
        Go to Dashboard
      </button>
    </div>
  );
}
