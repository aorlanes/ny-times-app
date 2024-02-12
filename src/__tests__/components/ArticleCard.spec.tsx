import ArticleCard from "../../app/components/ArticleCard";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("ArticleCard", () => {
  const onClick = jest.fn();
  const article = {
    web_url: null,
    snippet: "test snippet",
    print_page: null,
    print_section: null,
    source: null,
    multimedia: [],
    headline: {
      main: "test header",
      kicker: null,
      content_kicker: null,
      print_headline: null,
      name: null,
      seo: null,
      sub: null,
    },
    keywords: [],
    pub_date: null,
    document_type: null,
    news_desk: null,
    section_name: null,
    byline: {
      original: null,
      person: {
        firstname: null,
        middlename: null,
        lastname: null,
        qualifier: null,
        title: null,
        role: null,
        organization: null,
        rank: null,
      },
      organization: null,
    },
    type_of_material: null,
    _id: null,
    word_count: null,
    uri: null,
  };

  beforeEach(() => render(<ArticleCard article={article} onClick={onClick} />));

  it("should render an Article Card", () => {
    expect(screen);
  });

  it("should render correct heading", async () => {
    const component = await waitFor(() =>
      screen.findByTestId("article-card-header")
    );
    expect(component.textContent).toBe(article.headline.main);
  });

  it("should render correct snippet", async () => {
    const component = await waitFor(() =>
      screen.findByTestId("article-card-snippet")
    );
    expect(component.textContent).toBe(article.snippet);
  });

  it("should call onClick on click", async () => {
    const component = await waitFor(() => screen.findByTestId("article-card"));
    fireEvent.click(component);
    expect(onClick).toHaveBeenCalled();
  });
});
