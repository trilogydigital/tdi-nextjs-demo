import { Suspense } from 'react';
import ShowsContent from './content';
import Loader from '@/components/Loader/Loader';

export default function SeriesPage() {
  return (
    <Suspense fallback={<Loader />}>
      <ShowsContent />
    </Suspense>
  );
}
