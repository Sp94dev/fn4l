import { Flex } from "@chakra-ui/react";

import { AboutUs } from "../components/Home/AboutUs";
import Footer from "../components/Home/Footer";
import { ImageDivider } from "../components/Home/ImageDivider";
import { OurActions } from "../components/Home/OurActions";
import { OurOffer } from "../components/Home/OurOffer";
import { Stats } from "../components/Home/Stats";
import Layout from "../components/Layout";

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
