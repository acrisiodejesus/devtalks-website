import { Box, HStack, VStack, Image, Text, Icon, Link } from "@chakra-ui/react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

import { NavLinks } from "./navlinks";

export function Footer(){
  return(
    <VStack
    bgColor="gray.700"
    pt="5rem"
    pb="1rem"
    px="1rem"
    rowGap="2rem"
    >
      <HStack
      display="flex"
      justify="space-between"
      w="100%"
      px="1rem"
      >
        <Box 
        display="flex"
        flexDir="row"
        gap="0.6rem"
        >
          <Image src="/devtalks-WhiteShortLogo.png" w="4rem" h="100%" alt="DevTalksMz Logo"/>
          <Box>
            <Text
              fontWeight="700"
            >
              DEVTALKSMZ
            </Text>
            <Text fontSize="1rem" w="15rem">
              Porque a programação é nosso forte e nós somos uma família
            </Text>
          </Box>
        </Box>
        <NavLinks footer/>
      </HStack>
      <HStack
        display="flex"
        justify="space-between"
        w="100%"
        px="1rem"
      >
        <Box
        display="flex"
        flexDir="row"
        gap="1rem"
        
        >
          <Link href="https://facebook.com/devtalksmz"
            bgColor="gray.800"
            w="3rem"
            h="3rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="4"
            _hover={{
              background: "green.500"
            }}
          >
            <Icon as={FaFacebook}/>
          </Link>
          <Link href="https://facebook.com/devtalksmz"
            bgColor="gray.800"
            w="3rem"
            h="3rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="4"
            _hover={{
              background: "green.500"
            }}
          >
            <Icon as={FaYoutube}/>
          </Link>
        </Box>
        <Text>
        DEVTALKSMZ © - 2022 - Todos direitos reservados.
        </Text>
      </HStack>
    </VStack>

  )
}