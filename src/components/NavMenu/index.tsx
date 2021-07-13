import { Flex, Text, useColorMode } from '@chakra-ui/react';

type MenuNavProps = {
  children: any;
  isActive?: boolean;
}

export default function MenuNav({ children, isActive }: MenuNavProps) {
  const { colorMode } = useColorMode();

  return (
    <Text
      m="0"
      as="a"
      fontSize="1rem"
      mx="1rem"
      fontWeight={isActive ? 'bold' : ''}
      color={colorMode === 'dark' ? 'gray.100' : 'gray.100'}
      cursor="pointer"
    >
      {children}
    </Text>
  );
}
