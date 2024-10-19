import { Avatar, Box, Button, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Text, useToast } from "@chakra-ui/react";
import { GlobalContext } from "@/app/contexts";
import { useContext, useState } from "react";
import { Global } from "@emotion/react";
import { FaCheck, FaChevronCircleRight } from "react-icons/fa";
import { MdOutlineCheck, MdOutlineClose, MdOutlineMoreVert } from "react-icons/md";

export default function Friend({children}){
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
                    <Box sx={{_hover: {cursor: "pointer"}}} color="black" alignItems={"center"} >
                        <Menu>
                            <MenuButton h="100%">
                                <MdOutlineMoreVert size={"20px"} />
                            </MenuButton>
                            <MenuList>
                                <MenuItem fontSize={"xs"} color="red">unfriend</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
                :<Text color={respond=="accepted"?"green":"red"} fontSize={"xs"}>{respond}</Text>}
            </HStack>
        </Box>
        
        
    )
}