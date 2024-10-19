import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text, VStack } from "@chakra-ui/react";
import { GlobalContext } from "@/app/contexts";
import { useContext } from "react";
import { Global } from "@emotion/react";
import LayoutCard from "./layoutCard";
import FriendRequest from "./friendRequest";
import AddFriend from "./addFriend";
import Friend from "./friend";

export default function AsideRight(){
    const {bgColor} = useContext(GlobalContext)
    
    return (
        <LayoutCard>
            <VStack w="100%" textAlign={"left"}>
                    <Accordion w="100%" defaultIndex={[1]} allowMultiple>
                    
                        <AccordionItem >
                            <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                <Text fontWeight={"bold"}>Friend Requests</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box width="100%">
                                    <VStack>
                                        <FriendRequest/>
                                        <FriendRequest/>
                                        <FriendRequest/>
                                    </VStack>
                                </Box>
                          
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                <Text fontWeight={"bold"}>Find Friends</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box width="100%">
                                    <VStack>
                                        <AddFriend/>
                                        <AddFriend/>
                                        <AddFriend/>

                                    </VStack>
                                </Box>
                          
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                <Text fontWeight={"bold"}>Friends</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            <Box width="100%">
                                <VStack>
                                    <Friend/>
                                    <Friend/>
                                    <Friend/>
                                </VStack>
                            </Box>
                          
                            </AccordionPanel>
                        </AccordionItem>
                    
                    </Accordion>
                   
                    
            </VStack>
        </LayoutCard>
        
    )
}