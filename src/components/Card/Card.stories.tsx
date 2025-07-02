import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

// Placeholder images
const image16x9 = 'https://via.placeholder.com/320x180?text=16:9';
const image2x3 = 'https://via.placeholder.com/240x360?text=2:3';

const baseItem = {
  title: 'Sample Show Title',
  description: 'This is a brief description of the show that appears on hover in enhanced mode.',
  images: [{ src: image16x9 }],
  seriesId: 'series-123',
  mediaid: 'media-abc',
};

// Utility to wrap story with fixed width/height
const withFixedAspect = (width: number, height: number) => {
  const Decorator = (Story: any) => (
    <div style={{ width, height, border: '1px solid #eee' }}>
      <Story />
    </div>
  );
  Decorator.displayName = `WithFixedAspect_${width}x${height}`;
  return Decorator;
};

// 16:9 aspect ratio → 320x180
export const Default: Story = {
  args: {
    item: {
      ...baseItem,
      images: [{ src: image16x9 }],
    },
    cardAspectRatio: 16 / 9,
  },
  decorators: [withFixedAspect(320, 180)],
};

export const EnhancedHoverCard: Story = {
  args: {
    item: {
      ...baseItem,
      images: [{ src: image16x9 }],
    },
    isCardEnhanced: true,
    cardAspectRatio: 16 / 9,
  },
  decorators: [withFixedAspect(320, 180)],
};

export const WithoutDescription: Story = {
  args: {
    item: {
      ...baseItem,
      description: undefined,
      images: [{ src: image16x9 }],
    },
    isCardEnhanced: true,
    cardAspectRatio: 16 / 9,
  },
  decorators: [withFixedAspect(320, 180)],
};

// Portrait 2:3 → 240x360
export const PortraitCard: Story = {
  args: {
    item: {
      ...baseItem,
      images: [{ src: image2x3 }],
    },
    cardAspectRatio: 2 / 3,
  },
  decorators: [withFixedAspect(240, 360)],
};
