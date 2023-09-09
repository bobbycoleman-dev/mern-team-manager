import { useState } from "react";

const PlayerList = (props) => {
	const { players, deletePlayer, setPlayers } = props;

	const confirm = (playerId) => {
		const newList = players.map((onePlayer) => {
			if (onePlayer._id === playerId) {
				return { ...onePlayer, confirmDelete: true };
			} else {
				return onePlayer;
			}
		});
		setPlayers(newList);
	};

	const confirmDelete = (playerId) => {
		deletePlayer(playerId);
	};

	return (
		<div className="border rounded p-3 shadow">
			<table className="table align-middle text-center">
				<thead className="table-light">
					<tr>
						<th className="w-50">Player Name</th>
						<th className="w-25">Preferred Position</th>
						<th className="w-25">Actions</th>
					</tr>
				</thead>
				<tbody>
					{players &&
						players.map((player, idx) => {
							return (
								<tr key={idx}>
									<td>
										{player.name} {`${player.confirmDelete}`}
									</td>
									<td>{player.position}</td>
									<td>
										{!player.confirmDelete ? (
											<button className="btn btn-danger" onClick={() => confirm(player._id)}>
												Delete
											</button>
										) : (
											<button
												className="btn btn-warning"
												onClick={() => confirmDelete(player._id)}>
												Confirm Delete?
											</button>
										)}
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default PlayerList;
