import { Box, Flex, Text } from "@chakra-ui/react";
import { GlobalContext } from "@/app/contexts";
import { useContext } from "react";
import { Global } from "@emotion/react";

export default function LayoutCard({flex, children}){
    const {bgColor} = useContext(GlobalContext)

    
    return (
        <Flex overflowY={"hidden"} padding="10px" flex={flex||"1"} width="100px" h="100%">
            <Flex py="20px" h="100%" px="10px" w="100%" borderRadius="10px" bgColor={bgColor} >
                <Flex w="100%" h="100%" overflow="scroll">
                    {children}
                </Flex>
            </Flex>
        </Flex>
        
        
    )
}