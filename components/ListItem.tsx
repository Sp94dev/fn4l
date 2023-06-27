import { Image } from "@chakra-ui/image";
import { Button, Flex, Text } from "@chakra-ui/react";

import { colors } from "../theme/colors";

interface ListItemProps {
  img: { src: string; alt?: string };
  title: string;
  description: string;
  ButtonText?: string;
}

const ListItem = ({ img, title, description, ButtonText }: ListItemProps) => (
  <Flex gap={6}>
    <Image w={32} h={24} alt={img.alt} src={img.src} sizes={"cover"} />
    <Flex direction="column" alignItems={"flex-start"} gap={2}>
      <Text fontSize="lg">{title}</Text>
      <Text>{description}</Text>
      <Button
        paddingY={2}
        paddingX={6}
        alignSelf={"flex-end"}
        backgroundColor={colors.accent}
        textColor={colors.black}
        _hover={{
          backgroundColor: colors.lightGrey,
        }}
      >
        {ButtonText}
      </Button>
    </Flex>
  </Flex>
);

export default ListItem;
