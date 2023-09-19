const apiToken: string =
  'BQDt4xlcS2KTqMBXMst3FAR5vvm4gfzQ-qaxEWimhg3ZVx4er35u58gvnSskRjZdnoGj7os1fW2h00tLNEy7rDvks1187Cnb3Y7GAtDRpQXJDJNaXmirfNfKlcAs4ZmmkO3AOGOr17egMcavePPLCLpwEFY57W7N4Rl25UCW8prAqcgt7QNJ4VdyDxFo9bqM3POMC0klk9YPpuhYwM_jd2vFz385AfunvQ';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
