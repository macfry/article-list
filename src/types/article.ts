export interface IArticle {
    id: number;
    author: string;
    title: string;
    description: string;
    url: string;
}

export interface IArticleRes {
    articles: IArticle[];
}