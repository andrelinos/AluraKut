import Head from 'next/head';

import {
  Flex,
  Box,
  Text,
  Image,
  Grid,
  Link,
} from '@chakra-ui/react';

import { CardUser } from '../components/CardUser';

import { DarkModeSwitch } from '../components/DarkModeSwitch';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alurakut</title>
      </Head>

      <Flex w="100vw" h="100vh" flexDir="column" bg="blue.100">
        <Header />

        <Flex p="1rem" w="100%" maxW="1100px" mx="auto" flexDir={['column', 'column', 'row']}>
          <Flex
            w="10rem"
            bg="white"
            borderRadius="0.5rem"
            display={['none',
              'none',
              'flex']}
            flexDir="column"
          >
            <Flex h="10rem" p="1rem" borderRadius="0.5rem">
              <Image borderRadius="0.5rem" src="https://github.com/andrelinos.png" />
            </Flex>

          </Flex>
          <Flex flex="1" bg="white" borderRadius="0.5rem" p="1rem" mx="1rem">
            <Text fontSize="3xl" fontWeight="500">Bem-vindo(a), Andrelino</Text>
          </Flex>
          <Flex w="19.5rem" flexDir="column">
            <Flex p="0.5rem" bg="white" borderRadius="0.5rem" flexDir="column" mb="1rem">
              <Text fontSize="lg" mb="1rem">Meus amigos (6)</Text>
              <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                <Link to="https://alurakut-base-2.vercel.app/users/juunegreiros">
                  <CardUser image="https://github.com/juunegreiros.png">
                    <Text>Juu Negreiros</Text>
                  </CardUser>
                </Link>
                <Link to="/">
                  <CardUser image="https://github.com/omariosouto.png">
                    <Text>Mario Solto</Text>
                  </CardUser>
                </Link>
                <Link to="/">
                  <CardUser image="https://github.com/peas.png">
                    <Text>Paulo</Text>
                  </CardUser>
                </Link>
                <Link to="/">
                  <CardUser image="https://github.com/rafaballerini.png">
                    <Text>Rafa Ballerini</Text>
                  </CardUser>
                </Link>
                <Link to="/">
                  <CardUser image="https://github.com/marcobrunodev.png">
                    <Text>Marco Bruno</Text>
                  </CardUser>
                </Link>
                <Link to="/">
                  <CardUser image="https://github.com/felipefialho.png">
                    <Text>Felipe Fialho</Text>
                  </CardUser>
                </Link>
                <Link to="/">
                  <CardUser image="https://github.com/maykbrito.png">
                    <Text>Mayk Brito</Text>
                  </CardUser>
                </Link>

              </Grid>

            </Flex>
            <Flex p="0.5rem" bg="white" borderRadius="0.5rem" flexDir="column" mb="1rem">
              <Text mb="1rem" fontSize="lg">Minhas comunidades (6)</Text>
            </Flex>
          </Flex>
        </Flex>
        <DarkModeSwitch />
      </Flex>
    </>
  );
}
