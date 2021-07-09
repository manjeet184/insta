import React from 'react'
import {
  Card,
  CardHeader,
  Box,
  Avatar,
  CardContent,
  Typography,
} from '@material-ui/core'

const Cards = ({ item }) => {
  console.table(item)
  return (
    <>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          style={{
            maxWidth: 355,
            maxHeight: 490,
            minHeight: 490,
            marginInline: 10,
            marginTop: 10,
            padding: 10,
          }}
        >
          <CardHeader
            avatar={<Avatar alt="Remy Sharp" src={item.icon}></Avatar>}
            title={item.title}
          ></CardHeader>
          <Typography>{item.name}</Typography>
          <CardContent>
            <img
              style={{ maxWidth: 350, maxHeight: 320 }}
              src={item.url}
              alt=""
            />
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default Cards
