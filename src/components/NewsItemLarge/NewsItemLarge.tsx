import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as newsApi from '../../services/newsApi';
import s from './NewsItemLarge.module.css';



export default function NewsItemLarge() {
  let { id } = useParams<{ id: string }>();

  const [news, setNews] = useState<{ title: string, imageUrl: string, summary: string }>();



  useEffect(() => {
    newsApi.getNewsDetails(id).then(setNews);
  }, [id]);



  return (
    <>
      <img src={news?.imageUrl} alt={news?.title} className={s.image} />
      <h1>{news?.title}</h1>
      <p>{news?.summary}</p>
      <Link to={'/'}>
        &#8592; Back to homepage
      </Link>
    </>

  );
}