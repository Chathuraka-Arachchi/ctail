import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { cocktailItem } from "../../interfaces/cocktails";
import { RootState } from "../../store/store";
import { fetchCocktails, fetchCocktailsList } from "../../store/cocktailSlice";
import { CocktailList } from "../molecules/index";

// const useStyles = createStyles(() => ({
//   tHead: {
//     marginTop: 0,
//     textAlign: "center",
//     color: `${colors.blue} !important`,
//   },
// }));

export function Cocktails() {
  const dispatch = useDispatch<any>();
  const list: cocktailItem[] = useSelector(
    (state: RootState) => state.cocktailReducer.cocktailList,
  );
  const listStatus: string = useSelector(
    (state: RootState) => state.cocktailReducer.status,
  );

  useEffect(() => {
    if (listStatus === "idle") {
      dispatch(fetchCocktails());
    }
  }, [listStatus, dispatch]);

  return (
    <>
      <CocktailList items={list} />
      <Button
        onClick={() => {
          dispatch(fetchCocktailsList());
        }}
      >
        View more...
      </Button>
    </>
  );
}
