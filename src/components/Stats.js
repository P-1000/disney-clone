import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function Stats() {
  const theme = useTheme();

  return (
    <>
    <div className='flex flex-wrap gap-6 mx-6 mt-8 px-6'>
    <Card sx={{ display: 'flex' }} className='px-6 py-4 gap-20 justify-self-center h-32 border rounded-3xl'>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 1 auto' }}>
          <Typography component="div" variant="h5">
            <p className='text-5xl'>906</p>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Movies
          </Typography>
        </CardContent>
      </Box>
      <div className='mx-auto my-auto  pr-2 mb-5 w-16 h-16'>
      <CardMedia
        component="img"
        className=''
        image="https://cdn-icons-png.flaticon.com/512/408/408426.png"
        alt="Live from space album cover"
      />
      </div>
    </Card>
   
   {/* card 2 */}

   <Card sx={{ display: 'flex' }} className='px-6 py-4 gap-20 justify-self-center h-32 border rounded-3xl'>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 1 auto' }}>
          <Typography component="div" variant="h5">
          <p className='text-5xl'>106</p>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Tv Shows
          </Typography>
        </CardContent>
      </Box>
      <div className='mx-auto my-auto pr-2 mb-5 w-16 h-16'>
      <CardMedia
        component="img"
        className=''
        image="https://cdn-icons-png.flaticon.com/512/408/408426.png"
        alt="Live from space album cover"
      />
      </div>
    </Card>
     
{/* card 3 */}

<Card sx={{ display: 'flex' }} className='px-6 py-4 gap-10 justify-self-center h-32 border rounded-3xl'>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 1 auto' }}>
          <Typography component="div" variant="h5">
          <p className='text-5xl'>8906</p>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <p >Total Hours Watched</p>
          </Typography>
        </CardContent>
      </Box>
      <div className='mx-auto my-auto  pr-3 mb-5 w-16 h-16'>
      <CardMedia
        component="img"
        className=''
        image="https://cdn-icons-png.flaticon.com/512/408/408426.png"
        alt="Live from space album cover"
      />
      </div>
    </Card>

    {/* crd 4  */}

    <Card sx={{ display: 'flex' }} className='px-6 py-4 gap-20 justify-self-center h-32 border rounded-3xl'>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 1 auto' }}>
          <Typography component="div" variant="h5" className='h-auto'>
            <p className='text-5xl'>20</p>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            In Watchlist
          </Typography>
        </CardContent>
      </Box>
      <div className='mx-auto pr-3  mr-2 my-auto mb-5 w-16 h-16'>
      <CardMedia
        component="img"
        className=''
        image="https://cdn-icons-png.flaticon.com/512/408/408426.png"
        alt="Live from space album cover"
      />
      </div>
    </Card>
    </div>
    </>
  );
}
