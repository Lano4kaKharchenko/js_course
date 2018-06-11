export default class LocationApi {
    getMyIp() {
      return fetch('https://api.ipify.org?format=json')
          .then(function(resolve) {
              if(resolve.status===200){
                  return resolve.json();
              } else {
                  return Promise.reject(resolve.status);
              }
          })
        //   .then(MyIp => {
        //       console.log(MyIp.Ip);
        //       return MyIp.Ip;
        //   })
          .catch(reject => {
              console.log("Error(Не удалось получить IP)", reject);
          });
        }
          getMyLocation(myIp) {
              return fetch(`https://freegeoip.net/json/${myIp}`)
              .then(resolve => {
                  if(resolve.status===200){
                      return resolve.json();
                  } else {
                      return Promise.reject(resolve.status);
                  }
              })
            //   .then(resolve => console.log(resolve.latitude, resolve.longitude))
              .catch(reject => {
                  console.log("Не удалось получить координаты", reject);
              })

          }

      }

