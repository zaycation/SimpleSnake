/**
 * /* eslint-disable eqeqeq
 *
 * @format
 */

/* eslint-disable default-case */
import React, { Component } from 'react';

//ui imports
import { Container, Row, Col } from 'shards-react';
import BackgroundImg from '../../snakebg2.jpg';

//file imports

import Snake from '../../Snake';
import Food from '../../Food';

const getRandomCoordinates = () => {
	let min = 1;
	let max = 98;
	let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	return [x, y];
};

const initialState = {
	food: getRandomCoordinates(),
	speed: 200,
	direction: 'RIGHT',
	isPause: false,
	snakeDots: [
		[0, 0],
		[2, 0],
	],
};

class HomePage extends Component {
	state = initialState;

	componentDidMount() {
		setInterval(this.moveSnake, this.state.speed);
		document.onkeydown = this.onKeyDown;
	}

	componentDidUpdate() {
		if (this.state.isPause === false) {
			this.checkIfOutOfBorders();
			this.checkIfCollapsed();
			this.checkIfEat();
		}
	}

	onKeyDown = (e) => {
		e = e || window.event;

		switch (e.keyCode) {
			case 38:
				this.setState({ direction: 'UP', isPause: false });
				break;
			case 87:
				this.setState({ direction: 'UP', isPause: false });
				break;
			case 40:
				this.setState({ direction: 'DOWN', isPause: false });
				break;
			case 83:
				this.setState({ direction: 'DOWN', isPause: false });
				break;
			case 37:
				this.setState({ direction: 'LEFT', isPause: false });
				break;
			case 65:
				this.setState({ direction: 'LEFT', isPause: false });
				break;
			case 39:
				this.setState({ direction: 'RIGHT', isPause: false });
				break;
			case 68:
				this.setState({ direction: 'RIGHT', isPause: false });
				break;
			case 32:
				this.setState({ direction: 'PAUSE', isPause: true });
				break;
		}
	};

	moveSnake = () => {
		if (this.state.isPause === false) {
			let dots = [...this.state.snakeDots];
			let head = dots[dots.length - 1];
			switch (this.state.direction) {
				case 'RIGHT':
					head = [head[0] + 2, head[1]];
					break;
				case 'LEFT':
					head = [head[0] - 2, head[1]];
					break;
				case 'DOWN':
					head = [head[0], head[1] + 2];
					break;
				case 'UP':
					head = [head[0], head[1] - 2];
					break;
				case 'PAUSE':
					head = [head[0], head[1]];
					break;
			}
			dots.push(head);
			dots.shift();
			this.setState({
				snakeDots: dots,
			});
		}
		return;
	};

	checkIfOutOfBorders() {
		let head = this.state.snakeDots[this.state.snakeDots.length - 1];
		if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
			this.onGameOver();
		}
	}

	checkIfCollapsed() {
		let snake = [...this.state.snakeDots];
		let head = snake[snake.length - 1];
		snake.pop();
		snake.forEach((dot) => {
			if (head[0] == dot[0] && head[1] == dot[1]) {
				this.onGameOver();
			}
		});
	}

	checkIfEat() {
		let head = this.state.snakeDots[this.state.snakeDots.length - 1];
		let food = this.state.food;
		if (head[0] == food[0] && head[1] == food[1]) {
			this.setState({
				food: getRandomCoordinates(),
			});
			this.enlargeSnake();
			this.increaseSpeed();
		}
	}

	enlargeSnake() {
		let newSnake = [...this.state.snakeDots];
		newSnake.unshift([]);
		this.setState({
			snakeDots: newSnake,
		});
	}

	increaseSpeed() {
		if (this.state.speed > 25) {
			this.setState({
				speed: this.state.speed - 25,
			});
		}
	}

	onGameOver() {
		alert(`Game Over. High score: ${this.state.snakeDots.length}`);
		this.setState(initialState);
	}

	render() {
		return (
			<div className='main'>
				{/* <div>
					<StickyNav />
				</div> */}

				<Container
					fluid
					style={{
						backgroundImage: `url(${BackgroundImg})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						opacity: '1.0',
					}}
					className='main-container'>
					<Row>
						<Col>
							<div>
								<div
									className='game-area'
									style={{
										backgroundColor: '#343a40',
										backgroundPosition: 'center',
										backgroundSize: 'cover',
										backgroundRepeat: 'no-repeat',
										opacity: '0.99',
									}}>
									<Snake snakeDots={this.state.snakeDots} />
									<Food dot={this.state.food} />
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default HomePage;
