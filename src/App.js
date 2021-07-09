import { Box, Card } from '@material-ui/core'
import Cards from './component/Cards'
import Footerpart from './component/Footerpart'
import Navb from './component/Navb'
function App() {
  const data = [
    {
      id: 1,
      title: 'M S Dhoni',
      name: 'This impressive paella is a perfect',
      url: './image/img-1.jpg',
      icon: 'https://bit.ly/2T08blr',
    },
    {
      id: 2,
      title: 'VIRat',
      name: 'This impressive paella is a perfect',
      url: './image/img-5.jpg',
      icon: 'https://bit.ly/3yEj2AM',
    },
    {
      id: 3,
      title: 'Rohit Sharma',
      name: 'This impressive paella is a perfect',
      url: './image/img-3.jpg',
      icon: 'https://bit.ly/3htXO2C',
    },
    {
      id: 4,
      title: 'Robot',
      name: 'This impressive paella is a perfect',
      url: './image/img-4.jpg',
      icon: 'https://bit.ly/3yEj2AM',
    },
  ]

  const mystyle = {
    maxWidth: 360,
    maxHeight: 490,
    overflowY: 'scroll',
  }

  return (
    <>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card style={{ maxWidth: 360, marginTop: 10, marginBottom: 2 }}>
          <Navb />
          <Box style={{ maxWidth: 360, maxHeight: 490 }}>
            <Box style={mystyle}>
              {data.map((item) => (
                <Cards item={item} />
              ))}
            </Box>
          </Box>
          <Footerpart />
        </Card>
      </Box>
    </>
  )
}

export default App
