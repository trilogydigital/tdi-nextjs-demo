'use client';

import { LoaderCircle } from 'lucide-react';

export default function Loader() {
  return (
    <div className='bg-black text-white min-h-screen flex items-center justify-center'>
      <LoaderCircle className='h-10 w-10 animate-spin text-white' />
    </div>
  );
}
