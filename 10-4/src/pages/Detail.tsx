import { useParams, useSearchParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("lang"));

  return (
    <>
      <h1>Detail</h1>
      <div>params using useParams: {params.id}</div>
      <div>searchParams.get("lang") using useSearchParams: {searchParams.get("lang")}</div>
    </>
  );
};

export default Detail;
