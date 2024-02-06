import { useParams } from "react-router-dom";
import { Layout } from "../../shared/components/Layout";
import { useFetchBeerByIdQuery } from "../../features/beers/redux/breweriesSlice";

const Beer = () => {
  const { id = "" } = useParams();
  const { data: beer } = useFetchBeerByIdQuery(id);

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
