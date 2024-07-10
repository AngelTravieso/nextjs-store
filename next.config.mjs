/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

// Convert the import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],
    prependData: `@import "main.sass"`,
  },
};

export default nextConfig;
