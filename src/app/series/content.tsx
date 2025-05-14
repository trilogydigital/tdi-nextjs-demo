import ShelfForSeries from '@/components/ShelfForSeries/ShelfForSeries';
import { fetchSeriesPlaylist } from '@/lib/services/api.service';

export default async function SeriesContent() {
  const data = await fetchSeriesPlaylist();
  return <ShelfForSeries items={data.playlist} />;
}
