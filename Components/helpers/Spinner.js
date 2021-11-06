import React from 'react'
import { Spinner, Center } from "native-base";

export default () => {
    return(
        <Center flex={1} >
            <Spinner color="white" size="lg" />
        </Center>
    )
}