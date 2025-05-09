import Loader from '@/components/Loader/Loader';
import { Suspense } from 'react';
import ShowContent from './content';

export default function ShowPage({ params, searchParams }: { params: { seriesId: string }; searchParams: { mediaId?: string } }) {
  return (
    <Suspense fallback={<Loader />}>
      <ShowContent params={params} searchParams={searchParams} />
    </Suspense>
  );
}
