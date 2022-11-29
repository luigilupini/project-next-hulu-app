import Thumbnail from "./Thumbnail";

function MainContent({ results }) {
  return (
    <div>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default MainContent;
