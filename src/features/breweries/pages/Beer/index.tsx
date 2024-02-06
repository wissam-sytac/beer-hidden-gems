import { useEffect, useState } from "react";
import { Beer as IBeer } from "../../../../shared/types";
import { fetchData } from "./utils";
import { useParams } from "react-router-dom";
import { Layout } from "../../../../shared/components/Layout";

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), [id]);

  return (
    <Layout>
      <article>
        <section>
          <header>
            <h1>{beer?.name}</h1>
          </header>
          <main>
            <span>
              <b>Type: </b> {beer?.brewery_type}
            </span>
          </main>
        </section>
      </article>
    </Layout>
  );
};

export default Beer;
