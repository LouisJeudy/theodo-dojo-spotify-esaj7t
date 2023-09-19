import { SavedTrack } from 'spotify-types';

const apiToken: string =
  'BQCfGZIBMxOncqTdh93GZNLyng0tR_69ihquValdv_xsojGHmY58PTNULry2_UP71ViPE8prjEE4tVPuNl4hRhl-MTk2CUe_Lnm9kCItJAL8_l8RuZX3ceNOVWmRFdZ1b8N3WHDTcXdKGz__696S3aAnBJarfavQo4Un_JuONnhTxFYAAduavJ4tYOjpPRfv8Mu3dSlq--634WUxXbOAIxljh6Vwz3ROig';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
