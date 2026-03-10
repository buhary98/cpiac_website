import React, { useEffect, useState } from "react";
import { createClient } from "contentful";

import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* const newsPopupVariant = {
    hidden: { opacity: 0, scale: 0, rotate: 500 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  }; */

  const client = createClient({
    space: "3tvfrrjmp3fa",
    environment: "master",
    accessToken: "46iNHGr3UmpPYaEQMtn-_N3ZSqYVHat5SZEEKpgirfQ",
  });

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const groupByDate = (data) => {
    return data.reduce((acc, item) => {
      const date = formatDate(item.fields.publishedDate);
      (acc[date] = acc[date] || []).push(item);
      return acc;
    }, {});
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await client.getEntries({
          content_type: "newsArticle",
          order: "-fields.publishedDate",
        });
        setNews(response.items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [client]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching news: {error.message}</div>;

  const groupedNews = groupByDate(news);

  return (
    <section className="news-section section-padding" id="Latest News">
      <div className="container">
        <h2 className="text-center mb-4">Latest News</h2>
        {Object.keys(groupedNews).map((date) => (
          <div key={date} className="mb-4">
            <h4 className="text-dark">{date}</h4>
            <div className="list-group">
              {groupedNews[date].map((news) => (
                <div className="list-group-item news-container" key={news.sys.id}>
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <img
                        src={news.fields.image.fields.file.url}
                        className="img-thumbnail"
                        alt={news.fields.title}
                        style={{ width: "200px", height: "100%" }}
                      />
                    </div>
                    <div className="col">
                      <h5 className="mb-1">{news.fields.title}</h5>
                      <p className="mb-1">{news.fields.body}</p>
                      <button className="custom-btn mt-2 mt-lg-3">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
