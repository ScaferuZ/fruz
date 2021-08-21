import Head from "next/head";

// let client = require("contentful").createClient({
//   space: process.env.NEXT_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
// });

// export async function getStaticProps() {
//   let data = await client.getEntries({
//     content_type: "article",
//   });

//   return {
//     props: {
//       articles: data.items,
//     },
//   };
// }
export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Fruz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-12 text-primary text-base md:text-lg">
        <div className="grid grid-cols-10 gap-4 md:gap-6">
          <p className="col-start-2 md:col-start-3 col-span-2 font-light">
            21 Aug
          </p>
          <p className="col-start-4 md:col-start-5 col-span-4 md:col-span-2 text-center font-medium underline">
            What the hell is going on?
          </p>
          <p className="col-start-8 md:col-start-7 col-span-2 text-right font-light">
            1 min read
          </p>
        </div>
      </main>
    </div>
  );
}
