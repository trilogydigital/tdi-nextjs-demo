import ShelfForHome from '@/components/SelfForHome/SelfForHome';
import { fetchLiveChannelsPlaylist } from '@/lib/services/api.service';

export default async function HomeContent() {
  const data = await fetchLiveChannelsPlaylist();
  return <ShelfForHome items={data.playlist} />;
}
