import React from 'react';
import s from './Button.module.css';

type Props = {
  loadMore?: any;
};

export default function Button({ loadMore }: Props) {
  return (
    <div className={s.buttonCenter}>
      <button className={s.button} type="button" onClick={() => loadMore()}>
        Load more
      </button>
    </div>
  );
}