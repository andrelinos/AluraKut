import {
  Flex,
  Box,
  Text,
  Image,
  Grid,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { NavItem } from '../NavMenu/NavItem';

export default function SibebarUser() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w="11rem"
      bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'}
      borderRadius="0.5rem"
      display={['none',
        'none',
        'flex']}
      flexDir="column"
    >
      <Flex h="10rem" p="1rem" borderRadius="0.5rem">
        <Image
          mx="auto"
          w="8rem"
          h="8rem"
          borderRadius="0.5rem"
          src="https://github.com/andrelinos.png"
        />
      </Flex>
      <Flex padding="1rem" flexDir="column">
        <hr />
        <NavItem
          color="red"
          url="/"
        >
          <Text color="gray.500">
            @andrelinossilva
          </Text>
        </NavItem>
        <hr />
        <NavItem url="/">
          <Flex>
            <Image
              mr="0.5rem"
              src="/assets/home.svg"
              alt="Home"
            />
            Início
          </Flex>
        </NavItem>
        <NavItem url="/profile">
          <Flex>
            <Image
              mr="0.5rem"
              src="/assets/user.svg"
              alt="User"
            />
            Perfil
          </Flex>
        </NavItem>
        <NavItem url="/messages">
          <Flex>
            <Image mr="0.5rem" src="/assets/book.svg" alt="Messages" />
            Recados
          </Flex>
        </NavItem>
        <NavItem url="/photos">
          <Flex>
            <Image mr="0.5rem" src="/assets/camera.svg" alt="Photos" />
            Fotos
          </Flex>
        </NavItem>
        <NavItem url="/testimonial">
          <Flex>
            <Image mr="0.5rem" src="/assets/sun.svg" alt="Testimonial" />
            Depoimentos
          </Flex>
        </NavItem>
        <hr />
        <NavItem url="/github">
          <Flex>
            <Image mr="0.5rem" src="/assets/plus.svg" alt="Github Trends" />
            Github Trends
          </Flex>
        </NavItem>
        <NavItem url="/logout">
          <Flex>
            <Image mr="0.5rem" src="/assets/logout.svg" alt="Logout" />
            Sair
          </Flex>
        </NavItem>
      </Flex>

    </Flex>
  );
}
