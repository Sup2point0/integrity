/** Capitalise the first letter of the given text. */
export function capitalise(text: string): string
{
  return text[0].toUpperCase() + text.slice(1);
}

/** Display a time in the format `HH:MM:SS`, given its seconds count. */
export function display_time(t: number): string
{
  if (t === null || t === undefined) {
    t = 0;
  }

  let T = Math.round(t / 1000);

  let hours = Math.floor(T / 60 / 60);
  let minutes = Math.floor(T / 60) % 60;
  let seconds = T % 60;

  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
