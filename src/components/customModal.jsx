"use client"
import { GlobalContext } from "@/app/contexts";
import { Avatar, Box, Button, Divider, Flex, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { Global } from "@emotion/react";
import LayoutCard from "./layoutCard";

export default function CustomModal({children, isOpen, onClose, title, value, secondaryButton, secondaryButtonCallback, primaryButton, primaryButtonCallback}){
    const {secondaryColor} = useContext(GlobalContext)
    
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input placeholder={value} />    
                </ModalBody>
                <ModalFooter>
                {primaryButton?
                    <Button bgColor={secondaryColor} color="white" mr={3} onClick={primaryButtonCallback}>
                        {primaryButton}
                    </Button>:null}
                
                {secondaryButton?
                    <Button variant='ghost' onClick={secondaryButtonCallback}>
                        {secondaryButton}
                    </Button>:null}

                </ModalFooter>
            </ModalContent>
        </Modal>
        
    )
}