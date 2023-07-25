import { Flex } from "@chakra-ui/react";

import Layout from "../components/Layout";
import { AboutUs } from "../sections/AboutUs";
import Footer from "../sections/Footer";
import { ImageDivider } from "../sections/ImageDivider";
import { OurActions } from "../sections/OurActions";
import { OurOffer } from "../sections/OurOffer";
import { Stats } from "../sections/Stats";

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
