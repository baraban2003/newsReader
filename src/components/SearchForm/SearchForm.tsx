import InputUnstyled from '@mui/base/InputUnstyled';
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

    <InputUnstyled
      className={s.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search news"
      /* value={news} */
      onChange={handleSearchRequest}
    />

  );
}
