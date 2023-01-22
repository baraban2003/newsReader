import React, { useEffect, useState } from 'react';
import s from './NewsItemSmall.module.css';
import * as newsApi from '../../services/newsApi';
import NewsItemSmall from '../NewsItemSmall';



export default function NewsItemList() {
  const [news, setNews] = useState([]);
  const [num, setNum] = useState(18);



  useEffect(() => {
    newsApi.fetchNews(num).then(setNews);
  }, [num]);

  return (
    <div>
      <ul>
        {news.map((e: { id: number; title: string, imageUrl: string, updatedAt: string, summary: string }) => (
          <NewsItemSmall
            id={e.id}
            img={e.imageUrl}
            title={e.title}
            date={e.updatedAt}
            description={e.summary}
          />
        ))}
      </ul>
    </div>
  );
}
