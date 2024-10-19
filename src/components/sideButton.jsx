import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { GlobalContext,SideSelectionContext } from "@/app/contexts";
import { useContext } from "react";
import { Global } from "@emotion/react";
import { MdOutlineMoreVert } from "react-icons/md";

export default function SideButton({children, identifier, icon, avatar, width, name, fontWeight}){
    const {bgColor, secondaryColor, neutralColor} = useContext(GlobalContext)
    const {setSelectedNav, selectedNav, navigateOnClick} = useContext(SideSelectionContext)
    
    return (
        <HStack width="100%">
            <HStack backgroundColor= {selectedNav==identifier?secondaryColor:neutralColor} color={selectedNav==identifier?"white":"black"} borderWidth="1px" borderColor={selectedNav==identifier?secondaryColor:neutralColor} borderRadius="10px" p="10px" sx={{_hover: {
            cursor: "pointer", borderColor:secondaryColor, color:selectedNav==identifier?"white":"black"
            }}}  onClick={(event)=>{navigateOnClick(event, identifier)}} width={width||"100%"} >
                {icon||avatar||null}
                    <Text noOfLines={1} fontSize="sm" fontWeight={fontWeight}>
                        {name}
                </Text>
            </HStack>
        </HStack>
    )
}