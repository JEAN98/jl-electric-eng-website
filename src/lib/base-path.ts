export const BASE_PATH = "";

export function withBasePath(path: string) {
  return `${BASE_PATH}${path}`;
}
