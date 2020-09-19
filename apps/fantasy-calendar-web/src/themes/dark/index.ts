import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';

export const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: indigo['A200'] },
    secondary: { main: amber['A200'] },
  },
});
