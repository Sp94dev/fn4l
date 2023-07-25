import { Button, Flex, Heading, Image } from "@chakra-ui/react";

type CardTallProps = {
  img: string;
  title: string;
};

export const CardTall = ({ img, title }: CardTallProps) => (
  <Flex
    textAlign="center"
    direction="column"
    bg="bgTertiary"
    gap={{ base: 5, lg: 8 }}
    pb={{ base: "unset", lg: 4 }}
    w={{ base: "full", lg: "unset" }}
    justifyContent="space-between"
  >
    <Image src={img} alt="TODO" />
    <Heading
      as="h3"
      size="md"
      textAlign="center"
      color="textPrimary"
      px={{ base: "unset", lg: 7 }}
    >
      {title}
    </Heading>
    <Flex justifyContent={{ base: "center", lg: "end" }} p="6">
      <Button width="fit-content">Więcej</Button>
    </Flex>
  </Flex>
);
