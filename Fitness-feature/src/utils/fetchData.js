export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "a5e8c9e2dbmsh634f1a7d13011a1p10b40ajsnb7f5e8a9f1f0",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a5e8c9e2dbmsh634f1a7d13011a1p10b40ajsnb7f5e8a9f1f0",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const foodOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a5e8c9e2dbmsh634f1a7d13011a1p10b40ajsnb7f5e8a9f1f0",
    "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
