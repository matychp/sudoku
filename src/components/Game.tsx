import { useState } from "react";
import { Board } from "./Board";
import { CellInput } from "./CellInput";

type GameProps = {
	quizz: number[];
	solution: number[];
};

export function Game({ quizz, solution }: GameProps) {
	const [userAnswers, setUserAnswers] = useState<number[]>(quizz);
	const [selectedCellPosition, setSelectedCellPosition] = useState<
		number | null
	>(null);

	function handleSelectAnswer(answer: number) {
		if (selectedCellPosition === null) return;

		const updatedAnswers = [...userAnswers];
		updatedAnswers[selectedCellPosition] = answer;
		setUserAnswers(updatedAnswers);

		const isSolved = updatedAnswers.every(
			(value, index) => value === solution[index],
		);

		if (isSolved) {
			alert("Congratulations! You solved the Sudoku!");
			setUserAnswers(quizz); // Reset to original quizz
			setSelectedCellPosition(null); // Deselect cell
		}
	}

	return (
		<>
			<Board
				quizz={userAnswers}
				solution={solution}
				selectedCell={selectedCellPosition}
				onSelect={setSelectedCellPosition}
			/>
			{selectedCellPosition !== null && (
				<CellInput onSelect={handleSelectAnswer} />
			)}
		</>
	);
}
