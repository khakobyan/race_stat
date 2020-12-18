import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '../../helpers/sizes';
import { DARK_GREY, MILKY } from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MILKY
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: DARK_GREY
  },
  pagination: {
    marginTop: heightPercentageToDP('5'),
  },
  cell: {
    color: 'red',
    display: 'flex',
    justifyContent: 'center'
  } 
});
