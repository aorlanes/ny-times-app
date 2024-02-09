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
      <div className="w-1/2 bg-black/60 text-white p-5 rounded-lg absolute z-10 bottom-6 left-6">
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
    </div>
  );
};

export default Hero;
