import { cn } from "@/lib/utils";

export type CellProps = {
	value: number;
	isSelected: boolean;
	isSolved: boolean;
	onSelect: (value: number) => void;
};

export function Cell({ value, isSelected, isSolved, onSelect }: CellProps) {
	return (
		<button
			type="button"
			onClick={() => onSelect(value)}
			className={cn(
				"border-2 rounded-lg flex items-center justify-center min-w-8 min-h-8",
				isSolved ? "border-green-500" : "",
				isSelected ? "bg-blue-100" : "bg-white",
			)}
		>
			<div>{value === 0 ? "" : value}</div>
		</button>
	);
}
