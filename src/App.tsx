import { useEffect, useState } from "react";
import { Game } from "./components/Game";
import { GameActions } from "./components/GameActions";
import sudokus from "./sudoku.json";

export function App() {
	const [loading, setLoading] = useState(true);
	const [quizz, setQuizz] = useState<number[]>([]);
	const [solution, setSolution] = useState<number[]>([]);

	function newGame() {
		setLoading(true);

		const { quizzes, solutions } = pickAGame();

		const quizz = quizzes.split("").map((cell) => {
			const value = Number(cell);
			return value;
		});

		const solution = solutions.split("").map((cell) => {
			const value = Number(cell);
			return value;
		});

		setQuizz(quizz);
		setSolution(solution);
		setLoading(false);
	}

	function pickAGame() {
		const randomIndex = Math.floor(Math.random() * sudokus.length);
		const { quizzes, solutions }: { quizzes: string; solutions: string } =
			sudokus[randomIndex];
		return { quizzes, solutions };
	}

	useEffect(() => {
		newGame();
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p className="text-lg">Loading...</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-4 m-4">
			<h1 className="text-2xl font-bold text-center">Sudoku Game</h1>
			<GameActions onNewGame={newGame} onReset={() => {}} />
			<Game key={quizz.toString()} quizz={quizz} solution={solution} />
		</div>
	);
}
