import { HStack, Image, Box } from "@chakra-ui/react";
import { NavLinks } from "./navlinks";

export function Navbar(){
  return(
    <HStack
      display="flex"
      justifyContent="space-between"
      w="100%"
      px="2rem"
      h="64px"
      
    >
      <Box>
        <Image src="/devtalks-WhiteWideLogo.svg" alt="DevTalksMz Logo"/>
      </Box>
      <NavLinks/>
    </HStack>
  )
}