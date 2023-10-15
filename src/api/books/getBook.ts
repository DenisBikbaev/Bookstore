import { client } from "..";

export interface Book {
  error: boolean;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string | number;
  isbn13: string | number;
  pages: string;
  year: string;
  rating: number;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: {};
  count: number;
}

type GetBookParams = { id: Book["isbn13"] };

type GetBookSuccessResponse = Book;

export const getBook = ({
  id,
}: GetBookParams): Promise<GetBookSuccessResponse> => {
  return client.get(`/books/${id}`).then((res) => res.data);
};
