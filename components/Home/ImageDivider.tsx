import { Flex, Image, Show } from "@chakra-ui/react";

const images = [
  { image: "images/river.jpg", desc: "Dogs by the river", show: "base" },
  { image: "images/river.jpg", desc: "Dogs by the river", show: "sm" },
  { image: "images/walk.jpg", desc: "Dogs by the river", show: "md" },
  { image: "images/sleeping-dog.jpg", desc: "Dogs by the river", show: "lg" },
  {
    image: "images/small-boy-feeding-horse-farm-zoo.jpg",
    desc: "Dogs by the river",
    show: "2xl",
  },
];

export const ImageDivider = () => (
  <Flex justifyContent="start" gap="8" overflow="hidden">
    {images.map(({ image, desc, show }, index) => (
      <Show key={index} above={show}>
        <Image
          objectFit="cover"
          overflow="hidden"
          flex="1"
          src={image}
          alt={desc}
          maxH={{ base: "200px" }}
        />
      </Show>
    ))}
  </Flex>
);
