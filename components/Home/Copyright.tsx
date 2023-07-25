import { Box, Container, Flex, Image } from "@chakra-ui/react";

const Copyright = () => (
  <Box as="section" py={7}>
    <Container maxWidth="container.xl">
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        gap={6}
      >
        <p>
          © Copyright: Fundacja terapeuta na 4 łapach. Wszystkie prawa
          zastrzeżone.
        </p>
        <Image
          alt="Developed by OpenTech, SoftServe"
          src="/logos/OpenTechLogo.svg"
          maxWidth="270px"
        />
      </Flex>
    </Container>
  </Box>
);

export default Copyright;
