/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/landing',
                permanent: false, // Use true se for uma mudança permanente.
            },
        ];
    },
};

module.exports = nextConfig;
