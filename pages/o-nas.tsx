import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

import Layout from "../components/layout/Layout";
import styles from "./index.module.css";

const IndexPage = () => (
  <Layout>
    <Flex as="section" flexDirection={"column"} alignItems={"center"}>
      <Image
        className={styles.image}
        priority
        width="250"
        height="315"
        alt="Wesoły pies"
        src="/images/standing-dog-1.png"
        sizes="contain"
      />
      <Heading className={styles.title} alignSelf={"flex-start"} mb={4}>
        Kim jesteśmy?
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non augue
        quis enim lobortis ultrices. Aenean tempor mollis massa eget fringilla.
        Duis cursus elit eget pretium dignissim.{" "}
      </p>
    </Flex>
  </Layout>
);

export default IndexPage;
