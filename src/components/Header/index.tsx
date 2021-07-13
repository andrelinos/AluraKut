/* eslint-disable react/no-children-prop */
import {
  Flex, Text, Box, Button, UnorderedList, ListItem, Input, InputGroup, InputLeftAddon,
  Icon, InputLeftElement, useColorMode, Image,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import MenuNav from '../NavMenu';

export default function Header() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w="100vw"
      h="5rem"
      bg={colorMode === 'dark' ? 'blue.900' : 'blue.500'}
      align="center"
      px="1rem"
    >
      <Flex
        mx="auto"
        w="1366px"
        h="100%"
        justify="space-between"
        align="center"
        display={['none', 'none', 'flex']}
      >
        <Flex align="center">
          <Flex mr="2rem" justify="flex-start" align="center" p="3" borderRadius="1.625rem" bg="white">
            <Image w="8rem" src="/assets/logo.svg" />
          </Flex>
          <MenuNav isActive>Início</MenuNav>
          <MenuNav>Perfil</MenuNav>
          <MenuNav>Páginas de recados</MenuNav>
          <MenuNav>Amigos</MenuNav>
          <MenuNav>Comunidades</MenuNav>
        </Flex>

        <Flex h="100%" align="center">
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
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaSearch} color="gray.100" />}
            />
            <Input
              type="text"
              border="none"
              bg="blue.800"
              color="white"
              borderRadius="2rem"
              placeholder="Pesquisar no Alurakut"
            />
          </InputGroup>
        </Flex>
      </Flex>
    </Flex>
  );
}
