import React from 'react';
import { Card, CardHeader, Box, Avatar, CardContent, Typography } from '@material-ui/core';

const Cards = () => {
    return (
        <>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card style={{ maxWidth: 365, marginInline: 50, marginTop: 50 }}>
                    <CardHeader avatar={<Avatar alt="Remy Sharp" src="https://5.imimg.com/data5/EL/KA/ZZ/SELLER-6781751/peacockride-ms-dhoni-fridge-magnet-500x500.png"></Avatar>} title="Post" ></CardHeader>
                    <CardContent>
                        <Typography>This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.</Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default Cards
