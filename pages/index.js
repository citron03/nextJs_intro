import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    // router.push(`/movies/${id}`);
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}` // url 이름 변경 as 옵션
    );
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <Link
            href={{
              pathname: `/movies/${movie.id}`,
              query: {
                title: movie.original_title,
              },
            }}
            as={`/movies/${movie.id}`}
          >
            <h4>{movie.original_title}</h4>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  // code run on only server side
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
