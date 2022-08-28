///<reference types='@types/google.maps' />

// import { User } from './User';
// import { Company } from './Company';

if (document.getElementById("map")) {
    console.log("MAP")
}

new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 5,
    center: {
        lat: 0,
        lng: 0
    }
}
);

