import { getPosts } from "@/lib/medium";

// Always run on request: the page calls this on every load to show the latest posts.
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const items = await getPosts({ revalidate: 0 });
    return Response.json(
      { items, fetchedAt: new Date().toISOString() },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    return Response.json(
      { items: [], error: err instanceof Error ? err.message : "Failed to fetch feed" },
      { status: 502, headers: { "Cache-Control": "no-store" } }
    );
  }
}
