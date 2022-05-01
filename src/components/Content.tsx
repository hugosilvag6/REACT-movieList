import { MovieCard } from '../components/MovieCard';
import { GenreResponseProps } from '../App';
import { MovieProps } from '../App';
import '../styles/content.scss';

type Props = {
  selected: GenreResponseProps,
  movies: MovieProps[]
}

export function Content({selected, movies}: Props) {
    // Complete aqui
    return (
        <div className="container">
            <header>
                <span className="category">
                    Categoria:<span> {selected.title}</span>
                </span>
            </header>

            <main>
                <div className="movies-list">
                    {movies.map(movie => (
                        <MovieCard
                            key={movie.imdbID}
                            title={movie.Title}
                            poster={movie.Poster}
                            runtime={movie.Runtime}
                            rating={movie.Ratings[0].Value}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
