import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js';
// import * as PackageJSON from './package.json' assert { type: "json" };

export const reactStrictMode = true;
export const swcMinify = true;
export const output = process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined;
// const deps = PackageJSON.dependencies;

export function webpack(config,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) {

  new ModuleFederationPlugin({
    name: 'nextSkeleton',
    filename: 'remoteEntry.js',
    remotes: {},
    exposes: {
      './NextSkeleton': './app/page.tsx'
    },
    shared: {}
  });

  // Important: return the modified config
  return config;
}


/* OLD CONFIG BEING REPLACED

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined
};

export default nextConfig;
*/