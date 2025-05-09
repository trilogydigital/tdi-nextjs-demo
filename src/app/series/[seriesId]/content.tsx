import ShelfForCuratedList from '@/components/ShelfForCuratedList/ShelfForCuratedList';
import { fetchShowMedia, fetchShowPlaylist } from '@/lib/services/api.service';

export default async function ShowContent({ params, searchParams }: { params: { seriesId: string }; searchParams: { mediaId?: string } }) {
  const { seriesId } = params;
  const mediaId = searchParams?.mediaId;

  const playlist = await fetchShowPlaylist(seriesId);
  const media = await fetchShowMedia(mediaId);

  return <ShelfForCuratedList playlist={playlist.playlist} media={media.playlist} />;
}
