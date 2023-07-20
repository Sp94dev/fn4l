import { Flex, Grid, Heading, Text } from "@chakra-ui/react";

import { CardTall } from "../CardTall";

interface Action {
  name: string;
  image: string;
}
const actions: Action[] = [
  {
    name: "Dolnośląski Ośrodek Animaloterapii",
    image: "images/alpacas-farm.png",
  },
  {
    name: "Przygoda z końmi",
    image: "images/alpacas-farm.png",
  },
  {
    name: "Zajęcia dla dzieci i młodzieży",
    image: "images/alpacas-farm.png",
  },
];

export const OurActions = () => (
  <Flex
    as="section"
    direction="column"
    gap={{ base: 4, lg: 8 }}
    alignItems={{ base: "start", lg: "center" }}
    alignSelf="center"
    maxW="container.lg"
  >
    <Heading as="h2">Nasze działania</Heading>
    <Text>
      Projekty dają nam możliwość realizacji innowacyjnych pomysłów na zajęcia z
      udziałem zwierzą. W ten sposób wspieramy rehabilitację osób
      niepełnosprawnych oraz rozwój dzieci i młodzieży. Przeczytaj o naszych
      najważniejszych działaniach.
    </Text>

    <Grid
      gap="4"
      templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
      alignSelf="center"
    >
      {actions.map(({ name, image }, index) => (
        <CardTall key={index} title={name} img={image} />
      ))}
    </Grid>
  </Flex>
);
