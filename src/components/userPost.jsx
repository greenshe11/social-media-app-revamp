import { Avatar, Box, calc, Flex, HStack, Image, Skeleton, SkeletonCircle, SkeletonText, Text, Tooltip, VStack } from "@chakra-ui/react";
import { GlobalContext } from "@/app/contexts";
import { useContext, useEffect, useRef, useState } from "react";
import { Global } from "@emotion/react";
import { MdOutlineExpand, MdOutlineExpandLess, MdOutlineExpandMore, MdOutlineMoreHoriz } from "react-icons/md";
import ReactionPane from "./reactionPane";

export default function UserPost({flex, children}){
    const {neutralColor, primaryColor, secondaryColor} = useContext(GlobalContext)
    const [media, setMedia ] = useState("sampleImg.jpg")
    const [expandText, setExpandText] = useState(true)
    const [actualLines, setActualLines] = useState(false)
    const [mediaIsLoading, setMediaIsLoading] = useState(false)
    const [postIsLoading, setPosteIsLoading] = useState(false)
    const textRef = useRef()

    useEffect(()=>{
        const calculateLines = async () => {
            if (textRef.current) {
              const textElement = textRef.current;
              const lineHeight = parseInt(window.getComputedStyle(textElement).lineHeight, 10); // Get line height
              const height = textElement.clientHeight; // Get the height of the Text element
              const lines = Math.round(height / lineHeight); // Calculate number of lines
                console.log(lines)
              setActualLines(lines); // Set the actual number of lines
              lines>3&&setExpandText(false)
            }
          };
        calculateLines()
    },[])
    
    
    return (
        <Flex w="100%">
           
            <VStack w="100%" h="100%" >
                <Box w="100%"  h="100%" borderTopWidth={"5px"} pt="10px">
                    <SkeletonCircle isLoaded={!postIsLoading} h="100%" w="100%">
                        <HStack w="100%">
                            
                                <Avatar size="sm"></Avatar>
                                <Text sx={{_hover: {
                                cursor: "pointer"
                                }}} fontSize="s" fontWeight={"bold"} onClick={(event)=>{infoOnClick(event, "username")}}>
                                    Eugene Dave Tumagan
                                </Text>
                            
                        </HStack>
                        {!postIsLoading&&
                        <Text color={secondaryColor} fontSize={"2xs"}>
                            Posted on: November 21, 2000
                        </Text>
                    }
                    </SkeletonCircle>
                    
                </Box>
                
                <VStack w="100%">
                    <SkeletonText isLoaded={!postIsLoading} h="100%" w="100%">
                    <Text ref={textRef} noOfLines={expandText?"15":"3"} textAlign={"left"} w="100%" justifyContent={"left"} fontSize={"sm"} whiteSpace={"pre-wrap"}> 
                        {`Freiren Best Gir! 
SFAS
adasd
ada
da
da
sdada
d

asd
a
da
d`}
                    </Text>
                    {(actualLines>3)&&<Tooltip label={expandText? "show less": "show more"}>
                        <Flex w="20px" h="20px" color={secondaryColor} onClick={()=>{setExpandText(!expandText)}} sx={{_hover: {cursor: "pointer", color:"white", bgColor:secondaryColor, borderRadius:"50%"}}}>
                            {expandText?<MdOutlineExpandLess size="20px"></MdOutlineExpandLess>:<MdOutlineExpandMore size={"20px"}/>}
                        </Flex> 
                    </Tooltip>}
                    </SkeletonText>
                </VStack>
                { media&&
                <Box w="100%" h={!mediaIsLoading?"100%":"300px"} borderWidth="1px" backgroundColor={secondaryColor}>
                    <Skeleton height="100%" isLoaded={!mediaIsLoading&&!postIsLoading}>
                        <Image src={media} objectFit="contain" w="100%" maxH="600px"></Image>
                    </Skeleton>
                    
                </Box>}
                <Box height="30px" w="100%">
                    <ReactionPane/>
                </Box>
                
            </VStack>
        </Flex>

        
        
    )
}