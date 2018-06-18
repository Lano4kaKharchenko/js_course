import LocationApi from './location_api';
import Dom from './dom';

const locationApi = new LocationApi();
const dom = new Dom();

    dom.showPreloader();
        locationApi.getMyIp()
            .then((resolve => {
                return locationApi.getMyLocation(resolve.ip)
            })
            .then((res) => {
                dom.hidePreloader();
                dom.setCoordinates(JSON.stringify(res));
            })
            .catch((eror) => {
                console.log(eror);
            })
       
    const buttonGetIpAndLocation = document.getElementById('get_ip_and_location');
const inputIp = document.getElementById('my_ip');

buttonGetIp.addEventListener('click', function() {
    const value = 
})
})
