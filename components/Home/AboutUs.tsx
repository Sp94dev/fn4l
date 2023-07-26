import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const AboutUs = () => (
  <Flex
    as="section"
    pt="8"
    maxW="container.xl"
    alignSelf="center"
    direction={{ base: "column", md: "row" }}
    alignItems="center"
    gap={{ base: 4, lg: 8 }}
  >
    <Box flex="1" pl={{ base: "unset", lg: 0 }} alignItems="center">
      <Image
        objectFit="contain"
        src="/images/small-boy-feeding-horse-farm-zoo.jpg"
        alt="Small bou feeding gorse on farm"
      />
    </Box>
    <Flex
      flex="1"
      direction="column"
      justifyContent="space-between"
      gap={{ base: 8, lg: "unset" }}
      alignSelf="stretch"
    >
      <Heading as="h2">O nas</Heading>
      <Text as="p">
        Fundacja powstała w 2018 roku. Skąd pomysł na jej założenie? Kilka lat
        temu pracowaliśmy w jednej z wrocławskich świetlic środowiskowych, w
        której gośćmi często były pieski. Zaobserwowaliśmy tam, że obecność
        czworonogów poprawia dzieciom i młodzieży samopoczucie oraz wpływa
        pozytywnie na ich zachowanie.
      </Text>
      <Text as="p">
        Jako specjaliści (psychologowie) i właściciele zwierząt, zaczęliśmy
        zastanawiać się, jak do placówki wprowadzić psiego terapeutę. I wtedy
        zaczęła się nasza przygoda.
      </Text>
      <Box>
        <Button>Dowiedz się więcej</Button>
      </Box>
    </Flex>
  </Flex>
);
