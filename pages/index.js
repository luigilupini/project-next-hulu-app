import Head from "next/head";
import MainContent from "../components/MainContent";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import requests from "../utils/requests";

export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Hulu clone</title>
      </Head>
      <Header />
      <NavBar />
      <MainContent results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  // We default if no route is selected & pushed via `NavBar.js` query param.
  // We use the `query` data in our fetch to interpolate the needed API call.
  const genre = context.query.genre;
  console.log(context.query);
  const req = await fetch(
    `https://api.themoviedb.org/3${
      /* # https://developer.mozilla.org/en-US/docs/Web/API/Response/json:
      The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON. Note that despite the method being named json(), the result is not JSON, but instead the result of taking JSON as input, and parsing it to produce a JS object. */
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: req.results,
    },
  };
}
