/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: 'images/**', 
            }
        ],
        domains: ["cdn.sanity.io"]
    },
    env: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: "siopl9y6",
        NEXT_PUBLIC_SANITY_DATASET: "production",
        NEXT_PUBLIC_SANITY_TOKEN: "skzfL47k4BXwIzawFEF7461XmZS9hPOdVhBPAZtWjO1IE8VNxClKsWS8LXu6pFJiETT5ZAIwXT37x78GoCX03dqxZGKrpXDZEiFlV8pNcJAzxSXDydxhs6BoVe1JOhcRerdELZ4cTvMJURV99MSlPp0IiejWZzZZ5wy4CvDfy5d7fax0MpJ2",
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY: "pk_test_51NdqiYBqUzhy869DaYzSV19rsFeuDAw7VaRAQQTqctVeCb2VbFWbKLDSxcXQHXlx5iXuPPq8my7F561RxvSlOFU2006fLGuDF3",
        NEXT_PUBLIC_STRIPE_SECRET_KEY: "sk_test_51NdqiYBqUzhy869Dr6fiHI2ry88taDGJm3lpsGWoK1FL5DEsrz4CfcXCyTw62JWoSztftzJ7eJMNsolg6Vd4SOLh00teoNf6Ss",
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "pk_test_ZGVmaW5pdGUtd2FzcC0zNC5jbGVyay5hY2NvdW50cy5kZXYk",
        CLERK_SECRET_KEY: "sk_test_KHALfHJpZtlamwX0limLFIoIXjrJtSujaZ8DoNMn3U"
    }
}

module.exports = nextConfig
