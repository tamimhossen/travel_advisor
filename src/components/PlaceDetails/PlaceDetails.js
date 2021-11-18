import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  console.log(place.photo?.images.large.url);
  return (
    <Card elevation={6}>
      <CardMedia
        component="img"
        height="194"
        image={ place.photo ? place.photo?.images.large.url :"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80.jpg"}
        alt={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
            <Box my={1} display="flex" justifyContent="space-between">
                <img src={award.images.small} alt={award.display_name} />
                <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
            <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                <LocationOnIcon /> {place.address}
            </Typography>
        )}
        {place.phone && (
            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                <PhoneIcon /> {place.phone}
            </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
