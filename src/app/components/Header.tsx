import travelNewsLogo from "../../assets/travel-news-logo-wide.png";

const Header = () => {
  return (
    <>
      <div className="flex w-full justify-center shadow-md py-4 fixed z-[999] bg-black">
        <img
          src={travelNewsLogo.src}
          alt="Travel News & Trends"
          height={48}
          className="p-0 cursor-pointer h-12"
        />
      </div>
      <div className="h-[80px]" />
    </>
  );
};

export default Header;
