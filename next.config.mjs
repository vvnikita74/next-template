/** @type {import('next').NextConfig} */

/*
  TODO: get remotePatterns hostname|port from .env (API_URL)
*/

const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337'
			}
		]
	}
}

export default nextConfig
