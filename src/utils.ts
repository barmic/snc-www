import { DateTime } from "luxon";

export default function parseDate(input: string): Date {
  const match = RegExp(/^(.+)\[(.+)\]$/).exec(input);
  if (match) {
    const dateStr = match[1];
    const zone = match[2];
    const dt = DateTime.fromISO(dateStr, { zone });
    return new Date(dt.toString()); // Affiche la date avec la zone correcte
  }
  return new Date(input);
}
