import { Grid, Heading, Image, Text } from "@chakra-ui/react";

import Layout from "../components/layout/Layout";
import ListItem from "../components/ListItem";
import styles from "./index.module.css";

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
        className={styles.image}
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
        className={styles.title}
        display={"inline-flex"}
        alignSelf={"end"}
        justifySelf={{ base: "center", lg: "start" }}
        mb={4}
        pb={1}
        gridArea={"title"}
        borderBottom={"1px solid #e4ff00"}
      >
        Kim jesteśmy?
      </Heading>
      <Text gridArea={"desc"} justifySelf={"start"} alignSelf={"start"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non augue
        quis enim lobortis ultrices. Aenean tempor mollis massa eget fringilla.
        Duis cursus elit eget pretium dignissim.{" "}
      </Text>
      <ListItem
        img={{
          src: "https://picsum.photos/id/231/200",
        }}
        title={"Luna"}
        description={
          "Przyjazny pies terapeutyczny, pełen miłości i radości. Kocha pracę z dziećmi, pływanie i zabawę w szukanie ukrytych skarbów."
        }
        ButtonText="Poznaj mnie"
      />{" "}
      <ListItem
        img={{
          src: "https://picsum.photos/id/231/200",
        }}
        title={"Luna"}
        description={
          "Przyjazny pies terapeutyczny, pełen miłości i radości. Kocha pracę z dziećmi, pływanie i zabawę w szukanie ukrytych skarbów."
        }
        ButtonText="Poznaj mnie"
      />{" "}
      <ListItem
        img={{
          src: "https://picsum.photos/id/231/200",
        }}
        title={"Luna"}
        description={
          "Przyjazny pies terapeutyczny, pełen miłości i radości. Kocha pracę z dziećmi, pływanie i zabawę w szukanie ukrytych skarbów."
        }
        ButtonText="Poznaj mnie"
      />
    </Grid>
  </Layout>
);

export default IndexPage;
