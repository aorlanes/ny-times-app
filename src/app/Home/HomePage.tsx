"use client";
import {
  Card,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Hero from "./Hero";
import useGetArticles from "../../hooks/useGetArticles";
import useGetHeroArticle from "../../hooks/useGetHeroArticle";
import theme from "../../theme";
import Carousel from "../components/Carousel";
import ArticleCard from "../components/ArticleCard";
import Container from "../components/Container";
import ErrorAlert from "../components/ErrorAlert";

const HomePage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.down("lg"));

  const {
    articles,
    error: errorArticles,
    loading: loadingArticles,
  } = useGetArticles();
  const {
    article,
    error: errorHeroArticle,
    loading: loadingHeroArticle,
  } = useGetHeroArticle();

  const alertOpen =
    ((!loadingArticles && errorArticles) ||
      (!loadingHeroArticle && errorHeroArticle)) ??
    false;

  const articleCards = articles
    ? articles.map((article, index) => {
        return <ArticleCard key={index} article={article} />;
      })
    : [];

  const loadingCards = [...Array(10)].map((_, index) => {
    return (
      <Card className="h-[300px] w-[260px] flex justify-center items-center bg-black/10 m-[9px]">
        <CircularProgress color="inherit" className="text-black" key={index} />
      </Card>
    );
  });

  return (
    <div className="relative">
      <ErrorAlert open={alertOpen} />
      {article && <Hero article={article} loading={loadingHeroArticle} />}
      <Container>
        <Typography
          variant="h5"
          component="h2"
          className="flex justify-center pb-3"
        >
          Related Articles
        </Typography>
        {articleCards.length > 0 || loadingArticles ? (
          <Carousel
            items={loadingArticles ? loadingCards : articleCards}
            displayCount={isTablet ? 1 : isDesktop ? 2 : 3}
            slideByCount={isTablet ? 1 : isDesktop ? 2 : 3}
          />
        ) : (
          <Card className="h-[100px] w-[260px] flex justify-center items-center bg-black/10">
            No related articles
          </Card>
        )}
      </Container>
    </div>
  );
};

export default HomePage;
