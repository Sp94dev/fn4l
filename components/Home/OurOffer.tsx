import {
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { Card } from "../Card";

const offer = [
  {
    img: "/images/small-boy-feeding-horse-farm-zoo.jpg",
    name: "Dogoterapia",
    description:
      "Terapia psychologiczna dla dzieci i młodzieży z udziałem psa terapeutycznego.",
  },
  {
    img: "/images/small-boy-feeding-horse-farm-zoo.jpg",
    name: "Pies wspierający",
    description:
      "Tutaj potrzebny jest krótki tekst. Tutaj potrzebny jest krótki tekst.",
  },
  {
    img: "/images/small-boy-feeding-horse-farm-zoo.jpg",
    name: "Zajęcia rozwojowe ze zwierzętami",
    description:
      "Warsztaty rozwoju osobistego dla dorosłych. Tu zwierzęta inspirują do odkrywania siebie na nowo.",
  },
  {
    img: "/images/small-boy-feeding-horse-farm-zoo.jpg",
    name: "Trening umiejętności społecznych z udziałem zwierząt",
    description:
      "Przygoda ze zwierzętami rozwijająca umiejętności społeczne dzieci i młodzieży. Zajęcia grupowe",
  },
];

export const OurOffer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="section"
      direction="column"
      p={{ base: 5, lg: 12 }}
      gap={{ base: 7, sm: 10, lg: 28 }}
      bg={`${colorMode}.bgSecondary`}
      alignItems={{ base: "flex-start", lg: "center" }}
    >
      <Heading as="h2">Nasza Oferta</Heading>
      <Text as="p" textAlign={{ base: "start", lg: "center" }}>
        Chcemy upowszechniać animaloterapię, jako metodę wspierającą
        rehabilitację, edukację, aktywizację, działania terapeutyczne i
        psychoterapeutyczne. Jest to do dziś główny cel naszych działań.
        Prowadzimy zajęcia z udziałem zwierząt (np. dogoterapię, alpakoterapię,
        hipoterapię) kierowane m.in. do osób z niepełnosprawnościami.
      </Text>
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: 8, lg: 4 }}
      >
        {offer.map(({ img, name, description }, index) => (
          <Card key={index} img={img} name={name} description={description} />
        ))}
      </Grid>
      <Button>Dowiedz się więcej</Button>
    </Flex>
  );
};
