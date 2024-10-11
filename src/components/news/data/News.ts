export interface NewsResponse {
  display: number;
  items: NewsItems[];
}

export interface NewsItems {
  description: string;
  link: string;
  originallink: string;
  pubDate: string;
  title: string;
}

export const initNewsResponse = {
  display: 0,
  items: [],
};
