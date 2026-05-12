import fs from "fs";
import path from "path";
import Link from "next/link";


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

type Song = {
  slug: string;
  title: string;
  singer: string;
  duration: string;
  plays: string;
};

type Artist = {
  id: string;
  slug: string;
  name: string;
  genre: string;
  monthlyListeners: string;
  imageUrl: string;
  bio: string;
  location: string;
  verified: boolean;
};

const ALL_SONGS: Song[] = [
  {
    slug: "sajna-hamar-humra-laila-aawaixai",
    title: "Sajna Hamar Humra Laila Aawaixai",
    singer: "Prajesh Kangoy, Sandip Sardar",
    duration: "4:12",
    plays: "1.2M",
  },
  {
    slug: "pogadi",
    title: "Pogadi",
    singer: "Dev Krishna Biswas",
    duration: "3:45",
    plays: "850K",
  },
  {
    slug: "tohar-kurti-me-remix",
    title: "Tohar Kurti Me (Remix)",
    singer: "Annu Chaudhary",
    duration: "3:20",
    plays: "2.5M",
  },
  {
    slug: "kanya-baniha",
    title: "Kaniya Baniha",
    singer: "Sandip Sardar",
    duration: "5:02",
    plays: "920K",
  },
];

const ARTISTS: Artist[] = [
  {
    id: "1",
    slug: "prajesh-kangoy",
    name: "Prajesh Kangoy",
    genre: "Maithili / Bhojpuri / Folk",
    monthlyListeners: "842,109",
    imageUrl:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop",
    bio: "Prajesh Kangoy is a versatile singer and lyricist known for his soulful contributions to Maithili and Bhojpuri music.",
    location: "Kathmandu, Nepal",
    verified: true,
  },

  {
    id: "2",
    slug: "annu-chaudhary",
    name: "Annu Chaudhary",
    genre: "Tharu / Folk / Modern",
    monthlyListeners: "1,204,882",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    bio: "Annu Chaudhary is one of the rising voices in modern Tharu music, known for energetic performances and viral folk remixes.",
    location: "Dang, Nepal",
    verified: true,
  },

  {
    id: "3",
    slug: "ganesh-chaudhary",
    name: "Ganesh Chaudhary",
    genre: "Tharu / Cultural Folk",
    monthlyListeners: "632,991",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    bio: "Ganesh Chaudhary is recognized for preserving traditional Tharu rhythms while blending them with contemporary Nepali music styles.",
    location: "Bardiya, Nepal",
    verified: true,
  },

  {
    id: "4",
    slug: "dev-krishna-biswas",
    name: "Dev Krishna Biswas",
    genre: "Folk / Acoustic / Regional",
    monthlyListeners: "954,320",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    bio: "Dev Krishna Biswas is a singer, composer, and producer celebrated for emotional regional songs and acoustic arrangements.",
    location: "Janakpur, Nepal",
    verified: true,
  },

  {
    id: "5",
    slug: "prabhat-chaudhary",
    name: "Prabhat Chaudhary",
    genre: "Tharu / Pop Folk",
    monthlyListeners: "721,447",
    imageUrl:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1974&auto=format&fit=crop",
    bio: "Prabhat Chaudhary is known for blending youthful pop melodies with authentic Tharu folk music and modern beats.",
    location: "Kailali, Nepal",
    verified: false,
  },
];

export default async function ArtistPage({
  params,
}: PageProps) {
  const { slug } = await params;

  // Find current artist
  const artist = ARTISTS.find(
    (a) => a.slug.toLowerCase() === slug.toLowerCase()
  );

  // Artist not found
  if (!artist) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold">
          Artist not found
        </h1>
      </div>
    );
  }

  // Attach lyrics preview from txt files
  const songsWithLyrics = ALL_SONGS.map((song) => {
    const filePath = path.join(
      process.cwd(),
      "public",
      "lyrics",
      `${song.slug}.txt`
    );

    let preview = "Lyrics not available.";

    try {
      const content = fs.readFileSync(
        filePath,
        "utf8"
      );

      preview =
        content
          .split("\n")
          .filter(Boolean)
          .slice(0, 3)
          .join(" ")
          .slice(0, 120) + "...";
    } catch (error) {
      console.log(
        "Lyrics file missing:",
        error
      );
    }

    return {
      ...song,
      preview,
    };
  });

  // Related artists
  const relatedArtists = ARTISTS.filter(
    (a) => a.slug !== artist.slug
  ).slice(0, 4);

  return (
    
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-blue-500/30">
      

      {/* HERO */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <img
          src={artist.imageUrl}
          alt={artist.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full max-w-7xl p-8 md:p-12">
          {/* <div className="mb-4 flex items-center gap-2">
            {artist.verified && (
              <span className="rounded-full bg-blue-600/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                Verified Artist
              </span>
            )}
          </div> */}

          <h1 className="mb-6 text-6xl font-black tracking-tight md:text-8xl">
            {artist.name}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-300">
            <span>
              {artist.monthlyListeners} Monthly
              Listeners
            </span>

            <span>{artist.location}</span>

            <span>{artist.genre}</span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            About
          </h2>

          <p className="max-w-3xl leading-relaxed text-zinc-400">
            {artist.bio}
          </p>
        </div>
      </section>

      {/* SONGS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Popular Tracks
          </h2>

          <span className="text-xs uppercase tracking-widest text-zinc-500">
            {songsWithLyrics.length} Songs
          </span>
        </div>

        <div className="space-y-4">
          {songsWithLyrics.map(
            (song, index) => (
              <Link
                key={song.slug}
                href={`/lyrics/${song.slug}`}
                className="group block rounded-3xl border border-white/5 bg-zinc-900/40 p-6 transition hover:border-blue-500/30 hover:bg-zinc-900"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex gap-5">
                    <span className="mt-1 text-zinc-600">
                      {index + 1}
                    </span>

                    <div>
                      <h3 className="mb-1 text-xl font-bold transition group-hover:text-blue-400">
                        {song.title}
                      </h3>

                      <p className="mb-3 text-sm text-zinc-500">
                        {song.singer}
                      </p>

                      <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
                        {song.preview}
                      </p>
                    </div>
                  </div>

                  <div className="text-right text-sm text-zinc-500">
                    <p>{song.plays}</p>
                    <p>{song.duration}</p>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </section>

      {/* RELATED ARTISTS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Related Artists
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {relatedArtists.map((related) => (
            <Link
              key={related.id}
              href={`/artist/${related.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 transition hover:border-blue-500/30 hover:bg-zinc-900"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={related.imageUrl}
                  alt={related.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="mb-1 text-lg font-bold transition group-hover:text-blue-400">
                  {related.name}
                </h3>

                <p className="mb-2 text-sm text-zinc-500">
                  {related.genre}
                </p>

                <p className="text-xs text-zinc-400">
                  {
                    related.monthlyListeners
                  }{" "}
                  listeners
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}