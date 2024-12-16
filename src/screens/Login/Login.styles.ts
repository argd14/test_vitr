import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const inputStyle = StyleSheet.create({
  customTextInput: {
    color: COLORS.WHITE,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 13,
    width: 275,
    paddingLeft: 15,
    height: 50,
    marginBottom: 25,
    fontSize: 14,
    // fontFamily: FonStyle.Basier.fontFamily,
    textAlignVertical: 'center',
  },
  guestButton: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
  },
});
