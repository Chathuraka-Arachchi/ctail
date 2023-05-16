import React from "react";
import { Row } from "reactstrap";
import { cocktailItem } from "../../interfaces/cocktails";
import { CocktailListItem } from "../atoms/index";

interface CocktailListProps {
  items: cocktailItem[];
}

// const useStyles = createStyles(() => ({
//   tHead: {
//     marginTop: 0,
//     textAlign: "center",
//     color: `${colors.blue} !important`,
//   },
// }));

export function CocktailList({ items }: CocktailListProps) {
  const rows =
    items &&
    items.map((element: cocktailItem) => <CocktailListItem item={element} />);

  return <Row>{rows}</Row>;
}
