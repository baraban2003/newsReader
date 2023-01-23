
import s from './ResultsCounter.module.css';

type Props = {
  count?: number;
}

export default function ResultCounter({ count }: Props) {

  return (
    <p className={s.counter}>Results: {count}</p>
  );
}
