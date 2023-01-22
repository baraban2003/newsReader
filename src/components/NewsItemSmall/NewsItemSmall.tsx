import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './NewsItemSmall.module.css';
import { ReactComponent as Calendar } from '../../assets/svg/calendar.svg';
import dateFormat, { masks } from "dateformat";

type Props = {
  img?: string,
  title?: string,
  date?: string,
  description?: string,
  id?: number,
}


export default function NewsItemSmall({ img, title, date, description, id }: Props) {

  const location = useLocation();

  const newDate = dateFormat(date, "mmmm dS, yyyy");

  return (
    <li key={id} className={s.bebe}>
      <img src={img} alt={title} className={s.image} />
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
