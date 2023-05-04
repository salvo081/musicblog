import { Link } from 'react-router-dom/dist';
import './OneBox.css';

export default function OneBox({ artist, picture, shortBio, id }) {
  console.log(
    'Artist: ',
    artist,
    ' Id: ',
    id,
    'Picture: ',
    picture,
    'ShortBio: ',
    shortBio
  );

  return (
    <section className="articles">
      <article>
        <div className="article-wrapper">
          <figure>
            <img src={`https:${picture}`} alt={artist} />
          </figure>
          <div className="article-body">
            <h2>{artist}</h2>
            <p className="article-text">{shortBio.slice(0, 150)}...</p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to={`articles/${id}`} className="read-more">
              Read more{' '}
              <span className="sr-only">about this is some title</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
