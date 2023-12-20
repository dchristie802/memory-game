import { CssBaseline, StyledEngineProvider, ThemeProvider, responsiveFontSizes } from "@mui/material";
import defaultTheme from '../../themes/default';

interface IProps {
    children: React.ReactElement;
}

const AppThemeProvider: React.FC<IProps> = ({ children }) => {
    const theme = responsiveFontSizes(defaultTheme)

    return (
        <StyledEngineProvider injectFirst={true}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    {children}
                </CssBaseline>
            </ThemeProvider>
        </StyledEngineProvider>
    )
};

export default AppThemeProvider;
