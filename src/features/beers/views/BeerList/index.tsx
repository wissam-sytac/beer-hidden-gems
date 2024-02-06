import { ApiParams, Beer } from "../../../../shared/types";
import { Alert, List } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useListBeersQuery } from "../../redux/breweriesSlice";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteFave,
  saveFave,
} from "../../../favorites/redux/favoritesActions";
import { RootState, useAppDispatch } from "../../../../redux/store";
import { BeerListItem } from "../../components/BeerListItem";
import { BeerFilters } from "../../components/BeerFilters";
import { LoadingSpinner } from "../../../../shared/components/LoadingSpinner";

const BeerList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [filters, setFilters] = useState<ApiParams>({
    page: 1,
    per_page: 10,
    sort: "asc",
    by_type: "micro",
  });

  const { data: beers, error, isLoading } = useListBeersQuery(filters);

  const favorites = useSelector((state: RootState) => state.favorites.data);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setFilters({
      ...filters,
      page: value,
    });
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

  const handleClickExplore =
    (id: string) => (event: React.ChangeEvent<unknown>) => {
      navigate(`/beer/${id}`);
    };

  const handleUpdateSelection = (selection: Partial<ApiParams>) => {
    setFilters({
      ...filters,
      ...selection,
    });
  };

  if (error)
    return (
      <Alert variant="filled" severity="error">
        error
      </Alert>
    );

  return (
    <>
      <Box sx={{ minWidth: 200 }}>
        <BeerFilters
          filterValues={filters}
          onUpdateSelection={handleUpdateSelection}
        />
      </Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <>
          {isLoading && <LoadingSpinner />}
          {error && (
            <Alert variant="filled" severity="error">
              error
            </Alert>
          )}
          {beers?.data.map((beer) => (
            <BeerListItem
              key={beer.id}
              beer={beer}
              isFavorited={!!favorites[beer.id]}
              onClickExplore={handleClickExplore}
              onClickAddToFaves={handleClickAddToFavorites}
            />
          ))}
        </>
      </List>
      <Pagination
        count={beers?.total_pages}
        page={filters.page}
        onChange={handleChangePage}
      />
    </>
  );
};

export default BeerList;
