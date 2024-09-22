import { Header, Templates } from "@/components"

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col">
			<div className="w-full py-1 px-2 bg-gray-200">
				<p className="text-center text-sm">
					Want to effortlessly render Slack messages in React?{" "}
					<a
						href="https://slack-block-to-jsx-playground.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 underline"
					>
						Open playground
					</a>
				</p>
			</div>

			<div className="flex flex-col bg-[#fff] px-6 items-center">
				<Header />

				<div className="flex flex-col gap-4 py-32 items-center text-center relative max-w-7xl w-full">
					<div className="absolute w-16 h-16 bg-red-500 rounded-full top-[15%] left-[10%] opacity-50"></div>
					<div className="absolute w-24 h-24 bg-blue-500 rounded-full bottom-[20%] right-[5%] opacity-50"></div>
					<div className="absolute w-12 h-12 bg-green-500 rounded-full top-[20%] left-[80%] opacity-50"></div>
					<div className="absolute w-20 h-20 bg-yellow-400 rounded-full bottom-[30%] left-[20%] opacity-50"></div>

					<div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
						Beta
					</div>
					<h1 className="text-5xl font-bold max-w-3xl">
						Ready-made message templates for Slack and MS Teams
					</h1>
					<p className="text-xl text-gray-600 max-w-xl">
						Welcome messages, introductions, community updates, surveys, and
						much more
					</p>
				</div>
			</div>

			<Templates />
		</main>
	)
}
