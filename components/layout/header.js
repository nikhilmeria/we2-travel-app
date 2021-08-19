import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		textAlign: 'center',
	},
	appbar: {
		marginBottom: 20,
		backgroundColor: '#cc0000',
	},
}));

const Header = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="sticky" className={classes.appbar}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					></IconButton>
					<Typography variant="h6" className={classes.title}>
						Youtube App
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
