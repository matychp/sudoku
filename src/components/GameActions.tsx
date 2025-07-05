import { Button } from "./ui/button";

type GameActionsProps = {
	onNewGame: () => void;
	onReset: () => void;
};

export function GameActions({ onNewGame, onReset }: GameActionsProps) {
	return (
		<div className="flex flex-col gap-2">
			<div className="grid grid-cols-2 gap-4">
				<Button onClick={onNewGame}>New Game</Button>
				<Button disabled variant="secondary" onClick={onReset}>
					Reset
				</Button>
			</div>
		</div>
	);
}
