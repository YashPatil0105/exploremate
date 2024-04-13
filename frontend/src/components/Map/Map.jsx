import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles.js';
import useStyles from './styles.js';


 const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      
      <GoogleMapReact
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
        {places.length && places.map((place, i) => (
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
        ))}
        {weatherData?.list?.length && weatherData.list.map((data, i) => (
          // eslint-disable-next-line react/no-unknown-property
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

// export default Map;
// import mapboxgl from 'mapbox-gl';
// import React from 'react';
// import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';

// import mapStyles from '../../mapStyles';
// import useStyles from './styles.js';

// const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
//   const matches = useMediaQuery('(min-width:600px)');
//   const classes = useStyles();

//   mapboxgl.accessToken = 'pk.eyJ1IjoicmF1bmFrc2luZ2hrYWxzaSIsImEiOiJjbHFwZHZlaHgycDJpMnFvMDU1NG9vb3Z2In0.Cb5RR1VPzsiMKR9cJd4U6A';
//   return (
//     <div className={classes.mapContainer}>
//       <ReactMapGL
//         {...coords}
//         width="100%"
//         height="100%"
//         mapStyle="mapbox://styles/mapbox/streets-v11"
//         onViewportChange={(viewport) => {
//           setCoords({ latitude: viewport.latitude, longitude: viewport.longitude });
//           setBounds({
//             ne: [viewport.longitude + viewport.longitudeDelta / 2, viewport.latitude + viewport.latitudeDelta / 2],
//             sw: [viewport.longitude - viewport.longitudeDelta / 2, viewport.latitude - viewport.latitudeDelta / 2],
//           });
//         }}
//         // mapboxApiAccessToken='pk.eyJ1IjoicmF1bmFrc2luZ2hrYWxzaSIsImEiOiJjbHFwZHZlaHgycDJpMnFvMDU1NG9vb3Z2In0.Cb5RR1VPzsiMKR9cJd4U6A'
        
//       >
//         {places.map((place, i) => (
//           <Marker
//             key={i}
//             latitude={Number(place.latitude)}
//             longitude={Number(place.longitude)}
//           >
//             <div
//               className={classes.markerContainer}
//               onClick={() => setChildClicked(i)}
//             >
//               {!matches ? (
//                 <LocationOnOutlinedIcon color="primary" fontSize="large" />
//               ) : (
//                 <Paper elevation={3} className={classes.paper}>
//                   <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
//                   <img
//                     className={classes.pointer}
//                     src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
//                     alt={place.name}
//                   />
//                   <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
//                 </Paper>
//               )}
//             </div>
//           </Marker>
//         ))}
//         {weatherData?.list?.map((data, i) => (
//           <Marker key={i} latitude={data.coord.lat} longitude={data.coord.lon}>
//             <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" alt="Weather Icon" />
//           </Marker>
//         ))}
//       </ReactMapGL>
//     </div>
//   );
// };

 export default Map;
