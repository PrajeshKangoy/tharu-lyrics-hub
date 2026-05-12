import fs from "fs";
import path from "path";
import Link from "next/link";

interface LyricsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LyricsPage({ params }: LyricsPageProps) {
  const { slug } = await params;

  // 🎵 Credits (temporary static data)
  const credits = {
    singer: "Kashin Chaudhary, Anuma Chaudhaey",
    lyricist: "Dev Krishna Biswas",
    composer: "Dev Krishna Biswas",
    // music: "RK Studio",
  };

  // Convert slug → title
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Read lyrics from file
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

  // 📌 Song database (temporary)
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

  // 🔥 FIXED: safe current song match
  const currentSong = allSongs.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase()
  );

  // 🔥 SIMPLE & RELIABLE related songs (always show something)
  const relatedSongs = allSongs.filter(
    (s) => s.slug !== slug
  );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-[#c5a059] selection:text-black">


      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-16 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1200"
          alt={formattedTitle}
          className="rounded-3xl object-cover h-[240px] w-full shadow-2xl"
        />

        <div>

          <p className="text-[#c5a059] uppercase tracking-[0.3em] text-sm mb-3">
            Trending Song
          </p>

          <h1 className="text-5xl font-bold mb-6 font-serif">
            {formattedTitle}
          </h1>

          {/* Credits */}
          <div className="space-y-2 text-sm text-gray-400 mb-6">
            <p>
              Singer: <span className="text-white">{credits.singer}</span>
            </p>
            <p>
              Lyricist: <span className="text-white">{credits.lyricist}</span>
            </p>
            <p>
              Composer: <span className="text-white">{credits.composer}</span>
            </p>
            {/* <p>
              Music: <span className="text-white">{credits.music}</span>
            </p> */}
          </div>

        </div>
      </div>

      {/* LYRICS */}
      <div className="max-w-4xl mx-auto mt-24 px-6">

        <h2 className="text-3xl font-bold mb-8 text-[#c5a059]">
          Lyrics
        </h2>

        <div className="bg-[#151515] border border-white/10 rounded-3xl p-10 text-gray-300 leading-loose text-lg whitespace-pre-line shadow-xl">
          {lyrics}
        </div>

      </div>

      {/* 🔥 RELATED SONGS */}
      <div className="max-w-4xl mx-auto mt-20 px-6">

        <h2 className="text-2xl font-bold mb-6 text-[#c5a059]">
          Explore More Songs
        </h2>

        <div className="space-y-3">

          {relatedSongs.map((song) => (
            <Link
              key={song.slug}
              href={`/lyrics/${song.slug}`}
              className="block bg-[#151515] border border-white/10 p-4 rounded-xl hover:border-[#c5a059] transition"
            >
              <p className="text-white font-medium">{song.title}</p>
              <p className="text-xs text-gray-400">{song.singer}</p>
            </Link>
          ))}

        </div>

      </div>


    </div>
  );
}