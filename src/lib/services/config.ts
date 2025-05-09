import { PlaylistType } from '@/enum/presets';

export const PRESET_MAPPING = {
  HomeRail_16x9: PlaylistType.Playlist,
  HomeRail_16x4: PlaylistType.Featured,
  continue_watching: PlaylistType.ContinueWatching,
  favorites: PlaylistType.Favorites,
  Featured: PlaylistType.Featured,
  FeaturedHomeRail: PlaylistType.Featured,
  MyList: PlaylistType.Favorites,
  ContinueWatching: PlaylistType.ContinueWatching,
  Downloads: PlaylistType.Downloads,
  InlineFeature: PlaylistType.InLine,
  '16x9TopTen': PlaylistType.TopTen,
  '16x9-NoTitle': PlaylistType.Playlist,
  '1x1TopTen': PlaylistType.TopTen,
  LiveChannels: PlaylistType.Live,
  LiveEvents: PlaylistType.Upcoming,
};
