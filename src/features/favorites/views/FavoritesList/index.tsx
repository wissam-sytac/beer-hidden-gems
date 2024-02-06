import styles from "../../../../pages/Home/Home.module.css";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../../../redux/store";
import { useLazyRandomBeersQuery } from "../../../beers/redux/breweriesSlice";
import { useSelector } from "react-redux";
import { deleteAllFaves } from "../../redux/favoritesActions";
import { selectFavoritesAsList } from "../../redux/favoritesSelectors";
import { Favorite } from "../../components/Favorite";

export const FavoritesList = () => {
  const dispatch = useAppDispatch();
  const [trigger, { data }] = useLazyRandomBeersQuery();
  const triggerRandomData = () => {
    trigger({ page: 1, size: 5, random: new Date().toISOString() });
  };

  useEffect(triggerRandomData, []);

  const savedList = useSelector(selectFavoritesAsList);

  const handleClickRemoveAll = (event: React.ChangeEvent<unknown>) => {
    dispatch(deleteAllFaves());
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeader}>
        <h3>Saved items</h3>
        <Button variant="contained" size="small" onClick={handleClickRemoveAll}>
          Remove all items
        </Button>
      </div>
      <ul className={styles.list}>
        {savedList.map((beer, index) => (
          <Favorite key={beer.brewId} id={beer.brewId} name={beer.brewName} />
        ))}
        {!savedList.length && <div>No saved items</div>}
      </ul>
    </div>
  );
};
