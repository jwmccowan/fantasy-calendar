import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';

export const light = createMuiTheme({
  palette: {
    type: 'light',
    primary: indigo,
    secondary: amber,
  },
});
