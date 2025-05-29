export const cardAspectRatios = ['2:1', '16:9', '5:3', '4:3', '1:1', '9:13', '2:3', '9:16', '16:4', '3:4', '16:2', '16:1', '16:7', '16:6'] as const;

export type PosterAspectRatio = (typeof cardAspectRatios)[number];

export type ActionButton = {
  enable: boolean;
  actionPluginIdentifier: string;
  selectedActionIcon: string;
  unselectedActionIcon: string;
  actionAssetFlavor: string;
  actionPosition: string;
  width: number;
  height: number;
  margin: number;
};

export type Badge = {
  enable: boolean;
  staticBadge: string;
  programBadge: string;
  feedBadge: string;
  linkBadge: string;
  articleBadge: string;
  channelBadge: string;
  videoBadge: string;
  customContentType1: string;
  customBadge1: string;
  customContentType2: string;
  customBadge2: string;
  customContentType3: string;
  customBadge3: string;
  customContentType4: string;
  customBadge4: string;
  customContentType5: string;
  customBadge5: string;
  badgePosition: string;
  width: number;
  height: number;
  margin: number;
};

export type CellBadge = {
  enable: boolean;
  cellBadgeDefault: string;
  selectedCellBadge: string;
  cellBadgePosition: string;
  cellBadgeWidth: number;
  cellBadgeHeight: number;
  cellBadgeMargin: number;
};

export type Cell = {
  backgroundColor: string;
  focusedBackgroundColor: string;
  selectedBackgroundColor: string;
  focusedSelectedBackgroundColor: string;
  cornerRadius: number;
  cellPadding: number;
  cellMargin: number;
  cellBorderPosition: string;
  cellBorderColor: string;
  cellFocusedBorderColor: string;
  cellSelectedBorderColor: string;
  cellFocusedSelectedBorderColor: string;
  borderSize: number;
  androidElevation: number;
  shadowColor: string;
  iosShadowOpacity: number;
  iosShadowOffsetWidth: number;
  iosShadowOffsetHeight: number;
  iosShadowRadius: number;
};

export type CellBottomBorder = {
  enable: boolean;
  borderBottomColor: string;
  focusedBorderBottomColor: string;
  selectedBorderBottomColor: string;
  focusedSelectedBorderBottomColor: string;
  borderBottomThickness: number;
  margin: number;
};

export type CellTopBorder = {
  enable: boolean;
  borderTopColor: string;
  focusedBorderTopColor: string;
  selectedBorderTopColor: string;
  focusedSelectedBorderTopColor: string;
  borderTopThickness: number;
  margin: number;
};

export type Image = {
  imageKey: string;
  imageRatio: PosterAspectRatio;
  placeholderColor: string;
  placeholderImage: string;
  overlayImage: string;
  padding: number;
  margin: number;
  imageBorderPosition: string;
  imageBorderColor: string;
  focusedImageBorderColor: string;
  selectedImageBorderColor: string;
  focusedSelectedImageBorderColor: string;
  borderSize: number;
  cornerRadius: number;
};

export type lockUnlockBadge = {
  enable: boolean;
  lockedBadge: string;
  unlockedBadge: string;
  badgrPosition: string;
  width: number;
  height: number;
  margin: number;
  lockBadgeDataKey: string;
};

export type ProgressBar = {
  enable: boolean;
  hideUnwatched: boolean;
  totalBarColor: string;
  totalBarCornerRadius: number;
  progressBarColor: string;
  progressBarCornerRadius: number;
  height: number;
  margin: number;
  position: string;
};

export type RuntimeLabel = {
  enable: boolean;
  fontColor: string;
  iosFontFamily: string;
  androidFontFamily: string;
  font: string;
  androidLetterSpacing: number;
  iosLetterSpacing: number;
  padding: number;
  backgroundColor: string;
  cornerRadius: number;
  margin: number;
};

export type SecondaryImage = {
  enable: boolean;
  imageKey: string;
  displayMode: string;
  width: number;
  height: number;
  imageSizing: string;
  fitPosition: string;
  position: string;
  align: string;
  cornerRadius: number;
  margin: number;
};

export type TextLabel = {
  enable: boolean;
  dataKey: string;
  fontColor: string;
  focusedFontColor: string;
  selectedFontColor: string;
  focusedSelectedFontColor: string;
  iosFontFamily: string;
  androidFontFamily: string;
  font: string;
  iosLetterSpacing: number;
  androidLetterSpacing: number;
  textAlignment: string;
  textTransform: string;
  numberOfLines: number;
  dateTransformEnabled: boolean;
  margin: number;
  padding: number;
  backgroundColor: string;
  focusedBackgroundColor: string;
  selectedBackgroundColor: string;
  focusedSelectedBackgroundColor: string;
  cornerRadius: number;
};

export type Item = {
  title: string;
  description?: string;
  images: { src: string }[];
  seriesId: string;
  mediaid: string;
};

export type CardProps = {
  item: Item;
  cardAspectRatio?: number;
  onClick?: (seriesId: string, mediaId: string) => void;
  overlayTitleOnHover?: boolean;
  isCardEnhanced?: boolean;
  isTileDock?: boolean;
  // Styles
  actionButton?: ActionButton[];
  badge?: Badge;
  cellBadge?: CellBadge;
  cell?: Cell;
  cellBottomBorder?: CellBottomBorder;
  cellTopBorder?: CellTopBorder;
  image?: Image;
  lockUnlockBadge?: lockUnlockBadge;
  progressBar?: ProgressBar;
  runtimeLabel?: RuntimeLabel;
  secondaryImage?: SecondaryImage;
  TextLabel?: TextLabel;
};
