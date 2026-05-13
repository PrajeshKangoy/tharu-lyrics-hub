import fs from "fs";
import path from "path";
import Link from "next/link";
import ReviewBox from "../../components/ReviewBox";

interface LyricsPageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function LyricsPage({ params }: LyricsPageProps) {
  const { slug } = await Promise.resolve(params);

  // SONG CREDITS
  const credits = {
    singer: "Kashin Chaudhary, Anuma Chaudhaey",
    lyricist: "Dev Krishna Biswas",
    composer: "Dev Krishna Biswas",
  };

  // TITLE FORMAT
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // LYRICS FILE
  const filePath = path.join(
    process.cwd(),
    "public",
    "lyrics",
    `${slug}.txt`
  );

  let lyrics = "Lyrics not found.";

  try {
    lyrics = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.log("Lyrics file missing:", error);
  }

  // SONG DATABASE
  const allSongs = [
    {
      slug: "sajna-hamar-humra-laila-aawaixai",
      title: "Sajna Hamar Humra Laila Aawaixai",
      singer: "Prajesh Kangoy, Sandip Sardar",
    },
    {
      slug: "pogadi",
      title: "Pogadi",
      singer: "Dev Krishna Biswas",
    },
    {
      slug: "tohar-kurti-me-remix",
      title: "Tohar Kurti Me (Remix)",
      singer: "Annu Chaudhary",
    },
    {
      slug: "kanya-baniha",
      title: "Kaniya Baniha",
      singer: "Sandip Sardar",
    },
  ];

  const relatedSongs = allSongs.filter((song) => song.slug !== slug);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-16 grid md:grid-cols-2 gap-10">
        <img
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1200"
          alt={formattedTitle}
          className="rounded-3xl h-[240px] w-full object-cover shadow-2xl"
        />

        <div>
          <h1 className="text-5xl font-bold mb-6">{formattedTitle}</h1>

          <div className="text-gray-400 space-y-2">
            <p><span className="text-white">Singer:</span> {credits.singer}</p>
            <p><span className="text-white">Lyricist:</span> {credits.lyricist}</p>
            <p><span className="text-white">Composer:</span> {credits.composer}</p>
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT PANEL - SONG INFO */}
        <div className="hidden lg:block lg:col-span-2">
          <div className="bg-[#151515] p-5 rounded-3xl sticky top-15">
            <h3 className="text-lg font-bold text-[#c5a059] mb-4">
              Song Info
            </h3>

            <div className="space-y-3 text-sm text-gray-300">

              <div>
                <p className="text-gray-500 text-xs">Singer</p>
                <p>{credits.singer}</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Lyricist</p>
                <p>{credits.lyricist}</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Composer</p>
                <p>{credits.composer}</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Language</p>
                <p>Morang Tharu</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Mood</p>
                <p>Romantic / Emotional</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Released Year</p>
                <p>2024</p>
              </div>

            </div>
          </div>
        </div>

        {/* CENTER - LYRICS + REVIEWS */}
        <div className="lg:col-span-7">

          {/* LYRICS */}
          <h2 className="text-3xl font-bold mb-8 text-[#c5a059]">
            Lyrics
          </h2>

          <div className="bg-[#151515] p-10 rounded-3xl text-gray-300 whitespace-pre-line leading-relaxed">
            {lyrics}
          </div>

          {/* REVIEWS */}
          <div className="mt-20">

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#c5a059]">
                Reviews & Comments
              </h2>
              <p className="text-gray-500 text-sm">
                24 comments • 128 ratings
              </p>
            </div>

            <ReviewBox />

            <div className="space-y-5 mt-8">

              <div className="bg-[#151515] p-6 rounded-3xl">
                <p className="font-semibold">Sagar Tharu</p>
                <p className="text-gray-500 text-xs">2 hours ago</p>
                <p className="mt-3 text-gray-300">
                  This song gives nostalgic village vibes.
                </p>
              </div>

              <div className="bg-[#151515] p-6 rounded-3xl">
                <p className="font-semibold">Roshan Chaudhary</p>
                <p className="text-gray-500 text-xs">1 day ago</p>
                <p className="mt-3 text-gray-300">
                  Beautiful composition and meaningful lyrics.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT PANEL - RELATED SONGS */}
        <div className="lg:col-span-3 space-y-6">

          {/* SIMILAR */}
          <div className="bg-[#151515] p-5 rounded-3xl">
            <h3 className="text-lg font-bold text-[#c5a059] mb-4">
              Similar Songs
            </h3>

            <div className="space-y-3">
              {relatedSongs.map((song) => (
                <Link
                  key={song.slug}
                  href={`/lyrics/${song.slug}`}
                  className="block hover:text-[#c5a059]"
                >
                  <p className="text-sm">{song.title}</p>
                  <p className="text-xs text-gray-500">{song.singer}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
          <div className="bg-[#151515] p-5 rounded-3xl">
            <h3 className="text-lg font-bold text-[#c5a059] mb-4">
              Explore More Songs
            </h3>

            <div className="space-y-3">
              {relatedSongs.map((song) => (
                <Link
                  key={song.slug}
                  href={`/lyrics/${song.slug}`}
                  className="block hover:text-[#c5a059]"
                >
                  <p className="text-sm">{song.title}</p>
                  <p className="text-xs text-gray-500">{song.singer}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}