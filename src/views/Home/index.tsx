import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Checkbox, Paper, TextField, Link } from "@mui/material";
import styles from "./Home.module.css";
import { useLazyRandomBeersQuery } from "../../features/breweries/redux/breweriesSlice";
import {
  deleteAllFaves,
  favoritesAsAList,
} from "../../features/favorites/redux/favoritesSlice";
import { Layout } from "../../shared/components/Layout";
import { useAppDispatch } from "../../redux/store";

const Home = () => {
  const dispatch = useAppDispatch();
  const [trigger, { data }] = useLazyRandomBeersQuery();
  const triggerRandomData = () => {
    trigger({ page: 1, size: 5, random: new Date().toISOString() });
  };

  useEffect(triggerRandomData, []);

  const savedList = useSelector(favoritesAsAList);

  const handleClickReload = (event: React.ChangeEvent<unknown>) => {
    triggerRandomData();
  };

  const handleClickRemoveAll = (event: React.ChangeEvent<unknown>) => {
    dispatch(deleteAllFaves());
  };

  return (
    <Layout>
      <article>
        <section>
          <main>
            <Paper>
              <div className={styles.listContainer}>
                <div className={styles.listHeader}>
                  <Button variant="contained" onClick={handleClickReload}>
                    Reload list
                  </Button>
                </div>
                <ul className={styles.list}>
                  {data?.map((beer, index) => (
                    <li key={index.toString()}>
                      <Checkbox />
                      <Link component={RouterLink} to={`/beer/${beer.id}`}>
                        {beer.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Paper>

            <Paper>
              <div className={styles.listContainer}>
                <div className={styles.listHeader}>
                  <h3>Saved items</h3>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleClickRemoveAll}
                  >
                    Remove all items
                  </Button>
                </div>
                <ul className={styles.list}>
                  {savedList.map((beer, index) => (
                    <li key={index.toString()}>
                      <Checkbox />
                      <Link component={RouterLink} to={`/beer/${beer.brewId}`}>
                        {beer.brewName}
                      </Link>
                    </li>
                  ))}
                  {!savedList.length && <p>No saved items</p>}
                </ul>
              </div>
            </Paper>
          </main>
        </section>
      </article>
    </Layout>
  );
};

export default Home;
