const formatTopTenNumbers = (entry: any[]) => {
  return entry.map((item: any) => {
    const { title, id, media_group } = item;

    const images = media_group[0].media_item
      .filter((imageItem: any) => imageItem.key === 'imgTopTenNumber')
      .map((imageItem: any) => ({
        src: imageItem.src,
        type: media_group[0].type,
      }));

    return {
      title,
      mediaid: id,
      images,
    };
  });
};
const formatPlaylistItems = (entry: any[]) => {
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

export const formatPlaylist = (playlist: any) => {
  const { id, entry = [], extensions, ...rest } = playlist;
  const { rating, networks, programName } = entry[0]?.extensions || {};

  const transformedPlaylist = formatPlaylistItems(entry);

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
  const data = formatPlaylist(rawData);
  return data;
}
export async function fetchShowPlaylist(id: string) {
  const res = await fetch(`https://tbn-dsp-api-prod.tbncloud.com/v2/playlist?playlistid=${id}&page_limit=499&page_offset=1`);

  if (!res.ok) throw new Error('Failed to fetch shows data');
  const rawData = await res.json();
  const data = formatPlaylist(rawData);
  return data;
}
export async function fetchShowMedia(id: string) {
  const res = await fetch(`https://tbn-dsp-api-prod.tbncloud.com/v2/media?mediaid=${id}`);

  if (!res.ok) throw new Error('Failed to fetch shows data');
  const rawData = await res.json();
  const data = formatPlaylist(rawData);
  return data;
}

export async function fetchHomePageContent() {
  const res = await fetch('https://tbn-dsp-curation-api-prod.tbncloud.com/web/homepage?network=TBN&app_name=TBN');

  if (!res.ok) throw new Error('Failed to fetch shows data');
  const data = await res.json();
  return data;
}
export async function fetchHomeRailPlaylist(url: string) {
  const separator = url.includes('?') ? '&' : '?';
  const finalUrl = `${url}${separator}network=TBN&app_name=TBN`;
  console.log('finalUrl:', finalUrl);
  const res = await fetch(
    'https://tbn-dsp-curation-api-prod.tbncloud.com/web/virtual_feed?virtualfeed=false&page_limit=1&page_offset=20&playlistid=PQA0W1V7&page_offset=1&page_limit=100&network=TBN&app_name=TBN',
  );
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch shows data: ${res.status} ${res.statusText} - ${errorText}`);
  }

  const rawData = await res.json();
  const data = formatPlaylist(rawData);
  return data;
}

// export async function fetchLiveChannelsPlaylist() {
//   const res = await fetch(
//     'https://tbn-dsp-curation-api-prod.tbncloud.com/web/virtual_feed?virtualfeed=false&page_limit=1&page_offset=20&playlistid=wUwJ86KF&page_offset=1&page_limit=100&network=TBN&app_name=TBN',
//   );

//   if (!res.ok) throw new Error('Failed to fetch shows data');
//   const rawData = await res.json();
//   const data = formatPlaylist(rawData);
//   return data;
// }

// export async function ImgTopTenNumber() {
//   const res = await fetch('https://assets-production.applicaster.com/zapp/assets/accounts/611bb73cffbb140008bd18b4/static_feeds/feed-f6a92556-41cf-455a-b110-6b58dddaef60.json');

//   if (!res.ok) throw new Error('Failed to fetch shows data');
//   const rawData = await res.json();
//   const data = formatTopTenNumbers(rawData.entry);
//   return data;
// }
