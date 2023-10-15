import { Book } from "./getBook";
import { client } from "..";

export const getBooks = (): Promise<Book[]> => {
  return client.get(`/new`).then((res) => res.data.books);
};
