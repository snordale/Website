import { getTopTracks, getTopArtists, type Track, type Artist } from '@/lib/spotify';
import { TrackCard } from '@/components/ui/track-card';
import { ArtistCard } from '@/components/ui/artist-card';
import { theme } from '@/lib/styles/theme';
import { ContentLayout } from '@/components/ui/content-layout';

export const revalidate = 3600;

export default async function ListeningPage() {
    const [tracks, artists] = await Promise.all([
        getTopTracks(),
        getTopArtists(),
    ]);

    return (
        <ContentLayout maxWidth="800px">
            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                marginBottom: theme.space[8],
                color: theme.colors.foreground,
            }}>
                Listening
            </h1>

            <div style={{ marginBottom: theme.space[12] }}>
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginBottom: theme.space[6],
                    color: theme.colors.foreground,
                }}>
                    Top Songs This Month
                </h2>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.space[3],
                }}>
                    {tracks.map((track: Track) => (
                        <TrackCard key={track.url} {...track} />
                    ))}
                </div>
            </div>

            <div>
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginBottom: theme.space[6],
                    color: theme.colors.foreground,
                }}>
                    Top Artists This Month
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: theme.space[6],
                }}>
                    {artists.map((artist: Artist) => (
                        <ArtistCard key={artist.url} {...artist} />
                    ))}
                </div>
            </div>
        </ContentLayout>
    );
} 