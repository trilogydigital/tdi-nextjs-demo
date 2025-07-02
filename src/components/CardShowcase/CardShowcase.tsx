// components/CardShowcase.tsx
import Image from 'next/image';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

type CardShowcaseProps = {
  title: string;
  description?: string;
  imageUrl?: string;
  cardAspectRatio?: number;
  onClick?: () => void;
  isCardEnhanced?: boolean;
};

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'isHovering' && prop !== 'isCardEnhanced',
})<{ isHovering: boolean; isCardEnhanced: boolean }>(({ theme, isHovering, isCardEnhanced }) => ({
  position: 'relative',
  width: 300,
  height: 200,
  cursor: 'pointer',
  backgroundColor: 'black',
  borderRadius: theme.spacing(1),
  border: `3px solid ${isHovering ? 'white' : 'transparent'}`,
  overflow: 'hidden',
  transform: isHovering ? 'scale(1.04)' : 'scale(1)',
  zIndex: isHovering ? 20 : 0,
  transition: isCardEnhanced ? 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)' : 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  ...(isCardEnhanced &&
    isHovering && {
      position: 'absolute',
      inset: 0,
    }),
}));

const ImageContainer = styled(Box)<{ cardAspectRatio: number }>(({ cardAspectRatio }) => ({
  position: 'relative',
  width: '100%',
  aspectRatio: cardAspectRatio,
}));

const EnhancedOverlay = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: 'white',
  padding: theme.spacing(2),
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  height: '200px',
  position: 'relative',
  borderBottomLeftRadius: theme.spacing(1),
  borderBottomRightRadius: theme.spacing(1),
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: theme.palette.grey[400],
  color: 'black',
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
  transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const TitleContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isCardEnhanced' && prop !== 'isHovering',
})<{ isCardEnhanced: boolean; isHovering: boolean }>(({ theme, isCardEnhanced, isHovering }) => ({
  opacity: isCardEnhanced && isHovering ? 0 : 1,
  transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  marginTop: theme.spacing(1),
}));

const MainContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isCardEnhanced',
})<{ isCardEnhanced: boolean }>(({ isCardEnhanced }) => ({
  position: 'relative',
  width: '100%',
  transition: isCardEnhanced ? 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

export default function CardShowcase({ title, description, imageUrl, cardAspectRatio = 16 / 9, onClick, isCardEnhanced = false }: CardShowcaseProps) {
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <MainContainer isCardEnhanced={isCardEnhanced} onClick={handleClick} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <StyledCard isHovering={isHovering} isCardEnhanced={isCardEnhanced}>
        {/* Image */}
        {imageUrl && (
          <ImageContainer cardAspectRatio={cardAspectRatio}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              style={{
                objectFit: 'cover',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }}
              sizes='(max-width: 768px) 100vw, 20vw'
            />
          </ImageContainer>
        )}

        {/* Enhanced overlay (on hover) */}
        {isCardEnhanced && isHovering && (
          <EnhancedOverlay>
            <Typography variant='h6' component='h3' sx={{ fontSize: '1rem' }}>
              {title}
            </Typography>
            <Typography
              variant='body2'
              sx={{
                fontSize: '0.875rem',
                fontWeight: 'normal',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {description}
            </Typography>
            <NavigationButton size='small'>
              <Send size={15} />
            </NavigationButton>
          </EnhancedOverlay>
        )}
      </StyledCard>

      {/* This will now appear *below* the card visually */}
      <TitleContainer isCardEnhanced={isCardEnhanced} isHovering={isHovering}>
        <Typography
          variant='body2'
          component='h3'
          sx={{
            fontSize: '0.875rem',
            fontWeight: 500,
            wordBreak: 'break-word',
          }}
        >
          {title}
        </Typography>
      </TitleContainer>
    </MainContainer>
  );
}
