import { Flex, Heading } from "@chakra-ui/react";

import Layout from "../components/layout/Layout";
import Person from "../components/o-nas/person";
import styles from "./index.module.css";

const IndexPage = () => (
  <Layout>
    <Heading className={styles.title} alignSelf={"flex-start"} mb={4} my="30px">
      Kim jesteśmy?
    </Heading>
    <Flex
      as="section"
      flexDirection={"row"}
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
      gap="50px"
    >
      <Person imageUrl={""} title={"Jan Kowalski"} description={""} />
      <Person imageUrl={""} title={"Jan Kowalski"} description={""} />
      <Person imageUrl={""} title={"Jan Kowalski"} description={""} />
    </Flex>
  </Layout>
);

export default IndexPage;
