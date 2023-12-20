import { Typography } from "@mui/material";

interface IScreenProps {

}

const MainMenuScreen: React.FC<IScreenProps> = () => {

    return (
        <Typography
            textAlign={'center'}
            variant={'h3'}
        >
            {'Memory Game'}
        </Typography>
    )
};

export default MainMenuScreen;
