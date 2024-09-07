"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { MSTeams, Slack } from "../icons"
import { SlackTemplates } from "./slack_templates"
import { MsteamsTemplates } from "./msteams_templates"
import { Donation } from "../donation"

let tabs = [
	{ id: "slack", label: "Slack" },
	{ id: "msteams", label: "MS Teams" },
]

export const Templates = () => {
	const [activeTab, setActiveTab] = useState(tabs[0].id)

	return (
		<div className="bg-[#F6F4F1] w-full flex items-center grow flex-col py-24 gap-20 px-6">
			<div className="flex flex-col w-full max-w-7xl items-center">
				<div className="flex items-center gap-4">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`relative px-5 text-lg py-1.5 font-medium rounded-full transition focus-visible:outline-2`}
							style={{
								WebkitTapHighlightColor: "transparent",
							}}
						>
							{activeTab === tab.id && (
								<motion.span
									layoutId="bubble"
									className="absolute inset-0 z-10 outline outline-black bg-white"
									style={{ borderRadius: 9999 }}
									transition={{
										type: "spring",
										bounce: 0.2,
										duration: 0.6,
									}}
								/>
							)}

							<div className="flex items-center gap-2 relative z-20">
								{tab.id === "slack" && <Slack />}
								{tab.id === "msteams" && <MSTeams />}
								<span>{tab.label}</span>
							</div>
						</button>
					))}
				</div>

				<div className="border-gray-300 w-full">
					{activeTab === "slack" && <SlackTemplates />}
					{activeTab === "msteams" && <MsteamsTemplates />}
				</div>
			</div>

			<div className="fixed left-0 bottom-0 w-full py-1 px-2 bg-white border border-black">
				<p className="text-center text-sm text-gray-600">
					Feel free to add more templates by contributing to the project on{" "}
					<a
						href="https://github.com/themashcodee/temlist"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline"
					>
						this GitHub repo
					</a>
					, or just message me on{" "}
					<a
						href="https://www.linkedin.com/in/themashcodee/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline"
					>
						LinkedIn
					</a>{" "}
					or email me at{" "}
					<a
						href="mailto:codeemash@gmail.com"
						className="text-blue-600 hover:underline"
					>
						codeemash@gmail.com
					</a>{" "}
					to request more templates.
				</p>
			</div>

			{activeTab === "slack" && <Donation />}
		</div>
	)
}
