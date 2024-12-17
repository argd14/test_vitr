import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const inputStyle = StyleSheet.create({
  customTextInput: {
    color: COLORS.BLACK,
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    borderRadius: 4,
    width: 275,
    paddingLeft: 15,
    height: 50,
    marginBottom: 25,
    fontSize: 14,
    textAlignVertical: 'center',
  },
  guestButton: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
  },
});

export const viewStyles = StyleSheet.create({
  keycustomstyles: {
    flex: 1,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  toastView: {
    zIndex: 1,
    top: 50,
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
  },
});
