"use client";
import { Article } from "../models/Article";
import { useState, useEffect } from "react";

export default function useGetArticles() {
  const [articles, setArticles] = useState<Article[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [page, setPage] = useState(0);

  useEffect(() => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=flight&fq="news_desk.contains:("Flight","Travel")"&page=${page}&sort=newest&api-key=${process.env.NEXT_PUBLIC_NYT_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setArticles(json.response.docs);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error(error);
      });
  }, [page]);

  return { articles, loading, error, setPage };
}
