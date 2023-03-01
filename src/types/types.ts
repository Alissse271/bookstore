export enum BookEndpoint {
  NEW = "new",
  SEARCH = "search/",
  BOOKS = "books/",
}

interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}
interface IBookDetails {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: IBookFormat;
}

interface IBookFormat {
  [format: string]: string;
}

interface ISearchBooksResponse {
  error: string;
  total: string;
  page: string;
  books: IBook[];
}
interface INewBooksResponse {
  total: string;
  books: IBook[];
}

export type { IBook, IBookDetails, IBookFormat, ISearchBooksResponse, INewBooksResponse };
