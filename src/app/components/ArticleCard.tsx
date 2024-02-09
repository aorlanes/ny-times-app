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
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  const cardImage = article.multimedia[0];
  return (
    <Link href={article.web_url || ""} target="_blank" underline="none">
      <Card className="min-w-[260px] max-w-[260px] m-[9px] h-[300px]">
        <CardActionArea>
          <CardMedia
            sx={{ height: 140 }}
            image={
              cardImage?.url
                ? `https://www.nytimes.com/${cardImage.url}`
                : noImage.src
            }
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle2"
              className="text-ellipsis max-h-16 break-words line-clamp-2"
            >
              {article.headline.main}
            </Typography>
            <Typography
              variant="caption"
              className="text-ellipsis max-h-20 break-words line-clamp-4"
            >
              {article.snippet}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default ArticleCard;
