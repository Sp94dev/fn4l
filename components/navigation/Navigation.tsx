import { List } from "@chakra-ui/react";

import DarkModeToggle from "../header/DarkModeToggle";
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
      display="flex"
      columnGap={4}
      whiteSpace={"nowrap"}
      flexDirection={!desktopView ? "column" : "row"}
    >
      {routes.map(({ link, text }) => (
        <NavigationItem text={text} link={link} key={link} />
      ))}
      {desktopView && <DarkModeToggle />}
    </List>
  );
};

export default Navigation;
