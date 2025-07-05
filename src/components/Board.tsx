import { Cell, type CellProps } from "./Cell";

type BoardProps = {
	quizz: number[];
	solution: number[];
	selectedCell: number | null;
} & Pick<CellProps, "onSelect">;

export function Board({ quizz, solution, selectedCell, onSelect }: BoardProps) {
	return (
		<div className="grid grid-cols-9 gap-1">
			{quizz.map((value, index) => {
				const solutionValue = solution[index];

				return (
					<Cell
						key={Math.random()}
						value={value}
						isSelected={selectedCell === index}
						isSolved={value === solutionValue}
						onSelect={() => onSelect(index)}
					/>
				);
			})}
		</div>
	);
}
