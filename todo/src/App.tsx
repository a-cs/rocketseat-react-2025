import Text from "./components/text";

export default function App() {

	return (
		<div className="flex flex-col gap-2">
			<Text variant="body-sm-bold" className="text-pink-dark">
				Hello
			</Text>
			<Text className="text-green-base">
				Hello
			</Text>
			<Text variant="body-md-bold">
				Hello
			</Text>
			<Text >
				Levar o Bob para passear
			</Text>
		</div>
	)
}
