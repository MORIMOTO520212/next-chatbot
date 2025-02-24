type Pages = {
  title: string;
  index: number;
  thumbnail: {
    source: string;
  };
}[];

export const useSearchImage = () => {
  const searchImage = async (query: string) => {
    const params = new URLSearchParams({
      origin: '*',
      action: 'query',
      prop: 'pageimages',
      gsrsearch: query,
      generator: 'search',
      pithumbsize: '300',
      format: 'json',
    }).toString();
    const result = await fetch(`https://ja.wikipedia.org/w/api.php?${params}`, {
      next: {
        revalidate: 60,
      },
    });

    const data = await result.json();
    const pages: Pages = Object.values(data.query.pages);

    const thumbnailUrl =
      pages.find((page) => page.index === 1)?.thumbnail.source || '';
    return thumbnailUrl;
  };
  return {
    searchImage,
  };
};
