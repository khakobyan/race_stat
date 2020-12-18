import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../helpers/sizes';
import { MILKY } from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MILKY,
    paddingHorizontal: widthPercentageToDP('5'),
    paddingTop: heightPercentageToDP('2'),
  },
});
