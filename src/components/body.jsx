import { Box, Button, Divider,Tooltip, Flex, FormControl, FormHelperText, FormLabel, HStack, Input, Text, Textarea, VStack, Avatar } from "@chakra-ui/react";
import { GlobalContext } from "@/app/contexts";
import { useContext, useRef } from "react";
import { Global } from "@emotion/react";
import CreatePostDisplay from "./createPostDisplay";
import LayoutCard from "./layoutCard";
import { MdLocationOn, MdOutlineAudioFile, MdOutlineEmail, MdOutlineImage, MdOutlineLock, MdOutlineVideoFile } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import UserPost from "./userPost";

export default function Body(){
    const {bgColor, neutralColor, primaryColor} = useContext(GlobalContext)
  
    return (
        <LayoutCard flex="2">
            <VStack w="100%">
                // Profile Info
                <Flex width="100%" justifyContent={"center"}>
                    <VStack>
                        <Avatar size="2xl"/>   
                        <Text fontSize={"2xl"} fontWeight={"bold"}>
                            Eugene Dave G. Tumagan
                        </Text>
                        <HStack>
                    
                        <MdOutlineEmail/>
                        <Text fontSize={"md"}>
                            eugenetumagan@gmail.com
                        </Text>
                    </HStack>
                        <HStack>
                            <LiaBirthdayCakeSolid/>
                            <Text fontSize={"md"}>
                                November 21, 2000
                            </Text>
                        </HStack>
                   
                        <HStack>
                            <MdLocationOn/>
                            <Text fontSize={"md"}>
                                Brgy. Namocon, Tigbauan, Iloilo
                            </Text>
                        </HStack>
                    </VStack>
                   
                </Flex>

                <CreatePostDisplay/>

               
                <UserPost/>
                <UserPost/>
                <UserPost/>
                <UserPost/>
                <UserPost/>
                <Text fontSize={"100px"}>
            </Text>
            </VStack>
        </LayoutCard>
        
    )
}