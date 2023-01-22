import React, { useEffect, useState } from 'react';
import s from './NewsItemList.module.css';
import * as newsApi from '../../services/newsApi';
import NewsItemSmall from '../NewsItemSmall';
import SearchForm from '../SearchForm';
import Highlighter from "react-highlight-words";
import ResultCounter from '../ResultsCounter';
import Button from '../Button';

export default function NewsItemList() {
  const [news, setNews] = useState([]);
  const [num, setNum] = useState(18);
  const [filter, setFilter] = useState("");



  const handleMoviesSubmit = (news: React.SetStateAction<string>) => {
    setFilter(news);
  };

  useEffect(() => {
    newsApi.fetchNews(num).then(setNews);
  }, [num]);

  const filterData = (article: {
    summary: string; title: string
  }) => {
    if (filter.length > 0 && filter !== "") {
      return filter.split(" ").some((keyword) => {
        return (
          article.title.toUpperCase().indexOf(keyword.toUpperCase()) > 0 || article.summary.toUpperCase().indexOf(keyword.toUpperCase()) > 0
        )
      });
    }
    return true;
  };

  const loadMore = () => setNum(num => num + 18);


  const hightLightText = (title: string) => {
    return (
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={filter.split(" ")}
        autoEscape={true}
        textToHighlight={title}
      />
    );
  };

  return (
    <div>
      <SearchForm
        handleMoviesSubmit={handleMoviesSubmit}
      />

      <ResultCounter
        count={news.filter(filterData).length}
      />

      <ul>
        {news.filter(filterData).map((e: { id: number, title: string, imageUrl: string, updatedAt: string, summary: string }) => (
          <div key={e.id}>
            <NewsItemSmall
              key={e.id}
              id={e.id}
              img={e.imageUrl}
              date={e.updatedAt}
              title={hightLightText(e.title)}
              description={hightLightText(e.summary)}
              alt={e.title}
            />
          </div>
        ))}


      </ul>
      {news.length !== 0 && (
        <Button loadMore={loadMore} />
      )}

    </div>
  );
}
