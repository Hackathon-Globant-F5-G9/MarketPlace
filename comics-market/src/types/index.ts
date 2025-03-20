export interface Comic {
  id: string;
  ISBN: string;
  name: string;
  author: string;
  genre: string;
  price: number;
  state: boolean;
  editorial: string;
  description: string;
  ulrImage: string;
  user?: User;
}

export interface User {
  id: string;
  name: string;
  surname: string;
  username: string;
  myComics: Comic[];
  favourites: Comic[];
}
