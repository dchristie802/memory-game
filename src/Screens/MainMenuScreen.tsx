import { Typography } from '@mui/material';

// TODO: Add props
interface IScreenProps {}

const MainMenuScreen: React.FC<IScreenProps> = () => {
  return (
    <Typography
      textAlign={'center'}
      variant={'h3'}
    >
      {'Memory Game'}
    </Typography>
  );
};

export default MainMenuScreen;
