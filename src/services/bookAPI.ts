import axios from "axios";
import { BookEndpoint } from "types";

class BookAPI {
  private readonly BASE_URL = process.env.REACT_APP_SERVICES_BOOK_API_BASE_URL;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNewBooks() {
    const params = {
      books: BookEndpoint.NEW,
    };
    const { data } = await this.API.get("", { params });
    return data;
  }
  public async getBookDetails(isbn: string) {
    const params = {
      books: BookEndpoint.BOOKS,
      isbn: isbn,
    };
    const { data } = await this.API.get("", { params });
    return data;
  }
  public async getBooksBySearch(query: string, page: number = 1) {
    const params = {
      search: BookEndpoint.SEARCH,
      query: query,
      page: page,
    };
    const { data } = await this.API.get("", { params });
    return data;
  }
}

export const bookAPI = new BookAPI();
