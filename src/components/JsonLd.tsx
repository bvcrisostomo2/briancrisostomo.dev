/**
 * Renders schema.org structured data as a JSON-LD script tag.
 * "<" is escaped so the data can't close the script tag early (see the Next.js JSON-LD guide).
 */
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify({ "@context": "https://schema.org", ...data }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
