import React from "react";
import { IconButton, Icon, HStack, Center, Container } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Text from '../helpers/MyText';
export default (props) => {
  const navigation = useNavigation();

  return (
    <HStack flexDirection="row-reverse" p={1}>
        <Center marginRight={1}>
      <IconButton
        icon={<Icon as={Ionicons} name="arrow-forward" color="white" />}
        borderRadius="full"
        onPress={() => navigation.goBack()}
      />
      </Center>
      <Center>
      <Text color="white" fontSize={25}>{props.catName}</Text>
      </Center>
    </HStack>
  );
};
