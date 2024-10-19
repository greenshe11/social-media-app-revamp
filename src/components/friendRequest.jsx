import { Avatar, Box, Flex, HStack, Text, useToast } from "@chakra-ui/react";
import { GlobalContext } from "@/app/contexts";
import { useContext, useState } from "react";
import { Global } from "@emotion/react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineCheck, MdOutlineClose } from "react-icons/md";

export default function FriendRequest({children}){
    const {bgColor, neutralColor} = useContext(GlobalContext)
    const [respond, setRespond] = useState(false)
    const [name, setName] = useState("Eugene Dave G. Tumagan")
    const sxHover = {_hover: {cursor: "pointer"}}

    
    const respondRequest = (event, accept) => {
        setRespond(accept?"accepted":"rejected")
     
    }

    return (
        <Box w="100%" bgColor={neutralColor} borderRadius={"10px"} p="5px" borderWidth={"1px"} mt="5px">
          
            <HStack>
                <Flex alignItems="center" justifyContent={"flex-start"} w="100%">
                    <Avatar size="xs" sx={sxHover}/>
                    <Text ml="5px" fontSize={"xs"} sx={sxHover}>{name}</Text>
                </Flex>
                {!respond?
                <Flex gap="20px">
                    <Box sx={{_hover: {cursor: "pointer", borderRadius: "10px", bgColor:"green", color:"white"}}} color="green" onClick={(event)=>{respondRequest(event, true)}}>
                        <MdOutlineCheck/>
                    </Box>
                    <Box sx={{_hover: {cursor: "pointer", borderRadius: "10px", bgColor:"red", color:"white"}}} color="red" onClick={(event)=>{respondRequest(event, false)}}>
                        <MdOutlineClose />
                    </Box>
                </Flex>
                :<Text color={respond=="accepted"?"green":"red"} fontSize={"xs"}>{respond}</Text>}
            </HStack>
        </Box>
        
        
    )
}