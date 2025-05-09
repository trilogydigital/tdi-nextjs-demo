const formatDspPlaylistItems = (entry: any[]) => {
  return entry.map((item: any) => {
    const { title, id, media_group, summary, extensions, content } = item;
    const { src = '', type } = content;
    const { free, tags, ...rest } = extensions || {};

    // Images array transformation could be separate function
    const images = media_group[0].media_item.map((imageItem: any) => {
      const { key, src } = imageItem;
      return {
        src,
        width: Number(key),
        type: media_group[0].type,
      };
    });
    //TODO tracks and sources keys are missing
    return {
      title,
      mediaid: id,
      images,
      description: summary,
      ...rest,
      tags: (tags || []).join(','),
      sources: [{ type, file: src }],
    };
  });
};

export const transformPipes2ResponseToJwPlayer = (playlist: any) => {
  const { id, entry = [], extensions, ...rest } = playlist;
  const { rating, networks, programName } = entry[0]?.extensions || {};

  const transformedPlaylist = formatDspPlaylistItems(entry);

  return {
    feedid: id,
    playlist: transformedPlaylist,
    rating,
    networks,
    programName,
    ...extensions,
    ...rest,
  };
};

export async function fetchSeriesPlaylist() {
  const res = await fetch(
    'https://tbn-dsp-curation-api-prod.tbncloud.com/web/virtual_feed?page_limit=100&page_offset=1&virtualfeed=true&playlistid=b2c2050e&okta_id=00upfqp1oz8uwnrqx697&network=TBN&app_name=TBN',
  );

  if (!res.ok) throw new Error('Failed to fetch shows data');
  const rawData = await res.json();
  const data = transformPipes2ResponseToJwPlayer(rawData);
  return data;
}
export async function fetchShowPlaylist(id: string) {
  const res = await fetch(`https://tbn-dsp-api-prod.tbncloud.com/v2/playlist?playlistid=${id}&page_limit=499&page_offset=1`);

  if (!res.ok) throw new Error('Failed to fetch shows data');
  const rawData = await res.json();
  const data = transformPipes2ResponseToJwPlayer(rawData);
  return data;
}
export async function fetchShowMedia(id: string) {
  const res = await fetch(`https://tbn-dsp-api-prod.tbncloud.com/v2/media?mediaid=${id}`);

  if (!res.ok) throw new Error('Failed to fetch shows data');
  const rawData = await res.json();
  const data = transformPipes2ResponseToJwPlayer(rawData);
  return data;
}


