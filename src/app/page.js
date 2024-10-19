"use client"

import Image from "next/image";
import styles from "./page.module.css";

import {useEffect, useState} from "react";
import { Box, Flex, HStack, StackDivider, Text, VStack } from "@chakra-ui/react";

import { GlobalContext } from "./contexts";
import AsideLeft from "@/components/asideLeft";

import Body from "@/components/body";
import LayoutCard from "@/components/layoutCard";
import AsideRight from "@/components/asideRight";

import GlobalStyles from "./globalStyles";
const colorPalettes = {
    "Ocean Breeze": {
        primary: "#0077B3",     // Ocean Blue
        secondary: "#4DAF7C",   // Sea Green
        accent: "#FFC107",       // Amber
        neutral: "#F5F5F5",       // Light Gray
        bg:  "#FFFFFF"   
    },
    "Warm Sunset": {
        primary: "#FF5733",     // Coral Red
        secondary: "#FFC300",   // Golden Yellow
        accent: "#C70039",      // Crimson
        neutral: "#F5F5F5",       // Light Gray
        bg:  "#FFFFFF"   
    },
    "Soft Pastels": {
        primary: "#FF6F61",     // Peach
        secondary: "#6F61FF",   // Lavender
        accent: "#61FF6F",      // Mint Green
        neutral: "#F5F5F5",       // Light Gray
        bg:  "#FFFFFF"   
    },
    "Elegant Monochrome": {
        primary: "#000000",      // Black
        secondary: "#808080",    // Gray
        accent: "#FFCC00",       // Gold
        neutral: "#F5F5F5",       // Light Gray
        bg:  "#FFFFFF"   
    },
    "Fresh Greens": {
        primary: "#4CAF50",      // Green
        secondary: "#8BC34A",    // Lime Green
        accent: "#FFEB3B",       // Lemon Yellow
        neutral: "#F5F5F5",       // Light Gray
        bg:  "#FFFFFF"   
    },
    "Classic Blue and Gold": {
        primary: "#003366",      // Navy Blue
        secondary: "#FFD700",    // Gold
        accent: "#FF6347",       // Tomato Red
        neutral: "#F5F5F5",       // Light Gray
        bg:  "#FFFFFF"   
        
    },
 };


    
export default function Root() {
    const [primaryColor, setPrimaryColor] = useState()
    const [secondaryColor,setSecondaryColor] = useState()
    const [accentColor, setAccentColor] = useState()
    const [neutralColor, setNeutralColor] = useState()
    const [bgColor, setBgColor] = useState()
    const [theme, setTheme] = useState('Soft Pastels')
  
    useEffect(()=>{
        setPrimaryColor(colorPalettes[theme].primary)
        setSecondaryColor(colorPalettes[theme].secondary)
        setAccentColor(colorPalettes[theme].accent)
        setNeutralColor(colorPalettes[theme].neutral)
        setBgColor(colorPalettes[theme].bg)
        document.documentElement.style.visibility = 'visible'
    },[theme])

    return(
    <Flex bgColor={primaryColor} w="100%" h="100%">
        <GlobalContext.Provider 
            value={{
            theme, setTheme, 
            primaryColor, setPrimaryColor, 
            secondaryColor, setSecondaryColor,
            accentColor, setAccentColor,
            neutralColor, setNeutralColor,
            bgColor, setBgColor}}>
            <GlobalStyles/>
         
            <AsideLeft>

            </AsideLeft>
            
            <Body>
                
            </Body>

            <AsideRight>

            </AsideRight>
    
        </GlobalContext.Provider>
    </Flex>
    )
}
