import { promises as fs } from 'fs';
import { IArticleRes } from '@/types/article';
import Article from '../../components/article';

const page = async ({ params }: Readonly<{
    params: {
        locale: string;
        id: string;
    };
}>) => {
	const { locale, id } = params;
    const file = await fs.readFile(process.cwd() + `/articles/${locale}.json`, 'utf8');
    const data: IArticleRes = JSON.parse(file);
    const article = data?.articles[Number(id)] ?? null;

	return (<>
		{ article && <Article title={article.title} description={article.description} url={article.url} />}
    </>);
};

export default page;