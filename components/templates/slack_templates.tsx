import React, { useState } from "react"
import { templates } from "@/templates/slack"
import { Message } from "slack-blocks-to-jsx"
import { motion } from "framer-motion"

const all_templates = [
	...templates.welcome.map((template) => ({
		type: "Welcome",
		template,
		color: "bg-blue-500",
	})),
	...templates.newMemberIntro.map((template) => ({
		type: "New Member Intro",
		template,
		color: "bg-green-500",
	})),
	...templates.teamSurvey.map((template) => ({
		type: "Team Survey",
		template,
		color: "bg-purple-500",
	})),
	...templates.meetingReminder.map((template) => ({
		type: "Meeting Reminder",
		template,
		color: "bg-orange-500",
	})),
]

const templateTypes = [...new Set(["All", ...all_templates.map((t) => t.type)])]

export const SlackTemplates = () => {
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedType, setSelectedType] = useState("All")

	const filteredTemplates = all_templates.filter((template) => {
		const text_check = template.template.some(
			(block) =>
				block.type === "section" &&
				block.text?.text.toLowerCase().includes(searchTerm.toLowerCase())
		)

		return (
			(selectedType === "All" || template.type === selectedType) &&
			(searchTerm === "" ||
				template.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
				text_check)
		)
	})

	return (
		<div className="flex flex-col gap-6 pt-14">
			<div className="flex sm:flex-row flex-col sm:items-center gap-4">
				<input
					type="text"
					placeholder="Search"
					className="grow h-10 rounded-md border bg-white px-4 focus:outline-black"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>

				<div className="relative">
					<select
						className="h-10 rounded-md w-full sm:w-auto border bg-white px-4 pr-8 focus:outline-black appearance-none"
						value={selectedType}
						onChange={(e) => setSelectedType(e.target.value)}
					>
						{templateTypes.map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</select>

					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m19.5 8.25-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</div>
				</div>
			</div>

			<div className="columns-1 lg:columns-3 gap-6">
				{filteredTemplates.map(({ type, template, color }, index) => {
					return (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.01, duration: 0.2 }}
							className="p-6 bg-white rounded-lg mb-6 break-inside-avoid flex flex-col relative gap-4"
							key={index}
						>
							<Message
								logo="https://a.slack-edge.com/80588/img/blocks/bkb_template_images/approvalsApp.png"
								name="John Doe"
								blocks={template}
							/>

							<div className="bg-gray-100 h-[1px]"></div>

							<div className="flex items-center justify-between gap-4">
								<div
									className={`px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full`}
								>
									{type}
								</div>

								<div>
									<div className="flex gap-2">
										<button
											className="px-3 py-1 text-sm font-medium text-gray-700 outline outline-gray-200 rounded hover:bg-gray-50 transition"
											onClick={() => {
												navigator.clipboard.writeText(
													JSON.stringify({ blocks: template })
												)
											}}
										>
											Copy blocks
										</button>
										<a
											className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition"
											href={`https://app.slack.com/block-kit-builder#${encodeURIComponent(
												JSON.stringify({ blocks: template })
											)}`}
											target="_blank"
										>
											Send
										</a>
									</div>
								</div>
							</div>
						</motion.div>
					)
				})}
			</div>
		</div>
	)
}
