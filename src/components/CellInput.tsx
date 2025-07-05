import { Button } from "./ui/button";

type CellInputProps = {
	onSelect: (value: number) => void;
};

export function CellInput({ onSelect }: CellInputProps) {
	return (
		<div className="grid grid-cols-3 absolute left-0 bottom-0 w-full gap-8 mb-8">
			{Array.from({ length: 9 }, (_, i) => i + 1).map((number) => (
				<div key={number} className="flex justify-center">
					<Button
						variant="outline"
						size="icon"
						onClick={() => onSelect(number)}
					>
						{number}
					</Button>
				</div>
			))}
		</div>
	);
}
