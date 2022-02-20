import { 
    createTheme 
} from '@mui/material/styles';
import {
    orange,
    pink
} from '@mui/material/colors';

const useTheme = () => {
    return createTheme({
        palette: {
            mode: 'dark',
            primary: orange,
            secondary: pink
        }
    });
};

export default useTheme;
