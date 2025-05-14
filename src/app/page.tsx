import HomeContent from './content';
import Loader from '@/components/Loader/Loader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Suspense fallback={<Loader />}>
      <HomeContent />
    </Suspense>
  );
}
