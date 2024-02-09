import { useState, useMemo, CSSProperties, createRef, useEffect } from "react";
import { Button, useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import theme from "../../theme";

type CarouselProps = {
  items: JSX.Element[];
  displayCount: number;
  slideByCount?: number;
  style?: CSSProperties;
  className?: string;
};

type CarouselDirection = "LEFT" | "RIGHT";

const Carousel = ({
  items,
  displayCount,
  slideByCount = 1,
  style,
  className,
}: CarouselProps) => {
  const isDesktop = useMediaQuery(theme.breakpoints.down("lg"));
  const itemRefs = useMemo(
    () => items.map(() => createRef<HTMLDivElement>()),
    [items]
  );
  const carouselRef = createRef<HTMLDivElement>();
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [nextPrevInQueue, setNextPrevInQueue] = useState({
    next: slideByCount,
    prev: -1,
  });
  const [nextPrevDisabled, setNextPrevDisabled] = useState({
    next: false,
    prev: true,
  });
  const itemsCount = items.length;

  const [itemWidth, setItemWidth] = useState(0);
  useEffect(() => {
    setItemWidth(itemRefs[0].current!.clientWidth);
  }, [itemRefs, setItemWidth]);

  useEffect(() => {
    setNextPrevInQueue({
      next: currentItem + displayCount,
      prev: currentItem - displayCount,
    });
    setNextPrevDisabled({
      next: currentItem + 1 > itemsCount - displayCount,
      prev: currentItem - 1 < 0,
    });

    currentItem > -1 &&
      currentItem < itemsCount &&
      carouselRef.current &&
      carouselRef.current.scroll({
        top: 0,
        left: itemRefs[currentItem].current!.offsetLeft,
        behavior: "smooth",
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItem]);

  const onChange = (direction: CarouselDirection) => {
    direction === "LEFT"
      ? setCurrentItem(
          nextPrevInQueue.next < itemsCount - displayCount
            ? nextPrevInQueue.next
            : itemsCount - displayCount
        )
      : setCurrentItem(nextPrevInQueue.prev < 0 ? 0 : nextPrevInQueue.prev);
  };

  return (
    <div
      style={{
        maxWidth: isDesktop ? `${itemWidth * displayCount}px` : "100%",
        ...style,
      }}
      className={`flex relative w-full items-center ${className}`}
    >
      <NextPrevButtons
        onNext={() => onChange("LEFT")}
        onPrev={() => onChange("RIGHT")}
        nextDisabled={nextPrevDisabled.next}
        prevDisabled={nextPrevDisabled.prev}
      />
      <div className="overflow-hidden flex" ref={carouselRef}>
        {items.map((item, index) => {
          return (
            <div key={index} ref={itemRefs[index]}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

type nextPrevButtonProps = {
  onNext: () => void;
  onPrev: () => void;
  nextDisabled: boolean;
  prevDisabled: boolean;
};

const NextPrevButtons = ({
  onNext,
  onPrev,
  nextDisabled,
  prevDisabled,
}: nextPrevButtonProps) => {
  return (
    <div className="absolute flex w-full justify-between z-0">
      <Button
        className={`rounded-[5px] p-0 right-6 !max-w-6 !min-w-6 h-16 !bg-black ${
          prevDisabled ? "opacity-25" : ""
        }`}
        onClick={onPrev}
        disabled={prevDisabled}
      >
        <ArrowBackIosNewIcon style={{ color: theme.palette.white.main }} />
      </Button>
      <Button
        className={`rounded-[5px] p-0 left-6 !max-w-6 !min-w-6 h-16 !bg-black ${
          nextDisabled ? "opacity-25" : ""
        }`}
        onClick={onNext}
        disabled={nextDisabled}
      >
        <ArrowForwardIosIcon style={{ color: theme.palette.white.main }} />
      </Button>
    </div>
  );
};

export default Carousel;
