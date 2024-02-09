export type Multimedia = {
  rank: number | null;
  subtype: string | null;
  caption: string | null;
  credit: string | null;
  type: string | null;
  url: string;
  height: number;
  width: number;
  legacy: {
    xlarge: string | null;
    xlargewidth: number | null;
    xlargeheight: number | null;
  };
  crop_name: string | null;
};
