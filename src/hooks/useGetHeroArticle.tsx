"use client";
import { Article } from "../models/Article";
import { useState, useEffect } from "react";

export default function useGetHeroArticle() {
  const [article, setArticle] = useState<Article>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=flight&fq="news_desk.contains:("Flight","Travel")"&page=0&api-key=${process.env.NEXT_PUBLIC_NYT_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setArticle(json.response.docs[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error(error);
      });
  }, []);

  return { article, loading, error };
}
