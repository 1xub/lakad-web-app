import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, CardActions, CardContent, 
  AppBar, Toolbar, IconButton, Button, CardMedia, 
  CardHeader, Avatar, Chip, Tooltip, LinearProgress } from '@material-ui/core';
import { Menu, PeopleOutline, Style, Place, RemoveRedEye, StarBorder, Star, StarHalf } from '@material-ui/icons';
import styles from './styles';
import image1 from '../images/image1.jpeg';
import FormModal from './FormModal';

class Ads extends React.Component {
  constructor() {
    super();
    this.state = {
      completed: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 0) {
      this.setState({ completed: 100 });
    } else {
      const diff = 2;
      this.setState({ completed: Math.min(completed - diff, 100) });
    }
  };

  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <AppBar position="static" className={classes.toolbarColor}>
          <Toolbar >
            {/* <IconButton edge="start" className={classes.navButton} color="inherit" aria-label="Menu">
              <Menu />
            </IconButton> */}
            <Typography variant="h6" className={classes.navTitle}>
              LAKAD
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
        <div className={classes.body}>
          <FormModal />
          <Grid container spacing={16} style={{marginTop: '1rem'}}>
            <Grid item xs={4}>
              <Card>
               <CardHeader
                  avatar={
                    <Avatar className={classes.cardAvatar}>
                      F
                    </Avatar>
                  }
                  title="Food Place"
                />
                <CardMedia
                  className={classes.cardMedia}
                  image={image1}
                />
                <CardContent>
                <Tooltip title="Number of people that can accommodate" placement="top">
                  <Chip
                    icon={<PeopleOutline className={classes.iconColor}/>}
                    label="100+"
                    className={classes.cardChip}
                    variant='outlined'
                  />
                </Tooltip>
                <Tooltip title="Category" placement="top">
                  <Chip
                    icon={<Style className={classes.iconColor}/>}
                    label="Food"
                    className={classes.cardChip}
                    variant='outlined'

                  />
                </Tooltip>
                <Tooltip title="Specific location for target audience" placement="top">
                  <Chip
                    icon={<Place className={classes.iconColor}/>}
                    label="Cebu"
                    className={classes.cardChip}
                    variant='outlined'
                  />
                </Tooltip>
                <Typography variant='caption' style={{marginTop: '.5rem'}}>Views: 100k</Typography>
                <Typography variant='caption' style={{marginTop: '.5rem'}}>Ratings: </Typography> <Typography><Star /><Star /><StarHalf /><StarBorder /><StarBorder /></Typography>
                <LinearProgress style={{color: '#0288D1'}} variant="determinate" value={this.state.completed} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
            <Card>
               <CardHeader
                  avatar={
                    <Avatar className={classes.cardAvatar}>
                      F
                    </Avatar>
                  }
                  title="Food Place"
                />
                <CardMedia
                  className={classes.cardMedia}
                  image={image1}
                />
                <CardContent>
                <Tooltip title="Number of people that can accommodate" placement="top">
                  <Chip
                    icon={<PeopleOutline className={classes.iconColor}/>}
                    label="100+"
                    className={classes.cardChip}
                    variant='outlined'
                  />
                </Tooltip>
                <Tooltip title="Category" placement="top">
                  <Chip
                    icon={<Style className={classes.iconColor}/>}
                    label="Food"
                    className={classes.cardChip}
                    variant='outlined'

                  />
                </Tooltip>
                <Tooltip title="Specific location for target audience" placement="top">
                  <Chip
                    icon={<Place className={classes.iconColor}/>}
                    label="Cebu"
                    className={classes.cardChip}
                    variant='outlined'
                  />
                </Tooltip>
                <Typography variant='caption' style={{marginTop: '.5rem'}}>Views: 100k</Typography>
                <Typography variant='caption' style={{marginTop: '.5rem'}}>Ratings: </Typography> <Typography><Star /><Star /><StarHalf /><StarBorder /><StarBorder /></Typography>
                <LinearProgress style={{color: '#0288D1'}} variant="determinate" value={this.state.completed} />
                </CardContent>
              </Card>
            </Grid><Grid item xs={4}>
            <Card>
               <CardHeader
                  avatar={
                    <Avatar className={classes.cardAvatar}>
                      F
                    </Avatar>
                  }
                  title="Food Place"
                />
                <CardMedia
                  className={classes.cardMedia}
                  image={image1}
                />
                <CardContent>
                <Tooltip title="Number of people that can accommodate" placement="top">
                  <Chip
                    icon={<PeopleOutline className={classes.iconColor}/>}
                    label="100+"
                    className={classes.cardChip}
                    variant='outlined'
                  />
                </Tooltip>
                <Tooltip title="Category" placement="top">
                  <Chip
                    icon={<Style className={classes.iconColor}/>}
                    label="Food"
                    className={classes.cardChip}
                    variant='outlined'

                  />
                </Tooltip>
                <Tooltip title="Specific location for target audience" placement="top">
                  <Chip
                    icon={<Place className={classes.iconColor}/>}
                    label="Cebu"
                    className={classes.cardChip}
                    variant='outlined'
                  />
                </Tooltip>
                <Typography variant='caption' style={{marginTop: '.5rem'}}>Views: 100k</Typography>
                <Typography variant='caption' style={{marginTop: '.5rem'}}>Ratings: </Typography> <Typography><Star /><Star /><StarHalf /><StarBorder /><StarBorder /></Typography>
                <LinearProgress style={{color: '#0288D1'}} variant="determinate" value={this.state.completed} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }

}

export default withStyles(styles)(Ads);
