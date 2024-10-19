import { Box, Flex, HStack, Text, Tooltip, VStack } from "@chakra-ui/react";
import { GlobalContext } from "@/app/contexts";
import { useContext, useMemo, useState } from "react";
import { Global } from "@emotion/react";
import { FaHeart, FaLaughSquint } from "react-icons/fa";
import { FaFaceAngry, FaFaceSadTear } from "react-icons/fa6";

const hoverColor = "black"
const cCode = { // color code
    "1": "#b32296", // love
    "2": "#b39622", // laugh
    "3": "#225cb3", // sad
    "4": "#b32222" // angry
}

export default function ReactionPane({flex, children}){
    const {bgColor} = useContext(GlobalContext)
    const [ hoverIndex , setHoverIndex] = useState("0")
    const [ selectedIndex, setSelectedIndex ] = useState("0")
    const [ reactCounts, setReactCounts ] = useState([10,0,0,0])
    

    const onResetHover = (event) => {
        setHoverIndex("0")
    }

    const onSelect = (event) => {
        const thisIndex = event.currentTarget.dataset.index
        setHoverIndex("0")
        if (!(thisIndex==selectedIndex)){
            // selected index is not the previously selected
            setSelectedIndex(thisIndex)
           
            setReactCounts((array)=>{
                const newArray = [...array]; 
                const index = Number(thisIndex) - 1
                const prevIndex = Number(selectedIndex) - 1
                newArray[index]+=1
                newArray[prevIndex]-=1

                return newArray
            })

            
            
            return
        }
        setSelectedIndex("0")
        setReactCounts((array)=>{
            const newArray = [...array]; 
            const index = Number(thisIndex) - 1
            newArray[index]-=1

            return newArray
        })
    }

    const onHover = (event) => {
        const thisIndex = event.currentTarget.dataset.index
        if (!(thisIndex==selectedIndex)){
            setHoverIndex(thisIndex)
        }
    }
    
    return (
        <HStack h="100%" w="100%" px="10px" py="5px" gap="20px">
            <Tooltip placement="top" label="love">
                <HStack data-index="1" h="100%" sx={{_hover: {cursor: "pointer"}}} onMouseEnter={onHover} onMouseLeave={onResetHover} onClick={onSelect}>
                    <FaHeart height="100%"  color={hoverIndex=="1"?hoverColor:selectedIndex=="1"?cCode["1"]:"gray"}/>
                    <Text textAlign={"left"} color={hoverIndex=="1"?hoverColor:selectedIndex=="1"?cCode["1"]:"gray"}>{reactCounts[0]||""}</Text>
                </HStack>
            </Tooltip>s
            <Tooltip placement="top" label="laugh">
                <HStack data-index="2" h="100%" sx={{_hover: {cursor: "pointer", borderRadius:"10px"}}} onMouseEnter={onHover} onMouseLeave={onResetHover} onClick={onSelect}>
                    <FaLaughSquint color={hoverIndex=="2"?hoverColor:selectedIndex=="2"?cCode["2"]:"gray"}/>
                    <Text textAlign={"left"} color={hoverIndex=="2"?hoverColor:selectedIndex=="2"?cCode["2"]:"gray"}>{reactCounts[1]||""}</Text>
                </HStack>
            </Tooltip>
            <Tooltip placement="top" label="sad">
                <HStack data-index="3" h="100%" sx={{_hover: {cursor: "pointer",borderRadius:"10px"}}} onMouseEnter={onHover} onMouseLeave={onResetHover} onClick={onSelect}>
                    <FaFaceSadTear  color={hoverIndex=="3"?hoverColor:selectedIndex=="3"?cCode["3"]:"gray"} />
                    <Text textAlign={"left"} color={hoverIndex=="3"?hoverColor:selectedIndex=="3"?cCode["3"]:"gray"}>{reactCounts[2]||""}</Text>
                </HStack>
            </Tooltip>
            <Tooltip placement="top" label="angry">
                <HStack data-index="4" h="100%" sx={{_hover: {cursor: "pointer", borderRadius:"10px"}}} onMouseEnter={onHover} onMouseLeave={onResetHover} onClick={onSelect}>
                    <FaFaceAngry height="100%" color={hoverIndex=="4"?hoverColor:selectedIndex=="4"?cCode["4"]:"gray"}/>
                    <Text textAlign={"left"} color={hoverIndex=="4"?hoverColor:selectedIndex=="4"?cCode["4"]:"gray"}>{reactCounts[3]||""}</Text>
                </HStack>
            </Tooltip>
           
            
        </HStack>
        
        
    )
}