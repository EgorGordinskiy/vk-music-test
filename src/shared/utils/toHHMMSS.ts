export const toHHMMSS = (seconds: number): string => {
  const s = new Date(seconds * 1000).toISOString();
  const result = seconds < 3600 ? s.substring(14, 19) : s.substring(11, 16);
  return result.startsWith("0") ? result.slice(1, result.length) : result;
};
