import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
    },
    // Caso queira habilitar no domínio localhost apenas
    host: 'localhost',
    port: 5173
  }
});
