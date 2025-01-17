import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/common/Button.js';
import GameListContainer from '../gameList/GameList.jsx';
import GameContainer from '../game/Game.jsx';
import { connect } from '../../store/middlewares/lenra.js';
import NewGameContainer from '../newGame/NewGame.jsx';

const AppContainer = () => {
	const dispatch = useDispatch();
	const connecting = useSelector(rootState => rootState.app.connecting);
	const connected = useSelector(rootState => rootState.app.connected);
	const newGame = useSelector(rootState => rootState.app.newGame);
	const currentGameId = useSelector(rootState => rootState.app.currentGameId);

	const onConnect = useCallback((e) => {
		dispatch(connect());
	}, []);

	if (!connecting && !connected) {
		return (
			<Button onClick={onConnect}>Connect</Button>
		);
	}
	else if (connecting) {
		return (
			<div>Loading...</div>
		);
	}
	if (newGame) {
		return (
			<NewGameContainer/>
		);
	}
	if (currentGameId === null) {
		return (
			<GameListContainer />
		);
	}
	return (
		<GameContainer/>
	);
};

export default AppContainer;