import React from 'react'
import { AppBar, Toolbar, Box, Grid } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
const Footerpart = () => {
  return (
    <AppBar position="relative" style={{ marginTop: 5 }}>
      <Toolbar>
        <Grid container>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <HomeIcon />
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <SearchIcon />
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <PlayCircleOutlineIcon />
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <FavoriteBorderIcon />
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <AccountCircleIcon />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Footerpart
