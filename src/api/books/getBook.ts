import { client } from "..";

export interface Book {
  bookId: any;
  error: boolean;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string | number;
  isbn13: string | number;
  pages: string;
  year: string;
  rating: boolean;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: {};
  addItem: number;
  deleteItem: number;
}

type GetBookParams = { id: Book["isbn13"] };

type GetBookSuccessResponse = Book;

export const getBook = ({
  id,
}: GetBookParams): Promise<GetBookSuccessResponse> => {
  return client.get(`/books/${id}`).then((res) => res.data);
};
