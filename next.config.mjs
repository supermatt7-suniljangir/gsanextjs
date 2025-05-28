/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Allows ALL domains :cite[1]:cite[4]
            },
        ],
    },
};

export default nextConfig;
