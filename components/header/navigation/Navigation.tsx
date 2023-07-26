import { List } from "@chakra-ui/react";

import ColorModeToggle from "../ColorModeToggle";
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

const Navigation = ({ type }: Props) => {
  const desktopView = type === "desktop";

  return (
    <List
      padding={8}
      display="flex"
      alignItems={desktopView ? "center" : "start"}
      columnGap={{ base: 4, xl: 8 }}
      whiteSpace="nowrap"
      flexDirection={desktopView ? "row" : "column"}
    >
      {routes.map(({ link, text }) => (
        <NavigationItem text={text} link={link} key={link} />
      ))}
      {desktopView && <ColorModeToggle />}
    </List>
  );
};

export default Navigation;
