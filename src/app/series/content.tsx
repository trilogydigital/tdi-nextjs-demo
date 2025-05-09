import ShelfForHome from '@/components/SelfForHome/SelfForHome';
import { fetchSeriesPlaylist } from '@/lib/services/api.service';

export default async function SeriesContent() {
  const data = await fetchSeriesPlaylist();
  return <ShelfForHome items={data.playlist} />;
}
