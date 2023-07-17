import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {

  const { data, isLoading, error } = useFetch('http://localhost:8000/blogs');
   return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <BlogList blogs={data} title="Blog Post" />
      )}
      {data && (
        <BlogList
          blogs={data.filter((item) => item.author === 'John')}
          title="Blogs by John"
        />
      )}
    </div>
  );
};

export default Home;
