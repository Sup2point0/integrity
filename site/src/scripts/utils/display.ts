/** Capitalise the first letter of the given text. */
export function capitalise(text: string): string
{
  return text[0].toUpperCase() + text.slice(1);
}

/** Round a number to a given number of decimal places, and pad with `0`s if necessary. */
export function round(value: number, places: number = 0): string
{
  if (places < 0) {
    return value.toString();
  }

  let scale = 10 ** places;
  let rounded = Math.round(value * scale) / scale;
  let text = rounded.toString();

  let already_has_decimal = text.includes(".");

  if (places > 0 && !already_has_decimal) {
    text = text + "." + "0".repeat(places);
  }
  else if (already_has_decimal) {
    let [_, existing] = text.split(".");
    if (places > existing.length) {
      text = text + "0".repeat(places - existing.length);
    }
  }

  return text;
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

/** Capitalise and strip (x) duplicates from a section title. */
export function display_title(text: string): string
{
  if (text.endsWith(")")) {
    return text.slice(0, text.lastIndexOf("(")).toUpperCase();
  } else {
    return text.toUpperCase();
  }
}
