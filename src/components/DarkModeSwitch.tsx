import { useColorMode, Switch, Flex } from '@chakra-ui/react';
import { HiLightBulb } from 'react-icons/hi';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Flex
      position="fixed"
      top="0rem"
      right="0rem"
      w="2.5rem"
      height="2.5rem"
      justify="center"
      align="center"
      _hover={{ cursor: 'pointer', color: 'gray.200' }}
      variant="unstyled"
      onClick={toggleColorMode}
      zIndex="99"
    >
      {colorMode === 'light'
        ? <HiLightBulb size={24} />
        : <HiLightBulb size={24} />}
    </Flex>

  );
};
