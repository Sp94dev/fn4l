import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

import Copyright from "./Copyright";

//TODO: Replace this with Richtext from Strapi CMS
const Richtext1 = () => (
  <>
    <b>Fundacja Na Czterech Łapach</b> <br /> ul. Szewska 51 <br /> 00-000
    Wrocław
    <br />
    <br />
    <b>E-mail: </b>
    <Link type="email" href="mailto:fundacja@4lapy.pl">
      fundacja@4lapy.pl
    </Link>
    <br />
    <b>Tel: </b>
    <Link type="tel:555 555 555" href="mailto:fundacja@4lapy.pl">
      555 555 555
    </Link>
    <br />
    <br />
    <b>KRS: </b>
    0000222121 <br />
    <b>NIP: </b>2922292244
  </>
);

const Richtext2 = () => (
  <>
    Możesz dokonać darowizny na konto: <br /> BNP Paribas Bank Polska S.A.
    <br /> 22 2222 2222 2222 2222 2222 2222 <br /> Fundacja Na Czterech Łapach
    <br /> Tytułem „Darowizna na cele pozytku publicznego”
  </>
);

const SocialLinks = [
  {
    src: "/socialIcons/facebook.svg",
    alt: "facebook icon",
    href: "https://www.facebook.com/Terapeutana4lapach/",
  },
  {
    src: "/socialIcons/youtube.svg",
    alt: "facebook icon",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const Footer = () => (
  <Box>
    <Box
      as="section"
      backgroundColor="bgTertiary"
      py={7}
      px={{ base: 3, sm: 4, md: 5 }}
    >
      <Container maxWidth="container.xl">
        <Grid
          flexDir="column"
          gap={6}
          textColor="textPrimary"
          templateRows={{ md: "repeat(3, auto)", base: "auto" }}
          templateColumns={{ md: "auto", base: "1fr" }}
          gridAutoFlow={{ base: "row", md: "column" }}
        >
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Image
              width="full"
              maxWidth="380px"
              src="/logos/logo_color.svg"
              alt="Logo Fundacji na 4 Łapach"
            />
          </GridItem>
          <p>
            <Richtext1 />
          </p>
          <Flex gap={6}>
            {SocialLinks.map(({ src, alt, href }, index) => (
              <Link as={NextLink} href={href} key={index} isExternal>
                <Image alt={alt} src={src} />
              </Link>
            ))}
          </Flex>
          <Flex flexDir="column" gap={6} alignItems="flex-start">
            <p>
              <Richtext2 />
            </p>
            <Button>Wpłać</Button>
          </Flex>
        </Grid>
      </Container>
    </Box>
    <Copyright />
  </Box>
);

export default Footer;
