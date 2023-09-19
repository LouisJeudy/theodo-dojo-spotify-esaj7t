import { SavedTrack } from 'spotify-types';

const apiToken: string =
  'BQAk6hUm52mlLeNg6r5HML5PRNFlhkz4QlVpo2NhMCREoQ1w-67ta4bKAien1A6iHtz5t3KxBySUlZdtA8wexLb6TUFIzSAG464rUm6N-QDngzhX-D-gPFd4YBc4XX2A7iLFvTZo2ozGy1ktWySEP5xwQfkJvwyYYbR1BGbPdua4bUXXt5PtETxqMeaIaaBharWsS8_JIhvig8kFMpqawNXXqPRJ0Za8nA';

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
