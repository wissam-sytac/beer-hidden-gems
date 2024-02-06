import styles from "../../../../pages/Home/Home.module.css";
import { Alert, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useLazyRandomBeersQuery } from "../../redux/breweriesSlice";
import { BeerListItem } from "../../components/BeerListItem";
import { RootState, useAppDispatch } from "../../../../redux/store";
import { Beer } from "../../../../shared/types";
import {
  deleteFave,
  saveFave,
} from "../../../favorites/redux/favoritesActions";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../../../../shared/components/LoadingSpinner";

export const RandomizedBeerList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [trigger, { data, error, isLoading }] = useLazyRandomBeersQuery();
  const triggerRandomData = () => {
    trigger({ page: 1, size: 5, random: new Date().toISOString() });
  };

  useEffect(triggerRandomData, []);

  const favorites = useSelector((state: RootState) => state.favorites.data);

  const handleClickReload = (event: React.ChangeEvent<unknown>) => {
    triggerRandomData();
  };

  const handleClickExplore =
    (id: string) => (event: React.ChangeEvent<unknown>) => {
      navigate(`/beer/${id}`);
    };

  const handleClickAddToFavorites =
    (beer: Beer) => (event: React.ChangeEvent<unknown>) => {
      event.preventDefault();
      event.stopPropagation();
      const isFavorited = favorites[beer.id];
      dispatch(
        isFavorited ? deleteFave(beer.id) : saveFave(beer.id, beer.name),
      );
    };

  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeader}>
        <h3>Suggestions</h3>
        <Button
          variant="outlined"
          onClick={handleClickReload}
          startIcon={<RefreshIcon />}
        >
          Reload list
        </Button>
      </div>
      <ul className={styles.list}>
        <>
          {isLoading && <LoadingSpinner />}
          {error && (
            <Alert variant="filled" severity="error">
              error
            </Alert>
          )}
          {data?.map((beer, index) => (
            <BeerListItem
              beer={beer}
              key={beer.id}
              isFavorited={!!favorites[beer.id]}
              onClickExplore={handleClickExplore}
              onClickAddToFaves={handleClickAddToFavorites}
            />
          ))}
        </>
      </ul>
    </div>
  );
};
