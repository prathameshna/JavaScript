'use strict';


function selectAll() {
    let vehicles = document.getElementsByName('vehicle');
    for (let vehicle of vehicles) {
        if (vehicle.type == 'checkbox') {
            vehicle.checked = true;
        }
    }
}

function deselectAll() {
    let vehicles = document.getElementsByName('vehicle');
    for (let vehicle of vehicles) {
        if (vehicle.type == 'checkbox') {
            vehicle.checked = false;
        }
    }
}