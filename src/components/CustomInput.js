import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const CustomInput = props => {
  const {
    style,
    multiline,
    value,
    number,
    keyboardType,
    onChangeText,
    negative,
    placeholder,
    password,
    onFocus,
    onSubmitEditing,
  } = props;
  return (
    <TextInput
      textAlignVertical={multiline ? 'top' : 'center'}
      multiline={multiline}
      value={value && value}
      secureTextEntry={password}
      onChangeText={e => {
        if (number) {
          const num = negative
            ? e.replace(/[^0-9-]/g, '')
            : e.replace(/[^0-9]/g, '');
          onChangeText(num);
        } else {
          onChangeText(e);
        }
      }}
      onFocus={onFocus}
      onSubmitEditing={onSubmitEditing}
      placeholderTextColor="rgba(255, 255, 255, 0.6)"
      placeholder={placeholder}
      keyboardType={keyboardType || 'default'}
      style={[styles.input, style, multiline && {paddingTop: 10}]}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    margin: 0,
    padding: 0,
  },
});
