import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

export const getStaticProps = async function () {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
