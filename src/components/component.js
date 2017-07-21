import {listComponents} from "./model";

export function Component(type, upgrade) {
    /* Inputs
        - type: integer representing the id of the component type in the json
                model
    */
    this.type = type;
    this.upgrade = upgrade;
    this.inAccelerator = false;
    this.x = undefined;
    this.y = undefined;

    this.model = listComponents[type];
}
