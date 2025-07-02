// components/CardShowcase.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CardShowcase from './CardShowcase';

const theme = createTheme();

const meta: Meta<typeof CardShowcase> = {
  title: 'Components/CardShowcase',
  component: CardShowcase,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardShowcase>;

// 📌 Story 1: Default Card
export const Default: Story = {
  args: {
    title: 'Default Card',
    description: 'This is a basic card with standard hover effects.',
    imageUrl: '',
    isCardEnhanced: false,
  },
};

// 📌 Story 2: Card Enhanced
export const CardEnhanced: Story = {
  args: {
    title: 'Enhanced Card',
    description: 'This is an enhanced card with advanced hover animations and expanded content display. It features smooth transitions and a detailed overlay on hover.',
    imageUrl: '',
    isCardEnhanced: true,
  },
};
