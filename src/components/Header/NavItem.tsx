import NextLink from 'next/link';
import { Flex, useColorMode, Image } from '@chakra-ui/react';

type NavItemProps = {
  children: any;
  image: any;
  url: string;
  hover?: string;
  color?: string;
}

export function NavItem({
  url, children, hover, color, image, ...rest
}: NavItemProps) {
  const { colorMode } = useColorMode();

  return (
    <NextLink href={url} passHref>
      <Flex
        h="auto"
        aria-label="Home"
        as="a"
        fontWeight="normal"
        mr="1rem"
        flexDir="row"
        color={colorMode === 'dark' ? 'gray.50' : 'gray.100'}
        _hover={{
          color: colorMode === 'dark' ? 'gray.300' : 'gray.300',
        }}
      >
        {children}
      </Flex>
    </NextLink>
  );
}
