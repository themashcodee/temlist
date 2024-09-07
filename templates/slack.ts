import { Block } from "slack-blocks-to-jsx"

const welcome: Block[][] = [
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Hello and welcome to our workspace! :wave: We're excited to have you join our team.",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Here are a few things to get you started:",
			},
		},
		{
			type: "section",
			fields: [
				{
					type: "mrkdwn",
					text: "*#introductions*\nIntroduce yourself in this channel!",
				},
				{
					type: "mrkdwn",
					text: "*#general*\nOur main discussion channel for team-wide communication.",
				},
				{
					type: "mrkdwn",
					text: "*#random*\nShare fun stuff, memes, and off-topic conversations here.",
				},
				{
					type: "mrkdwn",
					text: "*#help*\nAsk for assistance or clarification on any work-related matters.",
				},
			],
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "If you have any questions, feel free to ask in the relevant channel or reach out to @hr_team. We're here to help!",
			},
		},
		{
			type: "actions",
			elements: [
				{
					type: "button",
					text: {
						type: "plain_text",
						text: "View Team Directory",
						emoji: true,
					},
					value: "team_directory",
				},
				{
					type: "button",
					text: {
						type: "plain_text",
						text: "Company Handbook",
						emoji: true,
					},
					value: "company_handbook",
				},
			],
		},
	],
]

const newMemberIntro: Block[][] = [
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Hey everyone! :wave: I'm excited to introduce our newest team member!",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "*Name:* [New Member Name]\n*Role:* [New Member Role]\n*Department:* [Department Name]",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "[New Member Name] brings [X] years of experience in [relevant field]. They'll be focusing on [main responsibilities].",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Please join me in giving [New Member Name] a warm welcome! Feel free to reach out and say hello!",
			},
		},
	],
]

const teamSurvey: Block[][] = [
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Hello team! :clipboard: It's time for our quarterly team survey. Your feedback is crucial for improving our work environment.",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Please take a few minutes to complete the survey. It should take no more than 10 minutes of your time.",
			},
		},
	],
	[
		{
			type: "actions",
			elements: [
				{
					type: "button",
					text: {
						type: "plain_text",
						text: "Start Survey",
						emoji: true,
					},
					url: "[Your Survey URL]",
					style: "primary",
				},
			],
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "The survey will close on [closing date]. Thank you for your participation!",
			},
		},
	],
]

const meetingReminder: Block[][] = [
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: ":alarm_clock: Reminder: Team Meeting in 15 minutes!",
			},
		},
	],
	[
		{
			type: "section",
			fields: [
				{
					type: "mrkdwn",
					text: "*Time:* [Meeting Time]",
				},
				{
					type: "mrkdwn",
					text: "*Location:* [Meeting Room/Video Call Link]",
				},
			],
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Agenda:\n• [Agenda Item 1]\n• [Agenda Item 2]\n• [Agenda Item 3]",
			},
		},
	],
	[
		{
			type: "actions",
			elements: [
				{
					type: "button",
					text: {
						type: "plain_text",
						text: "Join Meeting",
						emoji: true,
					},
					url: "[Video Call Link]",
				},
			],
		},
	],
]

export const templates = {
	welcome,
	newMemberIntro,
	teamSurvey,
	meetingReminder,
}
