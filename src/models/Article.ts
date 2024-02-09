import { Byline } from "./Byline";
import { Headline } from "./Headline";
import { Keyword } from "./Keyword";
import { Multimedia } from "./Multimedia";

export type Article = {
  web_url: string | null;
  snippet: string | null;
  print_page: number | null;
  print_section: string | null;
  source: string | null;
  multimedia: Multimedia[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string | null;
  document_type: string | null;
  news_desk: string | null;
  section_name: string | null;
  byline: Byline;
  type_of_material: string | null;
  _id: string | null;
  word_count: number | null;
  uri: string | null;
};
