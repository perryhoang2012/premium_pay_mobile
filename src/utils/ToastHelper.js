import Toast from 'react-native-toast-message';

export const toast = (text, text2, type = 'success', duration = 1000) => {
  let toastType = type;
  if (type === 'warning' || type === 'info') {
    toastType = 'info';
  }
  if (type === 'danger' || type === 'error') {
    toastType = 'error';
  }

  return Toast.show({
    text1: text,
    text2,
    autoHide: true,
    type: toastType,
    visibilityTime: duration,
    position: 'bottom',
  });
};
