import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions,
  IconButton, Typography, DialogContentText, FormControl, TextField, Grid,
  Card, CardContent } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import styles from './styles';

class FormModal extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }


  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        <Button 
          variant='outlined' 
          className={classes.buttonStyle}
          onClick={this.handleToggle}>ADD</Button>
        <Dialog
          maxWidth='md'
          open={open}
        >
        {/* <form onSubmit={this.onSubmit}> */}
        <DialogTitle style={{backgroundColor: '#03A9F4'}}>
        </DialogTitle>
          <DialogContent style={{marginTop: '.5rem'}}>
            <Grid container spacing={8}>
              <Grid item xs={6}>
              <FormControl className={classes.textField}>
                <TextField
                  variant='outlined'
                  name='numberPeople'
                  label='Number of People that can accommodate'
                  fullWidth
                  // onChange={this.handleChange}
                />
                </FormControl>
                <FormControl className={classes.textField}>
                <TextField
                  variant='outlined'
                  name='category'
                  label='Category'
                  fullWidth
                  // onChange={this.handleChange}
                />
                </FormControl>
                <FormControl className={classes.textField}>
                <TextField
                  variant='outlined'
                  name='location'
                  label='Specific location for target audience'
                  fullWidth
                  // onChange={this.handleChange}
                />
                </FormControl>
                <FormControl className={classes.textField}>
                <TextField
                   type='datetime-local'
                   name='adtime'
                   label='How long will the ad run'
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // onChange={this.handleChange}
                />
                </FormControl>
                <FormControl className={classes.textField}>
                <TextField
                  variant='outlined'
                  name='email'
                  label='URL of the website'
                  fullWidth
                  // onChange={this.handleChange}
                />
            </FormControl>
              </Grid>
              <Grid item xs={6} style={{textAlign: 'center', marginTop: '5rem'}}>
                <Button 
                  variant="outlined" 
                  component="span" c
                  className={classes.uploadButton}
                  >
                  <Typography align="center">
                    <AddCircle style={{fontSize: '5rem', color: '#03A9F4'}}></AddCircle>
                  </Typography>
                </Button>

              </Grid>
            </Grid>
            
          </DialogContent>
          <DialogActions>
          <Button 
              onClick={this.handleToggle}
              variant='outlined'
              >Cancel
            </Button>		
            <Button
              variant='outlined'
              type='submit'
              >Send
            </Button>			
          </DialogActions>
          {/* </form> */}
        </Dialog>
      </React.Fragment>
    )
  }
}
export default withStyles(styles)(FormModal);