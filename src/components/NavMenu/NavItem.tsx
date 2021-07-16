import NextLink from 'next/link';
import {
  Flex, useColorMode, Image, FlexProps,
} from '@chakra-ui/react';

type NavItemProps = {
  children: FlexProps | string;
  image?: any;
  url?: string;
  hover?: string;
  color?: string[] | string;
}

export function NavItem({
  url, children, hover, color, image,
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
        color={color ?? colorMode === 'dark' ? 'gray.50' : 'blue.900'}
        _hover={{
          opacity: 0.8,
        }}
      >
        {children}
      </Flex>
    </NextLink>
  );
}
