import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Layout from "../../components/layout/Layout";
import CircleImage from "../../components/o-nas/circleImage";
import Person from "../../components/o-nas/person";
import { fakeData } from "./exampleData";

type PersonProps = {
  imageUrl: string;
  title: string;
  description: string;
};

function findPersonByTitle(
  title: string,
  people: PersonProps[]
): { foundPerson: PersonProps | null; restOfArray: PersonProps[] } {
  const foundPersonIndex = people.findIndex((person) => person.title === title);

  if (foundPersonIndex !== -1) {
    const foundPerson = people[foundPersonIndex];
    const restOfArray = [
      ...people.slice(0, foundPersonIndex),
      ...people.slice(foundPersonIndex + 1),
    ];
    return { foundPerson, restOfArray };
  }

  return { foundPerson: null, restOfArray: people };
}

const IndexPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  let foundPerson: PersonProps | null;
  let restOfArray: PersonProps[];
  if (slug) {
    if (typeof slug === "string") {
      ({ foundPerson, restOfArray } = findPersonByTitle(slug, fakeData));
    } else {
      ({ foundPerson, restOfArray } = findPersonByTitle(slug[0], fakeData));
    }
  }
  return (
    <Layout>
      <Heading alignSelf={"flex-start"} mb={4} my="30px">
        Kim jesteśmy?
      </Heading>
      {!slug ? (
        <Flex
          as="section"
          flexDirection={"row"}
          alignItems="center"
          justifyContent="center"
          wrap="wrap"
          gap="50px"
        >
          {fakeData.map((person, index) => (
            <Link key={index} href={router.asPath + "/" + person.title}>
              <Person
                imageUrl={person.imageUrl}
                title={person.title}
                description={person.description}
              />
            </Link>
          ))}
        </Flex>
      ) : foundPerson ? (
        <Flex as="section" flexDirection={"column"} gap="50px">
          <Flex flexDirection={"row"} gap="20px">
            <CircleImage imageUrl={foundPerson.imageUrl} />
            {restOfArray.map((person, index) => (
              <CircleImage key={index} imageUrl={person.imageUrl} size="60px" />
            ))}
          </Flex>
          <Heading h={2}>{foundPerson.title}</Heading>
          <Text>{foundPerson.description}</Text>
        </Flex>
      ) : (
        <Heading>Person not found</Heading>
      )}

      <p></p>
    </Layout>
  );
};

export default IndexPage;
