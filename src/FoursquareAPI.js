// Foursquare API Information
const client_id = "C0TLC3WLVTWCDY34FEXLSHXP3OTECVYAOWIIZGMD1HEP3A1I";
const client_secret = "1BRA5ZO1U1CJB0OJNE1MLSH0VIVZ4SVYRJRGZ5M31GLAK0AO";


const api = "https://api.foursquare.com";

export const getVenue = () => {
  return fetch(`${api}/v2/venues/search?ll=6.447250,3.470260&categoryId=4bf58dd8d48988d181941735,4d4b7105d754a06373d81259,4d4b7105d754a06374d81259,4d4b7104d754a06370d81259,4bf58dd8d48988d13a941735&client_id=${client_id}&client_secret=${client_secret}&v=20180719`)
  .then(res => {
    if(!res.ok){
      throw Error(res.statusText)
    }
    return res.json()
  })
  .then(venue => venue.response.venues)
  .catch(err => console.log('Foursquare API error: ', err))
}


