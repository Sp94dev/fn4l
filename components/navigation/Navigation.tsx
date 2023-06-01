import { List } from "@chakra-ui/react";

import NavigationItem from "./NaviationItem";

interface Props {
  type: "mobile" | "desktop";
}

const routes: { link: string; text: string }[] = [
  { link: "/", text: "Kim Jesteśmy" },
  { link: "/o-nas", text: "O nas" },
  { link: "/aktualności", text: "Aktualności" },
  { link: "/dzialania", text: "Działania" },
  { link: "/oferta", text: "Oferta" },
];

const Navigation = ({ type }: Props) => (
  <List
    display="flex"
    gap={3}
    whiteSpace={"nowrap"}
    sx={
      type === "mobile"
        ? { flexDirection: "column" }
        : {
            flexDirection: "row",
            padding: "8px 0",
            fontSize: "18px",
          }
    }
  >
    {routes.map(({ link, text }) => (
      <NavigationItem
        text={text}
        link={link}
        key={link}
        mobile={type === "mobile"}
      />
    ))}
  </List>
);

export default Navigation;
