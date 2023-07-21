import { Flex } from "@chakra-ui/react";

import Layout from "../components/Layout";
import { AboutUs } from "../components/sections/AboutUs";
import { ImageDivider } from "../components/sections/ImageDivider";
import { OurActions } from "../components/sections/OurActions";
import { OurOffer } from "../components/sections/OurOffer";

const IndexPage = () => (
  <Layout>
    <Flex direction="column" gap="32">
      <AboutUs />
      <OurOffer />
      <OurActions />
      <ImageDivider />
    </Flex>
  </Layout>
);

export default IndexPage;
