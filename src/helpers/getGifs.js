export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=KoMkE08IgMq4KL5ibLNsaZwYYvkj95N5&q=${encodeURI(
    category
  )}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(data);
  const gifs = data.map((img) => {
    const {
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    } = img;
    return {
      id,
      title,
      url,
    };
  });

  return gifs;
};
