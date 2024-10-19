import { AbsoluteCenter, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Divider, Flex, HStack, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Tooltip, useDisclosure, VStack } from "@chakra-ui/react";
import { GlobalContext } from "@/app/contexts";
import { useContext, useState } from "react";
import { Global } from "@emotion/react";
import LayoutCard from "./layoutCard";
import { MdChatBubbleOutline, MdEmail, MdLocationOn, MdOutlineEmail, MdOutlineLocationOn, MdOutlineLock, MdOutlineModeEdit, MdPlusOne } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import CustomModal from "./customModal";
import { FaRegUser } from "react-icons/fa";
import { SideSelectionContext } from "@/app/contexts";
import SideButton from "./sideButton";
import { FaCirclePlay, FaCirclePlus } from "react-icons/fa6";

export default function AsideLeft(){
    const {primaryColor,bgColor, neutralColor, secondaryColor} = useContext(GlobalContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ modalFunc, setModalFunc ] = useState()
    const [ modalTitle, setModalTitle ] = useState()
    const [ modalInput, setModalInput] = useState()
    const [ selectedNav, setSelectedNav ] = useState("chat")
    
    const infoOnClick = (event, name) => {
        onOpen()
        setModalTitle(`Edit ${name}`)
        setModalInput(event.target.innerText)
    }

    const navigateOnClick = (event, name) => {
        setSelectedNav(name)
    }
    return (
        <LayoutCard>
            <CustomModal title={modalTitle} isOpen={isOpen} onClose={onClose} value={modalInput} primaryButton={"Apply Changes"} secondaryButton={"Cancel"} secondaryButtonCallback={onClose}>
                This is the body
            </CustomModal>

            <VStack w="100%" textAlign={"left"}>
                    <HStack backgroundColor= {selectedNav=="profile"?secondaryColor:neutralColor} color={selectedNav=="profile"?"white":"black"} borderWidth="1px" borderColor={selectedNav=="profile"?secondaryColor:neutralColor} borderRadius="10px" p="10px" sx={{_hover: {
                        cursor: "pointer", borderColor:secondaryColor, color:selectedNav=="profile"?"white":"black"
                        }}}  onClick={(event)=>{navigateOnClick(event, "profile")}} width="90%" >
                    <Avatar size="xs"></Avatar>
                    <Text fontSize="md" fontWeight={"bold"}>
                        Profile
                    </Text>
                </HStack>
                //

                <Accordion w="100%" defaultIndex={[1]} allowMultiple>
                    
                    <AccordionItem >
                        <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                            <Text fontWeight={"bold"}>About</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box width="100%">
                                <VStack>
                                    
                                    <HStack width="100%">
                                        <MdOutlineEmail/>
                                        <Text fontSize={"md"} whiteSpace={"norma"} wordBreak={"break-all"}>
                                            eugenetumagan@gmail.com
                                        </Text>
                                        <MdOutlineLock/>
                                    </HStack>

                                    <Tooltip label='click to edit' fontSize='sm'>
                                        <HStack sx={{_hover: {
                                        cursor: "pointer"
                                        }}} onClick={(event)=>{infoOnClick(event, "username")}} width="100%" >
                                            <FaRegUser />
                                            <Text fontSize={"md"}>
                                                Eugene Dave G. Tumagan
                                            </Text>
                                            
                                        </HStack>
                                    </Tooltip>
                                    <Tooltip label='click to edit' fontSize='sm'>
                                        <HStack sx={{_hover: {
                                        cursor: "pointer"
                                        }}} onClick={(event)=>{infoOnClick(event, "birthdate")}} width="100%" >
                                            <LiaBirthdayCakeSolid />
                                            <Text fontSize={"md"}>
                                                November 21, 2000
                                            </Text>
                                        </HStack>
                                    </Tooltip>
                                    <Tooltip label='click to edit' fontSize='sm'>
                                        <HStack sx={{_hover: {
                                        cursor: "pointer"
                                        }}} onClick={(event)=>{infoOnClick(event, "address")}} width="100%">
                                            <MdOutlineLocationOn/>
                                            <Text fontSize={"md"}>
                                                Brgy. Namocon, Tigbauan, Iloilo
                                            </Text>
                                        </HStack>
                                    </Tooltip>
                                    <Divider/>
                                </VStack>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem >
                        <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                            <Text fontWeight={"bold"}>Chat</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} >
                            <Box width="100%">
                                <SideSelectionContext.Provider value={{setSelectedNav, selectedNav, navigateOnClick}}>
                                    <VStack width="100%">
                                        <Tooltip label="create chatroom">
                                            <IconButton bgColor={neutralColor} icon={<FaCirclePlus color={secondaryColor}/>} w="100%"/>
                                        </Tooltip>
                                        <SideButton avatar={<Avatar size="xs" name="Eugene Dave G. Tumagan"></Avatar>} name={"Eugene Dave G. Tumagan"} identifier={1} fontWeight="normal"/>
                                        <SideButton avatar={<Avatar size="xs" src="group.png"></Avatar>} name={"Eugene, Eugene, Eugene, Eugene, Eugene, Eugene, Eugene, Eugene, Eugene, Eugene, Eugene, Eugene,  "} identifier={2} fontWeight="normal"/>
                                    </VStack>
                                </SideSelectionContext.Provider>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                //
                
            
            </VStack>

        </LayoutCard>
    )
}