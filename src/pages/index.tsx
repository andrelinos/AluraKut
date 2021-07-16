import Head from 'next/head';

import {
  Flex,
  Box,
  Text,
  Image,
  Grid,
  Link,
  useColorMode,
} from '@chakra-ui/react';

import { CardUser } from '../components/CardUser';

import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Header } from '../components/Header';
import SibebarUser from '../components/SideBarUser';

export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Alurakut</title>
      </Head>

      <Flex
        w="100vw"
        h="100vh"
        flexDir="column"
        bg={colorMode === 'dark' ? 'gray.900' : 'blue.100'}
      >
        <Header />

        <Flex p="1rem" w="100%" maxW="1240px" mx="auto" flexDir={['column', 'column', 'row']}>

          <SibebarUser />

          <Flex
            flex="1"
            bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'}
            borderRadius="0.5rem"
            p="1rem"
            mx={['0rem', '0rem', '1rem']}
            mb="1rem"
          >
            <Text fontSize="3xl" fontWeight="500">Bem-vindo(a), Andrelino</Text>
          </Flex>

          <Flex w={['100%', '100%', '19.5rem']} flexDir="column">
            <Flex
              p="0.5rem"
              bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'}
              borderRadius="0.5rem"
              flexDir="column"
              mb="1rem"
            >
              <Text fontSize="lg" mb="1rem">Meus amigos (6)</Text>
              <Grid
                templateColumns={[
                  'repeat(3, 1fr)',
                  'repeat(6, 1fr)',
                  'repeat(3, 1fr)',
                ]}
                align="center"
                gap={2}
              >
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
            <Flex
              p="0.5rem"
              bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'}
              borderRadius="0.5rem"
              flexDir="column"
              mb="1rem"
            >
              <Text mb="1rem" fontSize="lg">Minhas comunidades (6)</Text>
            </Flex>
          </Flex>
        </Flex>
        <DarkModeSwitch />
      </Flex>
    </>
  );
}
