import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navb = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Title
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navb
