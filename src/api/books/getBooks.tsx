import { Book } from "./getBook";
import { client } from "..";

// type GetBooksParams = { limit: number; offset: number; search?: string };

// export type GetBooksSuccessResponse = {
//   count: number;
//   results: Book[];
// };

export const getBooks = (): Promise<Book[]> => {
  // const { limit, offset, search } = params;

  return client.get(`/new`).then((res) => res.data.books);
};
