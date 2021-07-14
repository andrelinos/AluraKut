import NextLink from 'next/link';
import { Button, useColorMode } from '@chakra-ui/react';

type NavItemProps = {
  children: string;
  url: string;
  hover?: string;
  color?: string;
}

export function NavItemMob({
  url, children, hover, color,
}: NavItemProps) {
  const { colorMode } = useColorMode();

  return (
    <NextLink href={url} passHref>
      <Button
        h="auto"
        aria-label="Home"
        as="a"
        variant="unstyled"
        fontWeight="normal"
        fontSize="1.2rem"
        mr="1rem"
        my="0.215rem"
        color={colorMode === 'dark' ? 'blu.700' : 'blue.900'}
        _hover={{
          color: colorMode === 'dark' ? 'gray.300' : 'gray.300',
        }}
      >
        {children}
      </Button>
    </NextLink>
  );
}
