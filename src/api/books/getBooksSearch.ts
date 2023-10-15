import { Book } from "./getBook";
import { client } from "..";

export type GetBooksParams = { page?: number; search?: string };

export type GetBooksSuccessResponse = {
  books: any;
  total: string;
  page: number;
  book: Book[];
};

export const getBooksSearch = (
  params: GetBooksParams
): Promise<GetBooksSuccessResponse> => {
  const { search, page } = params;

  return client.get(`/search/${search}/${page}`).then((res) => res.data);
};
