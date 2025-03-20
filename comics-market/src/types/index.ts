export default interface Comic {
  id: string;
  ISBN: string;
  name: string;
  author: string;
  genre: string;
  price: number;
  state: boolean;
  editorial: string;
  description: string;
  urlImage: string;
}

export default interface User {
  id: string;
  name: string;
  surname: string;
  username: string;
  myComics: Comic[];
  favourites: Comic[];
}
