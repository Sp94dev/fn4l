import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";

import Layout from "../components/Layout";
import ListItem from "../components/ListItem";

const IndexPage = () => (
  <Layout>
    <Grid
      as={"section"}
      alignItems={"center"}
      columnGap={{ lg: 4 }}
      templateAreas={{
        base: `
        'img'
        'title'
        'desc'
    `,
        lg: `
          'img title'
          'img desc'  
        `,
      }}
      gridTemplateRows={{ lg: "1fr 1fr" }}
      alignContent={"center"}
    >
      <Image
        gridArea={"img"}
        width={{ base: "auto" }}
        height={{ base: "15rem", lg: "25rem" }}
        alt="Wesoły pies"
        src="/images/standing-dog-1.png"
        sizes="contain"
        justifySelf={"center"}
        my={{ base: 6 }}
      />

      <Heading
        display={"inline-flex"}
        alignSelf={"end"}
        justifySelf={{ base: "center", lg: "start" }}
        mb={4}
        pb={1}
        gridArea={"title"}
        borderBottom={"1px solid"}
        borderColor="accent"
      >
        Kim jesteśmy?
      </Heading>
      <Text gridArea={"desc"} justifySelf={"start"} alignSelf={"start"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non augue
        quis enim lobortis ultrices. Aenean tempor mollis massa eget fringilla.
        Duis cursus elit eget pretium dignissim. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam non augue quis enim lobortis
        ultrices. Aenean tempor mollis massa eget fringilla. Duis cursus elit
        eget pretium dignissim. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam non augue quis enim lobortis ultrices. Aenean
        tempor mollis massa eget fringilla. Duis cursus elit eget pretium
        dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam non augue quis enim lobortis ultrices. Aenean tempor mollis massa
        eget fringilla. Duis cursus elit eget pretium dignissim. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Etiam non augue quis enim
        lobortis ultrices. Aenean tempor mollis massa eget fringilla. Duis
        cursus elit eget pretium dignissim. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam non augue quis enim lobortis
        ultrices. Aenean tempor mollis massa eget fringilla. Duis cursus elit
        eget pretium dignissim. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam non augue quis enim lobortis ultrices. Aenean
        tempor mollis massa eget fringilla. Duis cursus elit eget pretium
        dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam non augue quis enim lobortis ultrices. Aenean tempor mollis massa
        eget fringilla. Duis cursus elit eget pretium dignissim.
      </Text>
      <Box my={20}>
        <ListItem
          img={{
            src: "https://picsum.photos/id/123/200",
          }}
          title={"Katarzyna Radzińska"}
          description={"Wiceprezes fundacji"}
          button={{
            text: "Poznaj mnie",
            href: "/o-nas",
          }}
        />
        <ListItem
          img={{
            src: "https://picsum.photos/id/132/200",
          }}
          title={"Dogoterapia"}
          description={
            "Terapia psychologiczna dla dzieci i młodzieży z udziałem psa terapeutycznego"
          }
          button={{
            text: "Czytaj więcej",
            href: "/",
          }}
        />
        <ListItem
          img={{
            src: "https://picsum.photos/id/249/200",
          }}
          title={"Forest"}
          description={
            "Uroczy pies terapeutyczny, wspaniale współpracuje z młodzieżą i dorosłymi. Kocha biegać, trenować rally-o i bawić się z innymi psiakami. Pełen słodkiego uroku i cierpliwości."
          }
        />
      </Box>
    </Grid>
  </Layout>
);

export default IndexPage;
