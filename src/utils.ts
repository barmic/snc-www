import { DateTime } from "luxon";

type translation = {fr: string, en: string};
type language = keyof translation;
function parseDate(input: string): Date {
  const match = RegExp(/^(.+)\[(.+)]$/).exec(input);
  if (match) {
    const dateStr = match[1];
    const zone = match[2];
    const dt = DateTime.fromISO(dateStr, { zone });
    return new Date(dt.toString()); // Affiche la date avec la zone correcte
  }
  return new Date(input);
}

function url(path: string[] | string, opts: {anchor?: string, lang?: language} = {}) {
  const lang = opts.lang ?? 'fr';
  const langPart = lang === 'en' ? ['en'] : [];
  const pathArray = typeof path === 'string' ? path.split('/') : path;
  const a = [langPart , pathArray].flatMap((p) => p);
  const result = `${import.meta.env.BASE_URL}/${a.join('/')}/${opts.anchor ?? ''}`.replaceAll(/\/+/g, '/');
  return result.length === 1 || !result.endsWith('/') ? result : result.slice(0, -1);
}

export default {parseDate, url}
