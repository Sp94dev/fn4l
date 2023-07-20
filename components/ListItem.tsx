import { Image } from "@chakra-ui/image";
import { Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface ListItemProps {
  img: { src: string; alt?: string };
  title: string;
  description: string;
  button?: { text: string; href: string };
}

const ListItem = ({ img, title, description, button }: ListItemProps) => (
  <Flex gap={6}>
    <Image
      minWidth={32}
      height={24}
      alt={img.alt}
      src={img.src}
      borderRadius="base"
    />
    <Flex width="100%" direction="column" alignItems="flex-start" gap={2}>
      <Text fontSize="lg">{title}</Text>
      <Text>{description}</Text>
      {button && (
        <Link
          href={button.href}
          as={NextLink}
          paddingY={2}
          paddingX={6}
          alignSelf="flex-end"
          backgroundColor="accent"
          textColor="black"
          borderRadius="base"
          _hover={{
            backgroundColor: "colors.lightGrey",
          }}
        >
          {button.text}
        </Link>
      )}
    </Flex>
  </Flex>
);

export default ListItem;
