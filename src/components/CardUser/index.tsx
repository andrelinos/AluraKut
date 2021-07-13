import {
  Flex, Text, Box, Button, UnorderedList, ListItem, Input, InputGroup, InputLeftAddon,
  Icon, InputLeftElement, useColorMode, Image,
} from '@chakra-ui/react';

type CardUserProps = {
  children: any;
  image: string;
}
export function CardUser({ children, image }: CardUserProps) {
  return (
    <Flex
      pos="relative"
      borderRadius="0.5rem"
      w="5rem"
      h="6rem"
      bg="gray.500"
      bgImage={`url(${image})`}
      bgClip="content-box"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      cursor="pointer"
      justify="center"
    >
      <Text
        fontSize="xs"
        h="1rem"
        color="white"
        pos="absolute"
        bottom="1"
        px="0.125rem"
        whiteSpace="nowrap"
        width="4.5rem"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {children}
      </Text>
    </Flex>
  );
}
