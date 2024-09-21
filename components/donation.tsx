import React from "react"
import Image from "next/image"
import { images } from "@/images"

export const Donation = () => {
	return (
		<div className="max-w-7xl">
			<div className="w-full rounded-xl border bg-white border-black p-8 flex flex-row items-center justify-between gap-8">
				<div className="flex flex-col items-start text-left">
					<h3 className="text-xl font-medium mb-3">
						A Sip of Kindness Goes a Long Way in Our Creative Journey! ☕🌸
					</h3>
					<p className="mb-3 text-gray-500">
						Just like a cozy cup of coffee on a chilly morning, your support
						brings warmth and inspiration to our message-making process. With
						your help, we’ll continue spreading joy through beautiful,
						thoughtful templates!
					</p>
					<a
						href="https://www.buymeacoffee.com/themashcodee"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-3 px-5 py-2.5 bg-yellow-400 text-black rounded-lg text-base font-medium hover:bg-yellow-500 transition-colors"
					>
						Spread Some Love ❤️
					</a>
				</div>

				<div className="hidden flex-col items-center gap-3 shrink-0 sm:flex">
					<a
						href="https://www.buymeacoffee.com/yourname"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							width={100}
							height={100}
							src={images.buymeacoffee_qr}
							alt="Buy me a coffee QR code"
						/>
					</a>
					<p className="text-sm text-gray-600 text-center">
						Scan to send caffeine
						<br /> directly to our veins!
					</p>
				</div>
			</div>
		</div>
	)
}
