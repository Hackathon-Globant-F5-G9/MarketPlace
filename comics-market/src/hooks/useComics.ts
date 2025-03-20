import { useState, useEffect } from "react";
import {
  fetchComics,
  addNewComic,
  updateApiComic,
  deleteComic,
} from "../api-services/comics.service";
import Comic from "../types";

export const useComics = () => {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    const loadComics = async () => {
      const comicsData = await fetchComics();
      setComics(comicsData);
    };

    loadComics();
  }, []);

  const addComic = async (comic: Omit<Comic, "ISBN">) => {
    const newComic = await addNewComic(comic);
    setComics([...comics, newComic]);
  };

  const updateComic = async (ISBN: string, updatedComic: Partial<Comic>) => {
    const updated = await updateApiComic(ISBN, updatedComic);
    setComics(comics.map((comic) => (comic.ISBN === ISBN ? updated : comic)));
  };

  const deleteComic = async (ISBN: string) => {
    await deleteComic(ISBN);
    setComics(comics.filter((comic) => comic.ISBN !== ISBN));
  };

  return { comics, addComic, updateComic, deleteComic };
};
