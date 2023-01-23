
import s from './SearchForm.module.css';

type Props = {
  handleMoviesSubmit?: any;
}

export default function SearchForm({ handleMoviesSubmit }: Props) {

  const handleSearchRequest = (event: { preventDefault: () => void; currentTarget: { value: string; }; }) => {
    event.preventDefault();
    handleMoviesSubmit(event.currentTarget.value);
  };

  return (
    <>
      <p className={s.filter}>Filter by keywords</p>
      <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Filter news"
        onChange={handleSearchRequest} />
    </>

  );
}
