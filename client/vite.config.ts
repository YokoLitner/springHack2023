import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import TsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
        port: 5173,
    },
    plugins: [react(), TsconfigPaths()],
})
