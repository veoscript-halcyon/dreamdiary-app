import React from 'react'
import moment from 'moment'
import tw from 'twrnc'
import { fonts } from '../styles/csssheet'
import { View, Text } from 'react-native'

interface IProps {
  route: any
}

const DiaryContent: React.FC<IProps> = ({ route }) => {
  return (
    <View style={tw`flex flex-col items-start p-5`}>
      <View style={tw`flex flex-col items-start mb-10`}>
        <Text style={[tw`text-3xl text-[#FB8500]`, fonts.fontPoppinsBlack]}>{route.params.title}</Text>
        <Text style={[tw`text-[18px] text-[#023047]`, fonts.fontPoppinsSemiBold]}>{route.params.description}</Text>
      </View>
      <View style={tw`flex flex-col items-start`}>
        <Text style={[tw`text-base text-[#333333] mb-2`, fonts.fontPoppins]}>{route.params.story}</Text>
        <Text style={[tw`text-xs text-zinc-500`, fonts.fontPoppinsLight]}>{moment(new Date(route.params.date)).fromNow()}</Text>
      </View>
    </View>
  )
}

export default DiaryContent