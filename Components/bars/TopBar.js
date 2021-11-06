import * as React from "react";
import { HStack, Stack, Image, Center } from "native-base";
const Logo = require("../../assets/AtlasLogo.png");

export default () => {
  return (
    <Stack alignItems="center" w="full">
      <HStack alignItems="center" w="full">
        <Center paddingTop="30px" bgColor="white" shadow="9" w="full" _ios={{paddingTop:"40px"}}>
            <Image
              style={{ tintColor: "black", resizeMode:"center" }}
              _android={{height:65,  width:180}}
              _ios={{height:75,width:200}}
              source={Logo}
              alt="Alternate Text"
            />
        </Center>
      </HStack>
    </Stack>
  );
};
