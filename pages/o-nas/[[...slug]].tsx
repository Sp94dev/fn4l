import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Layout from "../../components/layout/Layout";
import Person from "../../components/o-nas/person";
import { fakeData } from "./exampleData";

type PersonProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const findCurrentPerson = (
  slug: string | string[],
  peopleArray: PersonProps[]
) => {
  if (
    slug &&
    (typeof slug === "string" || (Array.isArray(slug) && slug.length === 1))
  ) {
    const title = typeof slug === "string" ? slug : slug[0];
    const currentPerson = peopleArray.find((person) => person.title === title);
    return currentPerson;
  } else return null;
};

const IndexPage = () => {
  const router = useRouter();
  const currentPerson: PersonProps | null = findCurrentPerson(
    router.query.slug,
    fakeData
  );

  return (
    <Layout>
      <Heading alignSelf={"flex-start"} mb={4} my="30px">
        Kim jesteśmy?
      </Heading>
      <Flex
        as="section"
        flexDirection="row"
        alignItems={currentPerson ? "flex-start" : "center"}
        justifyContent={currentPerson ? "flex-start" : "center"}
        wrap="wrap"
        gap={currentPerson ? "30px" : "50px"}
      >
        {fakeData.map((person, index) => {
          const current = person.title === currentPerson?.title;
          return (
            <Link key={index} href={router.asPath + "/" + person.title}>
              <Person
                imageUrl={person.imageUrl}
                title={person.title}
                description={person.description}
                size={!current && "60px"}
                hideTitle={currentPerson !== null}
              />
            </Link>
          );
        })}
      </Flex>

      {currentPerson && (
        <Flex flexDir={"column"} gap={"50px"} my={"50px"}>
          <Heading h={2}>{currentPerson.title}</Heading>
          <Text>{currentPerson.description}</Text>
        </Flex>
      )}
    </Layout>
  );
};

export default IndexPage;
