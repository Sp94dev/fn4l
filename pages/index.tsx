import { Flex } from "@chakra-ui/react";

import { AboutUs } from "../components/about-us/AboutUs";
import Layout from "../components/Layout";
import { OurOffer } from "../components/our-offer/OurOffer";

const IndexPage = () => (
  <Layout>
    <Flex direction="column" gap="32">
      <AboutUs />
      <OurOffer />
    </Flex>
  </Layout>
);

export default IndexPage;
