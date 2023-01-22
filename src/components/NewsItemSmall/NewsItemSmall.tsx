import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './NewsItemSmall.module.css';
import { ReactComponent as Calendar } from '../../assets/svg/calendar.svg';
import dateFormat from "dateformat";

type Props = {
  img?: string,
  title?: JSX.Element | string,
  date?: string,
  description?: JSX.Element | string,
  id?: number,
  key?: number,
  alt?: string,
}


export default function NewsItemSmall({ img, title, date, description, id, alt }: Props) {

  const location = useLocation();

  const newDate = dateFormat(date, "mmmm dS, yyyy");

  return (
    <li key={id} className={s.bebe}>
      <div className={s.imageBox}>
        <img src={img} alt={alt} className={s.image} />
      </div>
      <div className={s.bebe}>
        <Calendar />
        <p>{newDate}</p>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link
        to={{ pathname: `/${id}` }}
        state={{ from: location.pathname }}
      >
        Read more &#8594;
      </Link>
    </li>
  );
}
