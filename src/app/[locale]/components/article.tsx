import Image from 'next/image';

const Article = ({ title, description, url, }: Readonly<{
    title: string;
    description: string;
    url: string;
}>) => {
	return (
		<div className="py-10 w-3/4 mx-auto">
			<h2 className="text-3xl pb-10 font-bold">{title}</h2>

			<div>
				<div className="">
					<Image
						src={url}
						width={200}
						height={200}
						style={{
							objectFit: 'cover',
							height: '300px',
							width: '100%',
						}}
						sizes="(max-width: 768px) 100vw, 33vw"
						alt=""
						className="rounded"
					/>
				</div>

				<div className="pt-10">
					<div
						dangerouslySetInnerHTML={{
							__html: description
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Article;