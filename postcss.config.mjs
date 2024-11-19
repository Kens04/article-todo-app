/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default config;
