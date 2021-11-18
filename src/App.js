import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import { getPlaceData } from './api';

const App = () => {
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, [])


    useEffect(() => {
        // debugger;
        getPlaceData(bounds?.sw, bounds?.ne)
        .then((data) => {
            console.log(data);
            setPlaces(data);
        })
    }, [coordinates, bounds])

    return (
        <>
            <CssBaseline /> 
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List
                        places={places}
                     />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                     />
                </Grid>
            </Grid>            
        </>
    );
};

export default App;