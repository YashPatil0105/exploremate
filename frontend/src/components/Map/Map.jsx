import React, {useState,useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles.js';
import useStyles from './styles.js';





 const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [showMap, setShowMap] = useState(true);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);


  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  console.log(10);

  return (
    <div className={classes.mapContainer}>
      
      <>
      {latitude && longitude}
      <section data-aos="fade-up" className="absolute z-10 top-0 left-0 w-full h-full bg-gray-200">
        <div className="container mt-36 ">

          <div className="rounded-xl shadow-lg shadow-gray-500 -mx-16">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9948.014721545012!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713007978922!5m2!1sen!2sin`}
              width="100%"
              height="700vh"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>

    {showMap && (      <GoogleMapReact
        // bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        bootstrapURLKeys={'AIzaSyAZLjoc-ZIzUBjTCJgLLLa8jPTNOV_02nk'}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {/* {places.length && places.map((place, i) => (
          <div
            className={classes.markerContainer}
            // eslint-disable-next-line react/no-unknown-property
            lat={Number(place.latitude)}
            // eslint-disable-next-line react/no-unknown-property
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))} */}
        {/* {weatherData?.list?.length && weatherData.list.map((data, i) => (
          // eslint-disable-next-line react/no-unknown-property
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))} */}

      
      </GoogleMapReact>)}

    </div>
    
  );
};



 export default Map;
