import React from "react"
import Lottie from "react-lottie"
import coding from "@/lottie/coding.json"

export const MsteamsTemplates = () => {
	return (
		<div className="flex flex-col items-center justify-center h-full text-center pt-4">
			<div>
				<Lottie options={{ animationData: coding }} height={250} width={450} />
			</div>

			<h2 className="text-2xl font-semibold my-4">
				Teams Templates Are Coming Soon!
			</h2>
			<p className="text-lg text-gray-600 max-w-lg">
				We’re crafting some incredible Adaptive Cards for Microsoft Teams. Hang
				tight, and they’ll be available soon!
			</p>
			<p className="text-sm text-gray-500 mt-4">
				(While you wait, our Slack templates are ready and waiting to impress!)
			</p>
		</div>
	)
}
