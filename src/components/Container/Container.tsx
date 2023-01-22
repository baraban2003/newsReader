import s from './Container.module.css';

type Props = {
  children?: String;
};

function Container({ children }: Props) {
  return <div className={s.container}>{children}</div>;
}

export default Container;
