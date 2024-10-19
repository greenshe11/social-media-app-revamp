
import { Button, Tooltip, Flex, FormControl, FormHelperText, FormLabel, HStack,Textarea } from "@chakra-ui/react";
import { GlobalContext } from "@/app/contexts";
import { useContext, useRef } from "react";
import { MdOutlineAudioFile, MdOutlineImage, MdOutlineVideoFile } from "react-icons/md";
import { Global } from "@emotion/react";

export default function CreatePostDisplay({flex, children}){
    const {bgColor, neutralColor, primaryColor, secondaryColor} = useContext(GlobalContext)

    const inputRef = useRef()
    return (
        //
        <Flex w="100%" p="10px" borderColor={neutralColor} borderRadius={"10px"} borderWidth={"1px"}>
        <form onSubmit={()=>{alert("HELLO")}} style={{height: "100%", width: "100%"}}>
            <FormControl >
                <FormLabel>Whats on your mind?</FormLabel>
                <Textarea ref={inputRef} maxH={"300px"}/>
                <HStack p="5px" alignItems={"center"} w="100%">
                    <FormHelperText height="30px" whiteSpace={"nowrap"}>Attach a file: </FormHelperText>
                    <Tooltip label="insert image">
                        <Flex height="100%" sx={{_hover: {cursor: "pointer"}}}>       
                                <MdOutlineImage size={"20px"}/>
                        </Flex>
                    </Tooltip>
                    <Tooltip label="insert video">
                        <Flex height="100%" sx={{_hover: {cursor: "pointer"}}}>       
                                <MdOutlineVideoFile size={"20px"}/>
                        </Flex>
                    </Tooltip>
                    <Tooltip label="insert audio">
                        <Flex height="100%" sx={{_hover: {cursor: "pointer"}}}>       
                                <MdOutlineAudioFile size={"20px"}/>
                        </Flex>
                    </Tooltip>
                    <Flex justifyContent="flex-end" w="100%"> {/* Flex container to align button */}
                        <Button backgroundColor={secondaryColor} color="white" type="submit">Post</Button>
                    </Flex>
                </HStack>
               
            </FormControl>
            
          
        </form>
    </Flex>
        
        
    )
}