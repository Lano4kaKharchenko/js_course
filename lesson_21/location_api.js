export default class LocationApi {
    getMyIp() {
      return fetch('https://api.ipify.org?format=json', { 
          metod: 'Get',
    })
          .then(function(resolve) {
              if(resolve.status===200) {
                  return resolve.json();
              } 
                  return Promise.reject(resolve.status);
          });
        }
    }
        
          getMyLocation(myIp) {
              return fetch(`https://freegeoip.net/json/${myIp}`, {
                  method: 'Get',
              })
              .then(resolve => {
                  if(resolve.status===200){
                      return resolve.json();
                  } else {
                      return Promise.reject(resolve.status);
                  }
              })
              .catch(reject => {
                  console.log("Не удалось получить координаты", reject);
              })
            }

          }

      }

