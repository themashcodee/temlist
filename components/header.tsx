import React from "react"
import Image from "next/image"
import { images } from "@/images"

export const Header = () => {
	return (
		<header className="flex justify-between items-center p-4 border-b h-20 max-w-7xl w-full">
			<div className="text-2xl font-medium flex items-center gap-2">
				<Image src={images.logo} alt="logo" width={24} height={24} />
				<span>Temlist</span>
			</div>

			<ul className="flex space-x-4">
				<li>
					<a
						href="https://www.linkedin.com/in/themashcodee"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-900"
					>
						LinkedIn
					</a>
				</li>
				<li>
					<a
						href="https://github.com/themashcodee"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-900"
					>
						GitHub
					</a>
				</li>
				<li>
					<a
						href="https://www.buymeacoffee.com/themashcodee"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-900"
					>
						Donate
					</a>
				</li>
			</ul>
		</header>
	)
}