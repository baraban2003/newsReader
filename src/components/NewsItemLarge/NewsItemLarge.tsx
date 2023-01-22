import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './NewsItemSmall.module.css';

type Props = {
  img?: string,
  title?: string,
  date?: string,
  description?: string,
  id?: number,
}


export default function NewsItemLarge() {

  const location = useLocation();

  return (
    <>
      <h1>Hi</h1></>

  );
}
