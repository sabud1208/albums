import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
  const { buttonStyles, textStyle } = styles;

  return (
    <TouchableOpacity onPress= {onPress} style={buttonStyles}>
    <Text style={textStyle}>
    Click me!!
    </Text>
    </TouchableOpacity>
  );
};

const styles =  {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 12,
    paddingButtom: 10
  },
  buttonStyles: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff'
  }
};
export default Button;
