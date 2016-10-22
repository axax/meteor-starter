import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue300, grey900,blueGrey700} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: lightBlue300
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: lightBlue300,
  }
});


export default themeDefault;