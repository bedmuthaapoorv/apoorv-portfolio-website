/** Renders a string where **text** becomes <b>text</b>. */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? <b key={i}>{part.slice(2, -2)}</b> : part
      )}
    </>
  );
}
