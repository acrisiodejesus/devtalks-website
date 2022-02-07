import { UnorderedList, Link as ChakraLink, ListItem } from "@chakra-ui/react";
import Link from "next/link"

interface NavLinkProps {
  footer?: boolean;
}
export function NavLinks({footer}:NavLinkProps){
  return(
    <UnorderedList
      listStyleType="none"
      display="flex"
      flex-direction="row"
      gap="3rem"
    >
    <ListItem 
      bgColor={footer ? "gray.800" : "gray.700"}
      w="10rem"
      h="3rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="4"
      _hover={{
        background: "green.500"
      }}
    >
      <ChakraLink href="/events" as={Link}>Eventos</ChakraLink>
    </ListItem>
    <ListItem
      bgColor={footer ? "gray.800" : "gray.700"}
      w="10rem"
      h="3rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="4"
      _hover={{
        background: "green.500"
      }}
    >
    <ChakraLink href="/about" as={Link}>Sobre</ChakraLink>
    </ListItem>
  </UnorderedList>
  )
}