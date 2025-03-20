import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getComicByISBNFromAPI } from "../../api-services/comics.service";
import Comic from "../../types";

const ComicDetail: React.FC = () => {
  const { ISBN } = useParams<{ ISBN: string }>();
  const [comic, setComic] = useState<Comic | null>(null);
  //const { getComicByISBNFromAPI } = useComics();
  //const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchComic = async () => {
      if (ISBN) {
        const comicData = await getComicByISBNFromAPI(ISBN);
        setComic(comicData);
      }
    };

    fetchComic();
  }, [ISBN]);

  if (!comic) {
    return (
      <div>Mmm... that ISBN... wait! We are loading or... Comic not found</div>
    );
  }

  return (
    <div className="comic-detail">
      <Link to="/comics">Back to Comics</Link>
      <h1>{comic.name}</h1>
      <img src={comic.urlImage} alt={comic.name} />
      <p>Author: {comic.author}</p>
      <p>Editorial: {comic.editorial}</p>
      <p>Genre: {comic.genre}</p>
      <p>Description: {comic.description}</p>
      <p>Price: ${comic.price}</p>
    </div>
  );
};

export default ComicDetail;
