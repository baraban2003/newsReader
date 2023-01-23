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
    <div className={s.largeBlock}>
      <div className={s.imageBox}>
        <img className={s.img} src={news?.imageUrl} alt={news?.title} />
      </div>
      <div className={s.textBlock}>
        <div className={s.textBlockSettings}>
          <h1 className={s.title} >{news?.title}</h1>
          <p className={s.text} >{news?.summary}</p>
        </div>
      </div>
      <Link className={s.link} to={'/'}>
        &#8592; Back to homepage
      </Link>
    </div>

  );
}