import { Beer, SORT, TYPE } from "../../../../shared/types";
import { List } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useListBeersQuery } from "../../redux/breweriesSlice";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFave, saveFave } from "../../../favorites/redux/favoritesSlice";
import {
  AppDispatch,
  RootState,
  useAppDispatch,
} from "../../../../redux/store";
import { Layout } from "../../../../shared/components/Layout";
import { BeerListItem } from "../../components/BeerListItem";

const BeerList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [filterSort, setFilterSort] = useState<SORT>("asc");
  const [filterType, setFilterType] = useState<TYPE>("micro");

  const {
    data: beers,
    error,
    isLoading,
  } = useListBeersQuery({
    page: currentPage,
    sort: filterSort,
    by_type: filterType,
    per_page: 10,
  });

  const favorites = useSelector((state: RootState) => state.favorites.data);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleClick = (beer: Beer) => (event: React.ChangeEvent<unknown>) => {
    event.preventDefault();
    event.stopPropagation();
    const isFavorited = favorites[beer.id];
    dispatch(isFavorited ? deleteFave(beer.id) : saveFave(beer.id, beer.name));
  };

  const handleClickExplore =
    (id: string) => (event: React.ChangeEvent<unknown>) => {
      navigate(`/beer/${id}`);
    };

  const handleChangeSort = (event: SelectChangeEvent) => {
    setFilterSort(event.target.value as SORT);
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    setFilterType(event.target.value as TYPE);
  };

  return (
    <Layout>
      <article>
        <section>
          <header>
            <h1>Breweries</h1>
          </header>
          <main>
            <Box sx={{ minWidth: 200 }}>
              <FormControl>
                <InputLabel id="select-sort-label">Sort</InputLabel>
                <Select
                  labelId=""
                  id="select-sort"
                  value={filterSort}
                  label="sort"
                  onChange={handleChangeSort}
                >
                  <MenuItem value={"asc"}>asc</MenuItem>
                  <MenuItem value={"desc"}>desc</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId=""
                  id="select-type"
                  value={filterType}
                  label="type"
                  onChange={handleChangeType}
                >
                  <MenuItem value={"micro"}>micro</MenuItem>
                  <MenuItem value={"nano"}>nano</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {beers?.data.map((beer) => (
                <BeerListItem
                  key={beer.id}
                  beer={beer}
                  isFavorited={!!favorites[beer.id]}
                  onClickExplore={handleClickExplore}
                  onClickAddToFaves={handleClick}
                />
              ))}
            </List>
            <Pagination
              count={beers?.total_pages}
              page={currentPage}
              onChange={handleChange}
            />
          </main>
        </section>
      </article>
    </Layout>
  );
};

export default BeerList;
