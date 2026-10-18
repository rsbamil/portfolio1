const path = require("path");

module.exports = {
  // Standalone output is used by the Docker deployment, but Vercel builds its
  // own serverless output and should not use Next.js standalone mode.
  ...(process.env.VERCEL ? {} : { output: "standalone" }),
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to",
        pathname: "**",
      },
    ],
  },
};
