
import css from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleAction = (formData: FormData) => {
    const searchQuery = formData.get('query') as string;

    if (!searchQuery || !searchQuery.trim()) {
      toast.error('Please enter your search query.');
      return;
    }

    onSubmit(searchQuery.trim());
  };
  return (
    <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={css.form} action={handleAction}>
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}