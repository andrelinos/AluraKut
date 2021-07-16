import { useState } from 'react';

import {
  useColorMode,
  Box,
  Input,
  Icon,
  Flex,
  Text,
  Image,
  IconButton,
  InputGroup,
  InputLeftElement,

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiLightBulb } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';

import { NavItem } from '../NavMenu/NavItem';

export function Header() {
  const { colorMode } = useColorMode();
  const [display, changeDisplay] = useState('none');

  return (
    <>
      <Flex
        w="100vw"
        h="3rem"
        minH="3rem"
        bg={colorMode === 'dark' ? 'blue.900' : 'blue.500'}
        align="center"
        px="1rem"
      >
        <Flex
          mx="auto"
          w="1100px"
          h="100%"
          px="1rem"
          justify="space-between"
          align="center"
          display={['flex']}
        >
          <Flex align="center">
            <Flex
              mr="1rem"
              align="center"
              py="0.7rem"
              px="1.5rem"
              borderRadius="1.625rem"
              bg="white"
            >
              <Image w="3rem" minW="60px" src="/assets/logo.svg" />
            </Flex>

            <Flex
              display={['none', 'none', 'flex', 'flex']}
              justify="flex-start"
              align="center"
            >
              <NavItem color="red" url="/">Início</NavItem>
              <Box cursor="pointer" mr="1rem" color="gray.50" url="/profile">Perfil</Box>
              <Box cursor="pointer" mr="1rem" color="gray.50" url="/messages">Recados</Box>
              <Box cursor="pointer" mr="1rem" color="gray.50" url="/friends">Amigos</Box>
              <Box cursor="pointer" color="gray.50" url="/communities">Comunidades</Box>
            </Flex>
          </Flex>
          <Flex h="100%" align="center" display={['none', 'none', 'flex']}>
            <Text
              color={colorMode === 'dark' ? 'gray.100' : 'gray.100'}
              flexWrap="nowrap"
            />
            <Box
              mx="1rem"
              variant="unstyled"
              size="sm"
              color={colorMode === 'dark' ? 'gray.100' : 'gray.100'}
              cursor="pointer"
            >
              Sair
            </Box>
            <InputGroup display={['none', 'flex']}>
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={<Icon as={FaSearch} color="gray.100" />}
              />
              <Input
                h="2.15rem"
                type="text"
                border="none"
                bg="blue.700"
                color="white"
                borderRadius="2rem"
                placeholder="Pesquisar no Alurakut"
                _placeholder={{
                  fontSize: '0.8rem',
                  color: 'gray.100',
                }}

              />
            </InputGroup>
          </Flex>

          <IconButton
            aria-label="Abrir"
            size="md"
            mr={2}
            color={colorMode === 'light' ? 'gray.900' : 'gray.100'}
            icon={
              <HamburgerIcon />
          }
            onClick={() => changeDisplay('flex')}
            display={['flex', 'flex', 'none', 'none']}
          />

        </Flex>

      </Flex>

      <Flex
        w="100vw"
        display={display}
        bg={colorMode === 'light' ? 'gray.300' : 'gray.800'}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={4}
            mr={8}
            aria-label="Fechar menu"
            size="lg"
            borderRadius="0.5rem"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex flexDir="column" align="left" justify="center">
          <Flex justify="center">
            <Image
              w="10rem"
              h="10rem"
              mb="1rem"
              bg="blue.900"
              p="0.313rem"
              borderRadius="50%"
              src="https://github.com/andrelinos.png"
            />
          </Flex>

          <Flex
            w="100%"
            maxW="25rem"
            mt="1rem"
            mx="auto"
            px="1rem"
            flexDir="column"
            justify="flex-start"
            align="left"
            textAlign="left"

          >
            <hr />
            <NavItem url="/"><Text fontSize="1rem" color="gray.500">@andrelinossilva</Text></NavItem>
            <hr />
            <NavItem url="/">
              <Flex><Image mr="0.5rem" src="/assets/home.svg" alt="Home" /> Início</Flex>
            </NavItem>
            <NavItem url="/profile">
              <Flex><Image mr="0.5rem" src="/assets/user.svg" alt="User" /> Perfil</Flex>
            </NavItem>
            <NavItem url="/messages">
              <Flex><Image mr="0.5rem" src="/assets/book.svg" alt="Messages" /> Recados</Flex>
            </NavItem>
            <NavItem url="/photos">
              <Flex><Image mr="0.5rem" src="/assets/camera.svg" alt="Photos" /> Fotos</Flex>
            </NavItem>
            <NavItem url="/testimonial">
              <Flex><Image mr="0.5rem" src="/assets/sun.svg" alt="Testimonial" /> Depoimentos</Flex>
            </NavItem>
            <hr />
            <NavItem url="/github">
              <Flex><Image mr="0.5rem" src="/assets/plus.svg" alt="Github Trends" />Github Trends</Flex>
            </NavItem>
            <NavItem url="/logout">
              <Flex><Image mr="0.5rem" src="/assets/logout.svg" alt="Logout" />Sair</Flex>
            </NavItem>

          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
