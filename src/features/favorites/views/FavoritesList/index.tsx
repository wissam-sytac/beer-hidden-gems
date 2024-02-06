import styles from "../../../../pages/Home/Home.module.css";
import { Button, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../redux/store";
import { useLazyRandomBeersQuery } from "../../../beers/redux/breweriesSlice";
import { useSelector } from "react-redux";
import { deleteAllFaves, deleteFavesByIds } from "../../redux/favoritesActions";
import { selectFavoritesAsList } from "../../redux/favoritesSelectors";
import { Favorite } from "../../components/Favorite";

export const FavoritesList = () => {
  const dispatch = useAppDispatch();
  const [trigger, { data }] = useLazyRandomBeersQuery();
  const [selected, setSelected] = useState<string[]>([]);

  const triggerRandomData = () => {
    trigger({ page: 1, size: 5, random: new Date().toISOString() });
  };

  useEffect(triggerRandomData, []);

  const savedList = useSelector(selectFavoritesAsList);

  const handleClickRemoveAll = (event: React.ChangeEvent<unknown>) => {
    dispatch(deleteAllFaves());
  };

  const handleChange =
    (brewId: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const set = new Set(selected);
      if (set.has(brewId)) {
        set.delete(brewId);
      } else {
        set.add(brewId);
      }
      setSelected(Array.from(set));
    };

  const handleRemoveSelected = (event: React.ChangeEvent<unknown>) => {
    dispatch(deleteFavesByIds(selected));
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeader}>
        <h3>Saved items</h3>
        {!!selected.length && (
          <Button
            variant="contained"
            onClick={handleRemoveSelected}
            startIcon={<DeleteIcon />}
          >
            remove selected
          </Button>
        )}
        <Button
          variant="outlined"
          onClick={handleClickRemoveAll}
          startIcon={<DeleteIcon />}
        >
          Remove all
        </Button>
      </div>
      <ul className={styles.list}>
        {savedList.map((beer, index) => (
          <li key={beer.brewId}>
            <Checkbox
              onChange={handleChange(beer.brewId)}
              checked={!!selected.find((id) => id === beer.brewId)}
            />
            <Favorite key={beer.brewId} id={beer.brewId} name={beer.brewName} />
          </li>
        ))}
        {!savedList.length && <div>No saved items</div>}
      </ul>
    </div>
  );
};
