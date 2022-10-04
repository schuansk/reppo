import path from 'path';
import { promises as fs } from 'fs';

export async function getAllContributors() {
  const dbDir = path.join(process.cwd(), 'src', 'lib', 'db');
  const files = await fs.readdir(`${dbDir}/`);
  const contributors = files.map((file) => file.split('.')[0]);
  return { contributors };
}
