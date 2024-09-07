import React from "react"
import { templates } from "@/templates/slack"
import { Message } from "slack-blocks-to-jsx"
import { images } from "@/images"

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

export const SlackTemplates = () => {
	return (
		<div className="columns-1 lg:columns-3 gap-6 pt-14">
			{all_templates.map(({ type, template, color }, index) => {
				return (
					<div
						className="p-6 bg-white rounded-lg mb-6 break-inside-avoid flex flex-col relative gap-4"
						key={index}
					>
						<Message
							logo={images.logo_placeholder}
							name="Your Company"
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
					</div>
				)
			})}
		</div>
	)
}
