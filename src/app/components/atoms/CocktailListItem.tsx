import React from "react";
import { Col } from "reactstrap";
import { cocktailItem } from "../../interfaces/cocktails";

interface CocktailListItemProps {
  item: cocktailItem;
}

// const useStyles = createStyles(() => ({
//   tHead: {
//     marginTop: 0,
//     textAlign: "center",
//     color: `${colors.blue} !important`,
//   },
// }));

export function CocktailListItem({ item }: CocktailListItemProps) {
  //  const { classes } = useStyles();

  return (
    <Col tag="dd" xs={12} sm={4} md={4}>
      <img alt={item.strDrink} src={item.strDrinkThumb} />
    </Col>
  );
}
