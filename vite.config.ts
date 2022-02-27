import path from 'path';
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'components': path.resolve(__dirname, 'src/components'),
			'styles': path.resolve(__dirname, 'src/styles'),
			'pages': path.resolve(__dirname, 'src/pages'),
			'utils': path.resolve(__dirname, 'src/utils'),
			'apis': path.resolve(__dirname, 'src/apis')
		},
	}
});
