import Link from "next/link";

export default function ArticleCard({ article }) {
  const { title, slug, postDate, readingTime } = article.fields;

  return (
    <div className="grid grid-cols-10 gap-4 md:gap-6">
      <p className="col-start-2 md:col-start-3 col-span-2 font-light">
        {postDate}
      </p>
      <Link href={"/articles/" + slug}>
        <h4 className="cursor-pointer col-start-4 md:col-start-5 col-span-4 md:col-span-2 text-center font-medium underline">
          {title}
        </h4>
      </Link>
      <p className="col-start-8 md:col-start-7 col-span-2 text-right font-light">
        {readingTime} mins read
      </p>
    </div>
  );
}
