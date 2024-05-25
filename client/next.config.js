const securityHeaders = [
    {
        key: 'Cache-Control',
        value: 'public, s-maxage=60, stale-while-revalidate=86400',
    },
];

module.exports = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
};