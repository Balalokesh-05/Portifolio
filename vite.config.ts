import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-pdf-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.method === 'POST' && (req.url === '/' || req.url?.startsWith('/?'))) {
            res.statusCode = 200;
            res.end('OK');
            return;
          }
          if (req.url && (req.url.includes('.pdf') || req.url.includes('Resume'))) {
            res.setHeader('Content-Type', 'application/pdf');
            if (req.url.includes('download')) {
              res.setHeader('Content-Disposition', 'attachment; filename="Bala-Lokesh-Lutukurthi-Resume.pdf"');
            } else {
              res.setHeader('Content-Disposition', 'inline');
            }
          }
          next();
        });
      },
    },
  ],
})

