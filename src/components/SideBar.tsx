import { Button } from '../components/Button';
import { GenreResponseProps } from '../App';
import { MovieProps } from '../App';
import '../styles/sidebar.scss';

type Props = {
  genres: GenreResponseProps[],
  selectedGenreId: number,
  changeId: (id: number) => void
}

export function SideBar({genres, selectedGenreId, changeId}: Props) {
    // Complete aqui
    return (
        <nav className="sidebar">
            <span>
                Watch<p>Me</p>
            </span>

            <div className="buttons-container">
                {genres.map((genre) => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => changeId(genre.id)}
                        selected={selectedGenreId === genre.id}
                    />
                ))}
            </div>
        </nav>
    );
}
