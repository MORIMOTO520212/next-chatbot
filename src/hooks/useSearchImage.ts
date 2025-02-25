type Pages = {
  title: string;
  index: number;
  thumbnail: {
    source: string;
  };
}[];

type Provider = 'wikipedia' | 'pinterest';

export const useSearchImage = (provider: Provider = 'wikipedia') => {
  const searchImage = async (query: string) => {
    if (provider === 'wikipedia') {
      const params = new URLSearchParams({
        origin: '*',
        action: 'query',
        prop: 'pageimages',
        gsrsearch: query,
        generator: 'search',
        pithumbsize: '300',
        format: 'json',
      }).toString();
      const result = await fetch(
        `https://ja.wikipedia.org/w/api.php?${params}`,
        {
          next: {
            revalidate: 60,
          },
        },
      );

      const data = await result.json();
      const pages: Pages = Object.values(data.query.pages);
      const thumbnailUrl =
        pages.find((page) => page.index === 1)?.thumbnail?.source ||
        pages.find((page) => page.index === 2)?.thumbnail?.source ||
        pages.find((page) => page.index === 3)?.thumbnail?.source;
      return thumbnailUrl;
    } else {
      const result = await fetch(
        `https://api.pinterest.com/v5/search/pins?query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINTEREST_API_KEY}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          next: { revalidate: 60 },
        },
      );
      const data = await result.json();
      const thunbnailUrl = data.items[0].media.images['1200x']['url'];
      return thunbnailUrl;
    }
  };
  return {
    searchImage,
  };
};
