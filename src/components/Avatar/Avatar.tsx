import React from 'react';
import { View, Image } from 'react-native';

type Props = {
  source: String | Number;
  height?: Number;
  style?: Object;
}

const Avatar = ({ source, height = 40, style }: Props) => (
 <View
  style={{
    height,
    width: height,
    borderRadius: height / 2,
    overflow: 'hidden',
    margin: 3,
    ...style,
  }}
 >
   <Image style={{ height, width: height }} resizeMode="contain" source={{ uri: source }} />
 </View>
);

export default Avatar;