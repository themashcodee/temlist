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
				text: "🎉 *Welcome to [Workspace Name], <@newuser>!* 🎉\nWe’re so excited to have you here! Feel free to introduce yourself and ask questions.",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "👋 Hey <@newuser>, welcome to *[Workspace Name]*! We're thrilled to have you. Check out the <#general> channel for updates and our <#resources> channel for tips and tools!",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "🎉 *Welcome aboard, <@newuser>!* 🎉\nLet’s get the celebration started! Jump into any conversation and say hi!",
			},
		},
		{
			type: "actions",
			elements: [
				{
					type: "button",
					text: {
						type: "plain_text",
						text: "Introduce Yourself",
						emoji: true,
					},
					value: "introduce_yourself",
				},
				{
					type: "button",
					text: {
						type: "plain_text",
						text: "Explore Channels",
						emoji: true,
					},
					value: "explore_channels",
				},
			],
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "🙌 Welcome to the team, <@newuser>! We’re happy to have you with us. Jump right into the conversation or ask if you need help!",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "🚀 *Welcome, <@newuser>!* Tell us a fun fact about yourself or your favorite hobby to break the ice!",
			},
		},
		{
			type: "actions",
			elements: [
				{
					type: "button",
					text: {
						type: "plain_text",
						text: "Share a Fun Fact",
						emoji: true,
					},
					value: "share_fun_fact",
				},
			],
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "👋 Hey <@newuser>! Welcome to *[Workspace Name]*. We’re glad you’re here. Got questions? Check out our <https://faq-link.com|FAQ> or ask any of us!",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "🎉 Hi <@newuser>! Welcome to *[Workspace Name]*! Here’s a quick guide to get started: \n• Join our <#random> for fun! \n• Visit <#help> for support.",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "👋 Welcome, <@newuser>! To break the ice, what’s the most random fact you know? Feel free to share in the chat!",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "🎉 *Yay, <@newuser> just joined [Workspace Name]!*\nReact with your favorite emoji to give a warm welcome!",
			},
		},
	],
]

const new_member_intro: Block[][] = [
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
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: ":wave: Hello, I'm <@newuser>!\n:earth_americas: Location: New York City, NY\n:computer: Work: Product Management @ XYZ Company\n:sparkling_heart: Hobbies: food, travel, games",
			},
		},
	],
]

const team_survey: Block[][] = [
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

const meeting_reminder: Block[][] = [
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

const events: Block[][] = [
	[
		{
			type: "header",
			text: {
				type: "plain_text",
				text: ":calendar: My Event",
				emoji: true,
			},
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "*Host*: <@userid>\n*Speakers*: <@userid>, George Washington, Abraham Lincoln \n*Start*: <!date^1392734382^{date_short_pretty} {time}| > \n*End*: <!date^1392836382^{date_short_pretty} {time}| > \n:bust_in_silhouette:  In Person / :globe_with_meridians: Online \n:round_pushpin: 1 Market Street, San Francisco, CA 94105 \n:link: https://my-conference.call/2",
			},
			accessory: {
				type: "image",
				image_url:
					"https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg",
				alt_text: "Event Image",
			},
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Join us for My Event, a groundbreaking tech summit where industry leaders and innovators will explore the latest advancements in artificial intelligence, robotics, and machine learning. Attendees will experience hands-on workshops, keynote sessions from top AI experts, and networking opportunities with tech enthusiasts from around the globe.",
			},
		},
	],
]

const announcement: Block[][] = [
	[
		{
			type: "header",
			text: {
				type: "plain_text",
				text: ":mega: Announcements - March 6, 2024",
				emoji: true,
			},
		},
		{
			type: "image",
			image_url:
				"https://as2.ftcdn.net/v2/jpg/04/26/04/61/1000_F_426046170_Bshw7CccMbBLIFd9PCdLdKv3XRSkgFMh.jpg",
			alt_text: "Announcements Banner",
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "*New Feature* \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "*New Changes* \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			accessory: {
				type: "image",
				image_url:
					"https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg",
				alt_text: "Announcement image",
			},
		},
		{
			type: "divider",
		},
		{
			type: "context",
			elements: [
				{
					type: "mrkdwn",
					text: ":bulb: For more information, please <https://www.google.com|contact support>.",
				},
			],
		},
	],
]

const farewell: Block[][] = [
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Today is a bittersweet day as we say goodbye to <@user>, who has been an amazing part of our team! :wave: We're incredibly grateful for the contributions you've made and the positive energy you've brought.",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "*Here's a quick look back at some of <@user>'s achievements and contributions:*",
			},
		},
		{
			type: "section",
			fields: [
				{
					type: "mrkdwn",
					text: "*Projects Completed:* Project A, Project B, Project C",
				},
				{
					type: "mrkdwn",
					text: "*Key Strengths:* Leadership, Creativity, Team Collaboration",
				},
			],
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "We're going to miss you, but we wish you all the success in your next chapter! :tada:",
			},
		},
	],
]

const goodbye: Block[][] = [
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "It's <@user>'s last day with us today! :sob: We're sad to see you go but excited for your new journey ahead.",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Feel free to drop a message here to wish <@user> good luck and share your favorite memories! :memo:",
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
						text: "Send Best Wishes",
						emoji: true,
					},
					value: "send_wishes",
				},
				{
					type: "button",
					text: {
						type: "plain_text",
						text: "Share a Memory",
						emoji: true,
					},
					value: "share_memory",
				},
			],
		},
	],
]

const last_working_day: Block[][] = [
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: ":wave: As <@user> prepares to leave us today, we'd love to hear your thoughts on what they meant to the team. What will you miss most? Feel free to fill out this quick survey to share your thoughts.",
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
						text: "Complete Survey",
						emoji: true,
					},
					url: "[Survey URL]",
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
				text: "Thank you, <@user>, for everything you've contributed to our team! :heart:",
			},
		},
	],
]

const diversity_n_inclusion: Block[][] = [
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: ":rainbow: *Diversity Week is here!* This week, we're celebrating the unique backgrounds, cultures, and perspectives that each of us brings to the table. Let's embrace our differences and learn from one another.",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "We encourage everyone to share a story, experience, or fun fact about your culture in the <#diversity-and-inclusion> channel. :speech_balloon:",
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
						text: "Share Your Story",
						emoji: true,
					},
					value: "share_story",
				},
			],
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: ":star2: *Inclusion Spotlight:* We're committed to creating an environment where everyone feels valued and heard. This week, we want to highlight stories of how our team members make each other feel included.",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Do you have a moment when a colleague went out of their way to make you feel welcome? Share it with us! :raised_hands:",
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
						text: "Share Your Experience",
						emoji: true,
					},
					value: "share_experience",
				},
			],
		},
	],

	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: ":books: *Join our Diversity & Inclusion Learning Session!* We're hosting an interactive session to learn more about the importance of diversity and how we can all contribute to a more inclusive workplace.",
			},
		},
	],
	[
		{
			type: "section",
			fields: [
				{
					type: "mrkdwn",
					text: "*Date:* [Session Date]",
				},
				{
					type: "mrkdwn",
					text: "*Time:* [Session Time]",
				},
				{
					type: "mrkdwn",
					text: "*Location:* [Meeting Room/Online Link]",
				},
			],
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
						text: "Register Now",
						emoji: true,
					},
					url: "[Registration Link]",
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
				text: ":earth_africa: *Cultural Celebrations Alert!* We want to celebrate the diverse holidays and traditions of our team members. This month, we're highlighting [Holiday Name] and inviting everyone to learn about its significance.",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "If you celebrate this holiday or have insights to share, feel free to drop a message in <#culture-channel>. Let's enrich our knowledge together! :sparkles:",
			},
		},
	],
]

const end_of_year_thank_you_messages: Block[][] = [
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "🎉 *As we wrap up this year, we want to extend a heartfelt thank you to each one of you!* Your dedication, hard work, and passion have made this year a remarkable success. We couldn’t have done it without you!",
			},
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Here’s to the achievements we’ve accomplished together and the new heights we'll reach in the coming year. Happy Holidays and a Happy New Year! :sparkles:",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "✨ *Thank you for an amazing year, team!* Your efforts, teamwork, and unwavering spirit have driven us forward, and we couldn’t be more proud of what we’ve achieved together.",
			},
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Wishing you all a wonderful holiday season filled with joy, relaxation, and time spent with loved ones. Let’s make next year even more extraordinary! 🎆",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "🌟 *Thank you, team, for all your hard work and dedication this year!* It’s been a year of growth, challenges, and incredible achievements, and each of you has played a crucial role in our journey.",
			},
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Take this time to relax, recharge, and celebrate all that we’ve accomplished. Here’s to a bright and prosperous new year ahead! 🥂",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "🎊 *As the year comes to a close, we want to say a big thank you for your hard work, resilience, and contributions.* Every success we’ve achieved this year has been made possible by your dedication and teamwork.",
			},
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Wishing you a restful holiday season and a Happy New Year. Here’s to new opportunities, goals, and achievements in the coming year! 🎇",
			},
		},
	],
	[
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "💫 *Thank you all for your amazing efforts this year!* It’s been a year full of challenges, and your commitment has made all the difference. Together, we’ve reached incredible milestones, and we couldn’t be prouder.",
			},
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "Enjoy the holiday season with your loved ones, and let’s come back refreshed and ready to make the next year even more successful! 🌟",
			},
		},
	],
]

export const templates = {
	welcome,
	new_member_intro,
	team_survey,
	meeting_reminder,
	events,
	announcement,
	farewell,
	goodbye,
	last_working_day,
	diversity_n_inclusion,
	end_of_year_thank_you_messages,
}
