const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "voting-application-1a.s3.us-east-1.amazonaws.com",
      },
    ],
  },
}

module.exports = nextConfig