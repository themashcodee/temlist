import type { Metadata } from "next"
import { Outfit, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import "slack-blocks-to-jsx/dist/style.css"

const font = Bricolage_Grotesque({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Temlist",
	description: "Ready-made message templates for Slack and MS Teams",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	)
}
