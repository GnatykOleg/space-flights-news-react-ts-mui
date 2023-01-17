export interface IDataToMarkup {
  imageUrl: string;
  publishedAt: string;
  title: string;
  summary: string;
  id: number;
}

export interface IDataFromBackend {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: [
    {
      id: string;
      provider: string;
    }
  ];
  events: [
    {
      id: string;
      provider: string;
    }
  ];
}

export interface IArticlesState {
  data: IDataFromBackend[];
  loading: boolean;
  error: string | null | undefined;
  filter: string;
}
