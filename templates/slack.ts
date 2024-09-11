import { Block } from "slack-blocks-to-jsx";

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
];

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
  [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":wave: Hello, I'm <@newuser>!\n:earth_americas: Location: New York City, NY\n:computer: Work: Product Management @ XYZ Company\n:sparkling_heart: Hobbies: food, travel, games",
      },
    },
  ],
];

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
];

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
];

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
];

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
];

export const templates = {
  welcome,
  newMemberIntro,
  teamSurvey,
  meetingReminder,
  events,
  announcement,
};
