import { Avatar, Box, Flex, HStack, Spinner, Text, useToast } from "@chakra-ui/react";
import { GlobalContext } from "@/app/contexts";
import { useContext, useState } from "react";
import { Global } from "@emotion/react";
import { FaCheck, FaUserPlus } from "react-icons/fa";
import { MdOutlineCheck, MdOutlineClose, MdUndo } from "react-icons/md";

export default function AddFriend({children}){
    const {bgColor, neutralColor} = useContext(GlobalContext)
    const [respond, setRespond] = useState(false)
    const [name, setName] = useState("Eugene Dave G. Tumagan")
    const sxHover = {_hover: {cursor: "pointer"}}

    
    const respondRequest = (event, intent) => {
        const newValue = !respond
        if (respond==true){
            setRespond(newValue)
            return
        }
        setRespond("2")
        setTimeout(()=>{
            setRespond(newValue)
        }, 5000)
    }

    return (
        <Box w="100%" bgColor={neutralColor} borderRadius={"10px"} p="5px" borderWidth={"1px"} mt="5px">
          
            <HStack>
                <Flex alignItems="center" justifyContent={"flex-start"} w="100%">
                    <Avatar size="xs" sx={sxHover}/>
                    <Text ml="5px" fontSize={"xs"} sx={sxHover}>{name}</Text>
                </Flex>
                <Flex gap="20px">
                    {respond==false?
                        <Box sx={{_hover: {cursor: "pointer"}}} color="green" onClick={(event)=>{respondRequest(event, "add")}}>
                            <FaUserPlus/>
                        </Box>
                    :   respond==true? 
                            <Box sx={{_hover: {cursor: "pointer", borderRadius: "10px", bgColor:"red", color:"white"}}} color="red" onClick={(event)=>{respondRequest(event, "cancel")}}>
                                <MdUndo />
                            </Box>
                            :   <Box color="green" >
                                    <Spinner size={"xs"}/>  
                                </Box>
                    }
                </Flex>
            </HStack>
        </Box>
        
        
    )
}