import ShelfForHome from '@/components/SelfForHome/SelfForHome';
import { fetchShowsData } from '@/lib/api/api.service';

export default async function ShowsContent() {
  const data = await fetchShowsData();
  return <ShelfForHome items={data.playlist} />;
}
