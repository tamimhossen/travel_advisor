import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'c0bd4f96e8msh6f1ed33e2a2dc47p174e90jsne9533ebe20a9'
    }
  };

export const getPlaceData = async (sw, ne) => {
    try {
        const { data: {data} } = await axios.get(URL, {
    
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'c0bd4f96e8msh6f1ed33e2a2dc47p174e90jsne9533ebe20a9'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}