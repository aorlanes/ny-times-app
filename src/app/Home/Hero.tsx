import { Typography, Link, LinearProgress } from "@mui/material";
import { Article } from "../../models/Article";

type HeroProps = {
  loading: boolean;
  article?: Article;
};

const Hero = ({ article, loading = false }: HeroProps) => {
  const jumboImage = article?.multimedia[9];

  return loading ? (
    <div className="flex w-full">
      <LinearProgress color="inherit" className="w-full" />
    </div>
  ) : (
    <div className="relative w-full flex">
      {jumboImage && (
        <img
          src={`https://www.nytimes.com/${jumboImage.url}`}
          alt=""
          className="w-full object-cover h-[512px]"
        />
      )}
      <div
        className={`
          absolute
          z-10
          p-5
          text-white
          bg-gradient-to-b
          from-black/60
          to-transparent
          w-full
          sm:to-black/60
          sm:rounded-lg
          sm:w-1/2
          sm:bottom-6
          sm:left-6
        `}
      >
        <Typography variant="h5" component="h1" className="pb-2">
          {article?.headline.main}
        </Typography>
        <Typography variant="body2" component="h2">
          {article?.snippet}
        </Typography>
        {article?.web_url && (
          <Link
            variant="body2"
            underline="always"
            className="text-white font-bold pt-2"
            href={article?.web_url}
            target="_blank"
          >
            Read more
          </Link>
        )}
      </div>
      <div className="max-w-1/6 bg-black/40 text-white px-2 absolute z-10 bottom-0 right-0 text-end">
        <Typography variant="caption">{article?.byline.original}</Typography>
        {" • "}
        <Typography variant="caption">
          {article?.pub_date && new Date(article.pub_date).toDateString()}
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
