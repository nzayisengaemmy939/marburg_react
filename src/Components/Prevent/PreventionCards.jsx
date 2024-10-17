import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, CardActions } from '@mui/material';

function PreventionCards({ title, description, image }) {
  return (
    <Card sx={{ maxWidth: 345, mb: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography className='text-[#223A66] !text-lg ' gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className='!capitalize'>Learn more</Button>
      </CardActions>
    </Card>
  );
}

export default PreventionCards;
