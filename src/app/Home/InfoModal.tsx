import { Article } from "@/models/Article";
import theme from "../../theme";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import noImage from "../../assets/no-image.jpeg";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

type InfoModalProps = {
  article: Article;
  open: boolean;
  onClose: () => void;
};

const InfoModal = ({ article, open, onClose }: InfoModalProps) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const cardImage = article.multimedia[45];

  return (
    <Dialog open={open} fullScreen={fullScreen} onClose={onClose}>
      <Card className="relative h-full rounded-none" raised={false}>
        <CardMedia
          component="img"
          image={
            cardImage?.url
              ? `https://www.nytimes.com/${cardImage.url}`
              : noImage.src
          }
          className="object-cover"
        />
        <IconButton
          aria-label="close"
          color="white"
          onClick={onClose}
          className="absolute z-10 top-2 right-2"
        >
          <CancelRoundedIcon />
        </IconButton>
        <CardContent className="p-6 h-auto">
          <Typography gutterBottom variant="h5" className="">
            {article.headline.main}
          </Typography>
          <div className="flex justify-between">
            <Typography
              gutterBottom
              variant="subtitle2"
              className="italic max-w-1/2"
            >
              {article.byline.original}
            </Typography>
            <Typography gutterBottom variant="subtitle2" className="max-w-1/2">
              {article?.pub_date && new Date(article.pub_date).toDateString()}
            </Typography>
          </div>
          <Typography variant="body1" className="pb-4">
            {article.snippet}
          </Typography>
          <Button
            endIcon={<OpenInNewRoundedIcon />}
            color="primary"
            variant="contained"
            href={article.web_url ?? ""}
            target="_blank"
          >
            Read more
          </Button>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default InfoModal;
