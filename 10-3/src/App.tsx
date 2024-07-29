import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  `
    useEffect(() => {
    // api 통신
    // 방법: 1)Fetch API 기본 내장 / 2)Axios 라이브러리
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    // const data = await (await fetch("http://localhost:3000/posts")).json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
`;

  const fetchData = async () => {
    const data = await (
      await fetch("http://localhost:3000/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 3,
          title: "new title",
          view: 150,
        }),
      })
    ).json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1> App</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default App;
