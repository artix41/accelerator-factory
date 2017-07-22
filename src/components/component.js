import {listComponents} from "./model";

export function Component(type, upgrade) {
    /* Inputs
        - type: integer representing the id of the component type in the json
                model
        - upgrade : integer representing the upgrade number of the component
    */
    this.type = type;
    this.upgrade = upgrade;
    this.inAccelerator = false;
    this.x = undefined;
    this.y = undefined;
    this.didMatrix = false; // true if the component applied its effect

    this.model = listComponents[type];
}
