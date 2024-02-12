import { Article } from "../../models/Article";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import noImage from "../../assets/no-image.jpeg";

type ArticleCardProps = {
  article: Article;
  onClick: (article: Article) => void;
};

const ArticleCard = ({ article, onClick }: ArticleCardProps) => {
  const cardImage = article.multimedia[0];
  return (
    <Card
      className="m-[9px] h-[300px]"
      onClick={() => onClick(article)}
      data-testid="article-card"
    >
      <CardActionArea className="min-w-[260px] max-w-[260px] flex flex-col justify-start h-full">
        <CardMedia
          sx={{ height: 140 }}
          component="img"
          image={
            cardImage?.url
              ? `https://www.nytimes.com/${cardImage.url}`
              : noImage.src
          }
          className="object-cover"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle2"
            className="text-ellipsis max-h-16 break-words line-clamp-2"
            data-testid="article-card-header"
          >
            {article.headline.main}
          </Typography>
          <Typography
            variant="caption"
            className="text-ellipsis max-h-20 break-words line-clamp-4 h-auto"
            data-testid="article-card-snippet"
          >
            {article.snippet}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
