import { Box, Image } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  altText?: string;
  size?: string;
};

const CircleImage = ({ imageUrl, altText, size }: Props) => (
  <Box
    width={size}
    height={size}
    borderRadius="full"
    overflow="hidden"
    display="inline-block"
  >
    <Image src={imageUrl} alt={altText} boxSize={size} objectFit="cover" />
  </Box>
);

export default CircleImage;
