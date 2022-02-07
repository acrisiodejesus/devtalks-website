import { VStack, Box, Text, Link, Icon, Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import {FaAngleRight} from "react-icons/fa"
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";


export default function Home() {
  const [isOpenHouseEvent, setOpenHouseEvent] = useState(true)
  return (
    <>
      <VStack>
        <Navbar />
        <Box
        as="section"
        bgImage="url(headerbg.jpg)"
        w="100%"
        h="auto"
        py="130px"
        px="180px"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        rowGap="20px"
        >
          <Text 
          as="h1"
          fontSize="24"
          fontWeight="700"
          >
          Os melhores eventos de Tecnologia em Moçambique
          </Text>
          <Text textAlign="center" px="280px">
          Participe nos eventos, entre na comunidade, se conecte com os melhores desenvolvedores Mocambicanos e de fora dos pais!
          <br/> Porque a programação e o nosso forte e nos somos uma familia!
          </Text>
          <Link 
          href="#events"
          bgColor="green.500"
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="center"
          borderRadius="4"
          py="10px" 
          w="15rem"
          gap="15px"
          textDecoration="none"
          transition="border 0.1s"
          _hover={
            {
              fontWeight: "700",
              border: "2px solid white"
            }
          }       
          >
            <Text>Conheça os eventos</Text>
            <Icon as={FaAngleRight}/>
          </Link>
        </Box>
      </VStack>
      <Box
      as="section"
      mx="28%"
      my="60px"
      bgColor="gray.700"
      display="flex"
      flexDir="column"
      alignItems="center"
      borderRadius="4"
      p="15px"

      >
        <Box
        w="538px"
        id="events"
        bgColor="gray.800"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        borderRadius="4"
        >
          <Button
            onClick={()=> {setOpenHouseEvent(true)}}
            borderBottom="3px solid"
            borderColor={isOpenHouseEvent ? "green.500" : "transparent"}
            w="50%"
            borderRadius="0"
            bgColor="transparent"
            _hover={{
              background: "green.500"
            }}
          >
            Open House
          </Button>
          <Button
            onClick={()=> {setOpenHouseEvent(false)}}
            borderBottom="3px solid"
            borderColor={isOpenHouseEvent ? "transparent": "green.500"}
            w="50%"
            borderRadius="0"
            bgColor="transparent"
            _hover={{
              background: "green.500"
            }}
          >
            The Interview
          </Button>
        </Box>
        <Box
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        gap="50px"
        py="2rem"
        >
          <Image src="/VideoCall.svg" alt="Meetups ilustrations"/>
          <Box
            display="flex"
            flexDir="column"
            width="50%"
            rowGap="18px"
          >
            {isOpenHouseEvent? 
            <>
              <Text 
              as="h3"
              fontSize="24"
              fontWeight="700"
              >
                OPEN HOUSE
              </Text>
              <Text>
                É a casa aberta para desenvolvedores partilharem experiências práticas relacionadas com as tecnologias usadas no dia-a-dia. 
                É um evento em que Devs moçambicanos de varias stacks e linguagens de programação colocam a mão na massa para mostrar a potencialidades das tecnologias que usam.
              </Text>
            </>:
            <>
              <Text 
              as="h3"
              fontSize="24"
              fontWeight="700"
              >
                THE INTERVIEW
              </Text>
              <Text>
                Espaço de conversa de devs que ja actuam no mercado moçambicano, 
                onde estarão compartilhando os desafios ja enfrentados e o processo para superá-los, 
                quais os problemas recorentes e o caminho para resolve-los e muito mais.
              </Text>
            </>}
          </Box>

        </Box>
      </Box>
      <Footer/>
    </>
  )
}
