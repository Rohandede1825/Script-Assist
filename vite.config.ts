import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
	  chunkSizeWarningLimit: 1000, // Increase limit to avoid warnings
	  rollupOptions: {
		output: {
		  manualChunks(id) {
			if (id.includes("node_modules")) {
			  return "vendor"; // Create a separate chunk for dependencies
			}
		  },
		},
	  },
	},
  });
  
