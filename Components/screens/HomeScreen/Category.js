import React from "react";
import { Box, AspectRatio, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default (props) => {
  const navigation = useNavigation();
  return (
    <Box width="1/2" padding="5px">
      <TouchableOpacity onPress={()=>navigation.push('CategoryContainer',{key:props.J,catName:props.name})}>
        <AspectRatio ratio={16 / 16}>
          <Image
            source={{
              uri: props.imageUri,
            }}
            alt="image"
          />
        </AspectRatio>
      </TouchableOpacity>
    </Box>
  );
};
