export interface Track {
  title: string;
  artist: string;
  url: string;
  coverImage: string;
  album: string;
  duration: number;
}

export interface Artist {
  name: string;
  url: string;
  image: string;
  genres: string[];
  followers: number;
}

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
const TOP_ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists';

async function getAccessToken() {
  if (!client_id || !client_secret || !refresh_token) {
    throw new Error('Missing required Spotify credentials in environment variables');
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function getTopTracks(): Promise<Track[]> {
  const { access_token } = await getAccessToken();

  const response = await fetch(TOP_TRACKS_ENDPOINT + '?limit=10&time_range=short_term', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch top tracks: ${response.statusText}`);
  }

  const data = await response.json();
  
  if (!data.items || !Array.isArray(data.items)) {
    throw new Error('Invalid response format from Spotify API');
  }

  return data.items.map((track: any) => ({
    title: track.name || 'Unknown Title',
    artist: track.artists?.map((artist: any) => artist.name).join(', ') || 'Unknown Artist',
    url: track.external_urls?.spotify || '',
    coverImage: track.album?.images?.[0]?.url || '',
    album: track.album?.name || 'Unknown Album',
    duration: track.duration_ms || 0,
  }));
}

export async function getTopArtists(): Promise<Artist[]> {
  const { access_token } = await getAccessToken();

  const response = await fetch(TOP_ARTISTS_ENDPOINT + '?limit=6&time_range=short_term', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch top artists: ${response.statusText}`);
  }

  const data = await response.json();
  
  if (!data.items || !Array.isArray(data.items)) {
    throw new Error('Invalid response format from Spotify API');
  }

  return data.items.map((artist: any) => ({
    name: artist.name || 'Unknown Artist',
    url: artist.external_urls?.spotify || '',
    image: artist.images?.[0]?.url || '',
    genres: artist.genres || [],
    followers: artist.followers?.total || 0,
  }));
} 