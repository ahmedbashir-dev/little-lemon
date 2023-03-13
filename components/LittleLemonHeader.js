import React from 'react'
import { Text, View } from 'react-native'
import strings from "../utils/constants";
import palette from '../utils/palette';
export const LittleLemonHeader = () => {
    const _str = strings.en;

    return (
    <View style={{justifyContent:'center',alignItems:'center', backgroundColor: `${palette.yellow}` }}>
        <Text style={{padding:16, fontSize:30,  color: `${palette.black}` }}>{_str.little_lemon_header}</Text>
    </View>
  )
}
