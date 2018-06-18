export default class Dom {
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.location = document.getElementById('location');
        }

    showPreloader() {
       this.preloader.style.opacity = 1;
       this.preloader.style.opacity = 0;
    }

    hidePreloader() {
        this.preloader.style.opacity = 0;
        this.preloader.style.opacity = 1;
    }

    setCoordinates(coordinates) {
        this.localionApi = coordinates.latitude;
    }
} 