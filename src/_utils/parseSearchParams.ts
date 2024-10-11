export function parseSearchParams<SearchParams = Record<string, string>>(urlSearchParams: URLSearchParams) {
  const paramsObj: Record<string, string> = {};

  for (const [key, value] of urlSearchParams) {
    paramsObj[key] = value;
  }

  return paramsObj as Partial<SearchParams>;
}
