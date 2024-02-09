import { useMediaQuery } from "@mui/material";
import * as React from "react";
import theme from "../../theme";

type ContainerProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const Container = ({ children, style, className }: ContainerProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));
  return (
    <div className="w-full h-full flex justify-center">
      <div
        style={{ ...style }}
        className={`${
          isMobile
            ? "p-8 max-w-[45rem]"
            : isTablet
            ? "p-12 max-w-[50rem]"
            : "p-16 max-w-[60rem]"
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
