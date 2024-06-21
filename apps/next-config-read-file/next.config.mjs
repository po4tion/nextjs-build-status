import fs from "fs";

let envConfig = {};

try {
  const data = fs.readFileSync("./env.json", "utf8");
  envConfig = JSON.parse(data);
} catch (err) {
  console.error("Error reading env.json file:", err);
}

console.log(`envConfig.status: ${envConfig.status}`);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
