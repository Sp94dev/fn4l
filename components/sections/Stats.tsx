import { Flex, Text } from "@chakra-ui/react";

import { Counter } from "../Counter";

const statistics = [
  {
    text: "przeprowadzonych warsztatów od początku naszej działalności",
    amount: "25+",
  },
  { text: "uczestników zajęć rozwojowych do tej pory", amount: "40+" },
  {
    text: "zwierząt otwartych na kontakt z człowiekiem w celach terapeutycznych",
    amount: "12",
  },
  {
    text: "organizacji oraz firm wspólpracujących z nami na stałe",
    amount: "8",
  },
  { text: "lat działalności", amount: "2022+" },
];

export const Stats = () => (
  <Flex
    justifyContent="center"
    maxW="container.xl"
    alignSelf="center"
    pb="200px"
  >
    <Flex justifyContent="center" flexWrap="wrap" gap="5">
      {statistics.map(({ text, amount }, index) => (
        <Flex
          direction="column"
          justifyContent="space-evenly"
          px="5"
          py="8"
          alignItems="center"
          textAlign="center"
          key={index}
          maxH={{ base: "240px", lg: "270px" }}
          maxW={{ base: "320px", lg: "360px" }}
          w="full"
          h="full"
          bg="white"
          boxShadow="0px 0px 20px 0 #D5E4CD"
        >
          <Text
            fontSize="7xl"
            fontFamily="Open Sans Condensed"
            fontWeight="bold"
            color="textSecondary"
          >
            <Counter from={0} to={amount} />+
          </Text>
          <Text color="textSecondary">{text}</Text>
        </Flex>
      ))}
    </Flex>
  </Flex>
);
