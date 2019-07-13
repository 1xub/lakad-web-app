module.exports = styles = (theme) => ({ //eslint-disable-line
  root: {
    flexGrow: 1,
  },
  navButton: {
    marginRight: theme.spacing.unit * 2
  },
  navTitle: {
    flexGrow: 1,
    color: '#FFFFFF'
  },
  toolbarColor: {
    backgroundColor: '#0288D1'
  },
  body: {
    margin: '2rem 2rem 0 2rem',
  },
  cardMedia: {
    height: 0,
    paddingTop: '50%', // 16:9
  },
  cardAvatar: {
    backgroundColor: '#0288D1',
  },
  cardChip: {
    padding: '0 .2rem 0 .2rem',
    margin: 2,
    color: '#03A9F4' 
  },
  iconColor: {
    color: '#03A9F4'
  },
  textField: {
		width: '100%',
		color: '#03A9F4',
		fontSize: 14,
		paddingTop: 8,
		paddingBottom: 18,
	},
	buttonStyle: {
		backgroundColor: '#03A9F4',
		border: '1px solid #03A9F4',
		padding: '0.8rem 1rem',
		width: '20%',
		margin: '1rem 0',
		color: '#fff',
		fontSize: 14,
		'&:hover': {
			color: '#03A9F4',
			border: '1px solid #03A9F4',
			transition: 'all 0.5s ease-out',
		}
  },
  uploadButton: {
    padding: '4rem',
    width: '50%',
  },
  input: {
    display: 'none'
  }
})