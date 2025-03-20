import React from "react";
import { useComics } from "../../hooks/useComics";
import ComicsList from "./ComicsList";

const ComicManager: React.FC = () => {
  const { comics, addComic, updateComic, deleteComic } = useComics();

  return (
    <div>
      <ComicsList
        comics={comics}
        onAdd={addComic}
        onUpdate={updateComic}
        onDelete={deleteComic}
      />
    </div>
  );
};

export default ComicManager;
