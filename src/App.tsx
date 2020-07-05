import React, { useState } from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import SubscriptionsIcon from '@material-ui/icons/SubscriptionsRounded'
import WhatshotIcon from '@material-ui/icons/WhatshotRounded'
import MusicNoteIcon from '@material-ui/icons/MusicNoteRounded'
import MenuIcon from '@material-ui/icons/Menu'
import { TextField } from '@material-ui/core'

interface CardPricing {
		title: string,
		badge?: string,
		price: string,
		description: string [],
		buttonText: string,
		buttonVariant: "outlined" | "contained" | "text" | undefined,
}

const plans : CardPricing[] = [
	{
		title: 'Free',
		price: '0',
		description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
		buttonText: 'Sign up for free',
		buttonVariant: 'outlined',
	},
	{
		title: 'Pro',
		badge: 'Best Value',
		price: '15',
		description: [
			'20 users included',
			'10 GB of storage',
			'Help center access',
			'Priority email support',
		],
		buttonText: 'Get started',
		buttonVariant: 'contained',
	},
	{
		title: 'Enterprise',
		price: '30',
		description: [
			'50 users included',
			'30 GB of storage',
			'Help center access',
			'Phone & email support',
		],
		buttonText: 'Contact us',
		buttonVariant: 'outlined',
	},
];

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		'@global': {
			ul: {
				margin: 0,
				padding: 0,
				listStyle: 'none',
			},
			hr: {
				margin: theme.spacing(6, 0, 6)
			}
		},
		appBar: {
			zIndex: theme.zIndex.modal + 1,
			background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
		},
		menuIcon: {
			marginRight: theme.spacing(2)
		},
		grow: {
			flexGrow: 1
		},
		signupButton: {
			marginRight: theme.spacing(1)
		},
		drawerList: {
			width: 300
		},
		jumbotron: {
			background: '#666',
			height: 300,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		planscontainer: {
			padding: theme.spacing(6, 0, 6)
		},
		planstitle: {
			fontSize: '2.6rem'
		},
		planssubtitle: {
			fontSize: '1.2rem',
			fontWeight: 'lighter'
		},
		cardHeader: {
			backgroundColor: theme.palette.grey[200]
		},
		cardPricing: {
			display: 'flex',
			alignItems: 'baseline',
			justifyContent: 'center',
			marginBottom: theme.spacing(1)
		}
	}))

const App = () => {
	const classes = useStyles()

	const [drawerOpen, setDrawerOpen] = useState(false)

	const toggleDrawer = () => setDrawerOpen(!drawerOpen)

	return (
		<div>
			<CssBaseline />
			<AppBar
				className={classes.appBar}
				color='secondary'
			>
				<Toolbar>
					<IconButton
						className={classes.menuIcon}
						edge="start"
						color='inherit'
						onClick={toggleDrawer}
					><MenuIcon />
					</IconButton>

					<Typography
						className={classes.grow}
						variant='h6'
					>
						Brand Name
					</Typography>

					<Button
						className={classes.signupButton}
						color='inherit'
						disableElevation
					>
						Signup
					</Button>
					<Button
						variant="contained"
						disableElevation
					>
						Login
					</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				anchor='left'
				open={drawerOpen}
				onClose={toggleDrawer}
				onKeyDown={toggleDrawer}
			>
				<Toolbar />
				<List
					className={classes.drawerList}
					component='nav'
				>
					<ListItem button>
						<ListItemIcon>
							<SubscriptionsIcon />
						</ListItemIcon>
						<ListItemText primary='Subscriptions' />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<WhatshotIcon />
						</ListItemIcon>
						<ListItemText primary='Trending' />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<MusicNoteIcon />
						</ListItemIcon>
						<ListItemText primary='Music' />
					</ListItem>
				</List>
			</Drawer>
			<Toolbar />

			<Box className={classes.jumbotron}>
				<Box width='90%' color='white'>
					<Typography variant='h2'>Jumbotron Title</Typography>
					<Typography variant='h5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, nihil!</Typography>
				</Box>
			</Box>

			<Container maxWidth='sm' className={classes.planscontainer}>
				<Typography align='center' variant='h4' className={classes.planstitle}><b>Plans and Pricing</b></Typography>
				<Typography align='center' variant='subtitle1' className={classes.planssubtitle} color='textSecondary'>
					Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Maiores doloribus voluptatem
					quidem.
					</Typography>
			</Container>

			<Container maxWidth='md'>
				<Grid container spacing={5}>
					{
						plans.map(p => (
							<Grid item xs={12} sm={p.title === 'Enterprise' ? 12 : 6} md={4} key={p.title}>
								<Card>
									<CardHeader className={classes.cardHeader} title={p.title} titleTypographyProps={{ align: 'center' }} />

									<CardContent>
										<div className={classes.cardPricing}>
											<Typography variant='h3' color='textPrimary'>{p.price}</Typography>
											<Typography variant='h6' color='textSecondary'>/mo</Typography>
										</div>

										<ul>
											{
												p.description.map(d => (
													<Typography component='li' variant='subtitle1' align='center' key={d}>
														{d}
													</Typography>
												))
											}
										</ul>
									</CardContent>

									<CardActions>
										<Button variant={p.buttonVariant} color='primary' size='large'
											fullWidth disableRipple
										>
											{p.buttonText}
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))
					}
				</Grid>
			<hr />
			</Container>
		
			
			<Container maxWidth='md'>
				<Typography variant='h2' paragraph>Create an Account</Typography>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField variant='outlined' label='Email' fullWidth/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField variant='outlined' label='Password' type='password' fullWidth/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField variant='outlined' label='Username' fullWidth/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField variant='outlined' label='Fullname' fullWidth/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Button variant='contained' color='primary' size='large' fullWidth>Create Account</Button>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default App
