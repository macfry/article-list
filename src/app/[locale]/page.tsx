import { promises as fs } from 'fs';
import Article from "./components/article";
import { IArticleRes } from '@/types/article';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Link from 'next/link';

// for real development
const getArticles = async (locale: string) => {
	const client = new ApolloClient({
		uri: 'https://api-sa-east-1.hygraph.com/v2/clt1kvvhp000008jt7siz2lui/master',
		cache: new InMemoryCache(),
	});

	const data = await client.query({
		query: gql`
			query PostsQuery {
				posts(locales: [${locale}]) {
					id
					title
					slug
					excerpt
				}
			}
		`,
	});

	return data.data.posts;
};

const page = async ({ params }: Readonly<{
    params: {
        locale: string;
    };
}>) => {
    const { locale } = params;
    const file = await fs.readFile(process.cwd() + `/articles/${locale}.json`, 'utf8');
    debugger;
    const data: IArticleRes = JSON.parse(file);

    return (<>
        {data.articles.map(({ id, title, description }) => <Link href={`/${locale}/article/${id}`} key={id}>
            <div className="bg-gray-300 p-6 rounded">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>{description}</p>
            </div>
		</Link>)}
    </>);
};

export default page;
