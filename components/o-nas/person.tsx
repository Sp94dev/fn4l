import { Box, Image, Text } from "@chakra-ui/react";

import { colors } from "../../theme/colors";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

const Person = ({ imageUrl, title, description }: Props) => (
  <Box textAlign="center" role="group">
    <Box display="inline-block" borderRadius="full" overflow="hidden">
      <Image
        src={imageUrl}
        alt="Circle Image"
        boxSize="80px"
        objectFit="cover"
        backgroundColor={colors.accent}
      />
    </Box>
    <Text fontSize="lg" mt={2}>
      {title}
    </Text>
    <Text
      _groupHover={{ border: "1px", borderColor: colors.accent }}
      mt={2}
      border="1px"
      borderColor="transparent"
    >
      {description}
    </Text>
  </Box>
);

export default Person;
