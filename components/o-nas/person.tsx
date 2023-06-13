import { Box, Text } from "@chakra-ui/react";

import { colors } from "../../theme/colors";
import CircleImage from "./circleImage";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  hideTitle?: boolean;
  size?: string;
};

const Person = ({ imageUrl, title, hideTitle = false, size }: Props) => (
  <Box textAlign="center" role="group">
    <CircleImage size={size} imageUrl={imageUrl} altText={title} />

    {!hideTitle && (
      <Text
        _groupHover={{
          borderBottom: "1px",
          borderColor: colors.accent,
        }}
        mt={2}
        fontSize="lg"
        borderBottom="1px"
        borderColor="transparent"
      >
        {title}
      </Text>
    )}
  </Box>
);

export default Person;
