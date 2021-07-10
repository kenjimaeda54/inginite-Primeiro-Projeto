import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { style } from './style';

type SkillCardProps = TouchableOpacityProps & {
  data: string;
};

export const SkillCard = ({ data, ...rest }: SkillCardProps) => {
  return (
    <TouchableOpacity style={style.buttonSkill} {...rest}>
      <Text style={style.textSkill}> {data} </Text>
    </TouchableOpacity>
  );
};
