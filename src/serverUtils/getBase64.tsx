import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

export const getBase64 = async (src: string) => {
  const buffer = await fs.readFile(src);
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
};
export default getBase64;
