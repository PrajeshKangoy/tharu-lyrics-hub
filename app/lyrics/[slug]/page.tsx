import Link from "next/link";
import ReviewBox from "../../../components/ReviewBox";

// Describe the payload structure coming out of your API
interface ApiLyricsResponse {
  id: number;
  title: string;
  singer: string[];
  slug: string;
  lyrics?: string;     // Assuming your API includes the lyrics text block here
  lyricist?: string;
  composer?: string;
}

interface LyricsPageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function LyricsPage({ params }: LyricsPageProps) {
  const { slug } = await Promise.resolve(params);

  let songData: ApiLyricsResponse | null = null;
  let lyrics = "Lyrics not found.";
  let credits = {
    singer: "Unknown Artist",
    lyricist: "Unknown",
    composer: "Unknown",
  };

  // 1. CALL THE LYRICS API
  try {
    const res = await fetch(`http://localhost:8000/api/v1/lyrics/search-slug?slug=${slug}`, {
      cache: "no-store", // Ensures you get fresh data if database updates
    });

    if (res.ok) {
      const data = await res.json();
      // Handle array or direct object response gracefully
      songData = Array.isArray(data) ? data[0] : data;

      if (songData) {
        lyrics = songData.lyrics || "Lyrics text is currently empty in the database.";
        credits = {
          singer: songData.singer ? songData.singer.join(", ") : "Unknown Artist",
          lyricist: songData.lyricist || "Unknown",
          composer: songData.composer || "Unknown",
        };
      }
    }
  } catch (error) {
    console.error("Failed fetching live lyrics from API:", error);
  }

  // Fallback title formatting if API didn't return a title string
  const displayTitle = songData?.title || slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // 2. FETCH ALL/RELATED SONGS FOR THE SIDEBAR PANELS
  let relatedSongs = [
    { slug: "sajna-hamar-humra-laila-aawaixai", title: "Sajna Hamar Humra Laila Aawaixai", singer: "Prajesh Kangoy" },
    { slug: "pogadi", title: "Pogadi", singer: "Dev Krishna Biswas" },
    { slug: "tohar-kurti-me-remix", title: "Tohar Kurti Me (Remix)", singer: "Annu Chaudhary" },
  ];

  try {
    const backupRes = await fetch("http://localhost:8000/lyrics/titles", { next: { revalidate: 60 } });
    if (backupRes.ok) {
      const allSongs = await backupRes.json();
      if (Array.isArray(allSongs)) {
        relatedSongs = allSongs
          .filter((song: any) => song.slug !== slug)
          .map((song: any) => ({
            slug: song.slug,
            title: song.title,
            singer: song.singer ? song.singer.join(", ") : "Unknown",
          }));
      }
    }
  } catch (err) {
    console.log("Could not refresh sidebar recommended listing:", err);
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-16 grid md:grid-cols-2 gap-10">
        <img
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1200"
          alt={displayTitle}
          className="rounded-3xl h-[240px] w-full object-cover shadow-2xl"
        />

        <div>
          <h1 className="text-5xl font-bold mb-6">{displayTitle}</h1>

          <div className="text-gray-400 space-y-2">
            <p><span className="text-white">Singer:</span> {credits.singer}</p>
            <p><span className="text-white">Lyricist:</span> {credits.lyricist}</p>
            <p><span className="text-white">Composer:</span> {credits.composer}</p>
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-5xl mx-auto px-6 mt-24 grid grid-cols-1 lg:grid-cols-10 gap-10">

        {/* CENTER PANEL - LYRICS + REVIEWS */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold mb-8 text-[#c5a059]">
            Lyrics
          </h2>

          <div className="bg-[#151515] p-10 rounded-3xl text-gray-300 whitespace-pre-line leading-relaxed">
            {lyrics}
          </div>

          {/* REVIEWS SECTION */}
          <div className="mt-20">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#c5a059]">
                Reviews & Comments
              </h2>
              <p className="text-gray-500 text-sm">24 comments • 128 ratings</p>
            </div>

            <ReviewBox />

            <div className="space-y-5 mt-8">
              <div className="bg-[#151515] p-6 rounded-3xl">
                <p className="font-semibold">Sagar Tharu</p>
                <p className="text-gray-500 text-xs">2 hours ago</p>
                <p className="mt-3 text-gray-300">This song gives nostalgic village vibes.</p>
              </div>

              <div className="bg-[#151515] p-6 rounded-3xl">
                <p className="font-semibold">Roshan Chaudhary</p>
                <p className="text-gray-500 text-xs">1 day ago</p>
                <p className="mt-3 text-gray-300">Beautiful composition and meaningful lyrics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - DYNAMIC RELATED SONGS */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-[#151515] p-5 rounded-3xl">
            <h3 className="text-lg font-bold text-[#c5a059] mb-4">
              Similar Songs
            </h3>

            <div className="space-y-3">
              {relatedSongs.slice(0, 4).map((song) => (
                <Link
                  key={song.slug}
                  href={`/lyrics/${song.slug}`}
                  className="block hover:text-[#c5a059]"
                >
                  <p className="text-sm font-medium transition-colors">{song.title}</p>
                  <p className="text-xs text-gray-500">{song.singer}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-[#151515] p-5 rounded-3xl">
            <h3 className="text-lg font-bold text-[#c5a059] mb-4">
              Explore More Songs
            </h3>

            <div className="space-y-3">
              {relatedSongs.slice(4, 8).map((song) => (
                <Link
                  key={song.slug}
                  href={`/lyrics/${song.slug}`}
                  className="block hover:text-[#c5a059]"
                >
                  <p className="text-sm font-medium transition-colors">{song.title}</p>
                  <p className="text-xs text-gray-500">{song.singer}</p>
                </Link>
              ))}
              {relatedSongs.length <= 4 && (
                <p className="text-xs text-gray-600 italic">No extra tracks to preview.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}