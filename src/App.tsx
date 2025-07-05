import { useMemo } from "react";
import { Game } from "./components/Game";

const quizz =
	"004300209005009001070060043006002087190007400050083000600000105003508690042910300";

const solution =
	"864371259325849761971265843436192587198657432257483916689734125713528694542916378";

export function App() {
	const quizzArray = useMemo(() => {
		return quizz.split("").map((cell) => {
			const value = Number(cell);
			return value;
		});
	}, []);

	const solutionArray = useMemo(() => {
		return solution.split("").map((cell) => {
			const value = Number(cell);
			return value;
		});
	}, []);

	return (
		<div className="flex flex-col gap-4 m-4">
			<h1 className="text-2xl font-bold text-center">Sudoku Game</h1>
			<Game quizz={quizzArray} solution={solutionArray} />
		</div>
	);
}
