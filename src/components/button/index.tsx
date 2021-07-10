import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { style } from './style';

type ButtonAddProps = TouchableOpacityProps & {
  title: string;
};

export const ButtonAdd = ({ title, ...rest }: ButtonAddProps) => {
  return (
    <TouchableOpacity style={style.buttonAdd} activeOpacity={0.7} {...rest}>
      <Text style={style.buttonText}> {title} </Text>
    </TouchableOpacity>
  );
};
