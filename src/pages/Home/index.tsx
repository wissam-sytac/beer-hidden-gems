import React from "react";
import { Paper } from "@mui/material";
import { Layout } from "../../shared/components/Layout";
import { FavoritesList } from "../../features/favorites/views/FavoritesList";
import { RandomizedBeerList } from "../../features/beers/views/BeerList/random";

const Home = () => {
  return (
    <Layout>
      <article>
        <section>
          <main>
            <Paper>
              <RandomizedBeerList />
            </Paper>

            <Paper>
              <FavoritesList />
            </Paper>
          </main>
        </section>
      </article>
    </Layout>
  );
};

export default Home;
