import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

export type OfferProps = {
  img: string;
  name: string;
  description: string;
};

export const Card = ({ img, name, description }: OfferProps) => (
  <Grid
    templateColumns={{ base: "1fr", lg: "2fr 3fr" }}
    width="auto"
    gap="4"
    justifyContent="center"
    alignItems="center"
  >
    <Image objectFit="contain" src={img} alt={name} />
    <Flex direction="column" gap="2">
      <Heading size="md" as="h3">
        {name}
      </Heading>
      <Text>{description}</Text>
    </Flex>
  </Grid>
);
