import path from 'path';
import { promises as fs } from 'fs';

export async function getContributorData(slug: string) {
  const dbDir = path.join(process.cwd(), 'src', 'lib', 'db');
  const contributor = await fs.readFile(`${dbDir}/${slug}.json`, 'utf-8');
  if (!contributor) {
    return {};
  }
  return { contributor: JSON.parse(contributor) };
}
