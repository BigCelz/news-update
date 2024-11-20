import React, { useEffect, useState } from "react";
import NewsItemComponent from "./NewsItemComponent";

const NewsBoardComponent = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a1719b1b483c49168169bc915af4b4e9`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <div>
      <h2 className="text-center mt-3 mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2> 
      <div className="row">
        {articles.map((news,index) => {
          return (
            <div className="col-12 col-4 col-lg-3 col-sm-6 col-md-6" key={index.title}>
              <NewsItemComponent
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsBoardComponent;
