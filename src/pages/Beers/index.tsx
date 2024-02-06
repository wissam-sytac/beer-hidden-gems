import React from "react";
import { Layout } from "../../shared/components/Layout";
import BeerList from "../../features/beers/views/BeerList";

const Beers = () => {
  return (
    <Layout>
      <article>
        <section>
          <header>
            <h1>Breweries</h1>
          </header>
          <main>
            <BeerList />
          </main>
        </section>
      </article>
    </Layout>
  );
};

export default Beers;
