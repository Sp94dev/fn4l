import { Flex } from "@chakra-ui/react";

import Layout from "../components/Layout";
import { AboutUs } from "../components/sections/AboutUs";
import Footer from "../components/sections/Footer";
import { ImageDivider } from "../components/sections/ImageDivider";
import { OurActions } from "../components/sections/OurActions";
import { OurOffer } from "../components/sections/OurOffer";
import { Stats } from "../components/sections/Stats";

const IndexPage = () => (
  <Layout>
    <Flex direction="column" gap="32">
      <AboutUs />
      <OurOffer />
      <OurActions />
      <ImageDivider />
      <Stats />
      <Footer />
    </Flex>
  </Layout>
);

export default IndexPage;
