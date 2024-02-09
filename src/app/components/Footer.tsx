"use client";
import Container from "./Container";
import { Link, Typography, useMediaQuery } from "@mui/material";
import poweredByNyt from "../../assets/poweredby-nytimes.png";
import poweredByNytSm from "../../assets/poweredby-nytimes-sm.png";
import travelNewsLogo from "../../assets/travel-news-logo.png";
import theme from "../../theme";

const Footer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="w-full text-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-[999] bg-black text-white">
      <Container className="flex w-full flex-col items-center py-8">
        <div className="flex justify-center w-full">
          <img
            src={travelNewsLogo.src}
            alt="New York Times"
            height={64}
            className="p-2 h-16"
          />
        </div>
        <div className="flex w-full justify-center items-center">
          <Link
            underline="none"
            color="white"
            variant="button"
            className="underline p-2 cursor-pointer"
          >
            Sitemap
          </Link>
          |
          <Link
            underline="none"
            color="white"
            variant="button"
            className="underline p-2 cursor-pointer"
          >
            Terms of Use
          </Link>
          |
          <Link href="https://www.nytimes.com" target="_blank">
            <img
              src={isMobile ? poweredByNytSm.src : poweredByNyt.src}
              alt="Powered By The New York Times"
              height={32}
              className="pl-2 h-6"
            />
          </Link>
        </div>
        <Typography variant="caption" className="text-white">
          This web page was created by{" "}
          <Link href="https://www.github.com/aorlanes" target="_blank">
            Anjela Orlanes
          </Link>
          ™
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
