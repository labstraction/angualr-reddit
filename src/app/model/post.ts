export interface Post {
  author: string;
  title: string;
  created_utc: number;
  url: string;
  permalink: string;
  id: string;
  thumbnail: string;
  isFavourite?: boolean;
}
