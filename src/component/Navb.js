import React from 'react'
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import TextsmsIcon from '@material-ui/icons/Textsms'
const Navb = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Grid container>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <AddCircleOutlineIcon />
            </Grid>
            <Grid item xs={7} sm={7} md={7} lg={7}>
              <Typography variant="inherit">Instagram</Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <TextsmsIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navb
