/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_AI_API_KEY: process.env.GOOGLE_AI_API_KEY,
    CUSTOM_PROMPT: process.env.CUSTOM_PROMPT,
  },
}

module.exports = nextConfig 