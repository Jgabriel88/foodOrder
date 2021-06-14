import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
	return (
		<>
			<header classes={classes.header}>
				<h1>ReactMeals</h1>
				<button>Cart</button>
			</header>
			<div classes={classes['main-image']}>
				<img src={mealsImage} alt="A table full of food!" />
			</div>
		</>
	);
};

export default Header;
