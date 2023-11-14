/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Dragonatorul\'s personal KASM Workspaces',
    description: 'A personal store for Kasm workspaces used by Dragonatorul.',
    icon: 'https://dragonatorul.github.io/kasm-registry/1.0/logo.svg',
    listUrl: 'https://dragonatorul.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Dragonatorul/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
