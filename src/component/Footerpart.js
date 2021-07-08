import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
const Footerpart = () => {
    return (
        <AppBar position="" style={{ marginTop: 30 }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Footer Content
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footerpart
