import fs from "fs";
import path from "path";
import Link from "next/link";
import ReviewBox from "../../components/ReviewBox";

interface LyricsPageProps {
  params: Promise<{
    slug: string;
  }> | {
    slug: string;
  };
}

export default async function LyricsPage({ params }: LyricsPageProps) {
  const { slug } = await Promise.resolve(params);

  // SONG CREDITS
  const credits = {
    singer: "Kashin Chaudhary, Anuma Chaudhaey",
    lyricist: "Dev Krishna Biswas",
    composer: "Dev Krishna Biswas",
  };

  // FORMAT TITLE
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // READ LYRICS FILE
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

      {/* LYRICS */}
      <div className="max-w-4xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold mb-8 text-[#c5a059]">
          Lyrics
        </h2>

        <div className="bg-[#151515] p-10 rounded-3xl text-gray-300 whitespace-pre-line">
          {lyrics}
        </div>
      </div>

      {/* REVIEWS */}
      <div className="max-w-4xl mx-auto mt-20 px-6">

        <div className="flex justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#c5a059]">
              Reviews & Comments
            </h2>
            <p className="text-gray-500 text-sm">
              24 comments • 128 ratings
            </p>
          </div>

          {/* <div className="text-right">
            <p className="text-yellow-400 text-xl">★★★★★</p>
            <p className="text-sm text-gray-400">4.8/5 Rating</p>
          </div> */}
        </div>

        {/* REVIEW BOX */}
        <ReviewBox />

        {/* STATIC COMMENTS */}
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

      {/* RELATED SONGS */}
      <div className="max-w-4xl mx-auto mt-20 px-6 pb-24">
        <h2 className="text-2xl font-bold mb-6 text-[#c5a059]">
          Explore More Songs
        </h2>

        <div className="space-y-4">
          {relatedSongs.map((song) => (
            <Link
              key={song.slug}
              href={`/lyrics/${song.slug}`}
              className="block bg-[#151515] p-5 rounded-2xl hover:border-[#c5a059]"
            >
              <p>{song.title}</p>
              <p className="text-xs text-gray-400">{song.singer}</p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}