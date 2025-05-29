import ShelfForHome from '@/components/ShelfForHome/ShelfForHome';
import { fetchHomePageContent, fetchHomeRailPlaylist } from '@/lib/services/api.service';

export default async function HomeContent() {
  const HomePageContentData = await fetchHomePageContent();

  const rails = await Promise.all(
    HomePageContentData.entry.map(async ({ feed_url, preset_name }) => {
      const data = await fetchHomeRailPlaylist(feed_url);
      return {
        preset_name,
        items: data.playlist,
      };
    }),
  );

  return <ShelfForHome rails={rails} />;
}

// import ShelfForHome from '@/components/ShelfForHome/ShelfForHome';
// import { fetchLiveChannelsPlaylist, ImgTopTenNumber } from '@/lib/services/api.service';

// export default async function HomeContent() {
//   const data = await fetchLiveChannelsPlaylist();
//   const TopTenNumber = await ImgTopTenNumber();
//   console.log('TopTenNumber:', TopTenNumber);

//   return <ShelfForHome TopTenNumber={TopTenNumber} items={data.playlist} />;
// }
