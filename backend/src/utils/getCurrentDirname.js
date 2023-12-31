import { fileURLToPath } from 'url';
import { dirname } from 'path';

function getCurrentDirname(importMetaUrl) {
  const __filename = fileURLToPath(importMetaUrl);
  const __dirname = dirname(__filename);

  return __dirname;
}

export { getCurrentDirname };
