export var listComponents =
[
    {
        "name": "RF Cavity",
        "description": "Magnets that accelerate the particle",
        "texture": "rf.png",
        "icon": "rfIcon.png",
        "price": 10,
        "matrix": [[1,0,0,0,0,0],
                   [0,1,0,0,0,0],
                   [0,0,1,0,0,0],
                   [0,0,0,1,0,0],
                   [0,0,0,0,1,0],
                   [0,0,0,0,0,1]
                  ],
        "maxIntensity": [10,20,30],
        "maxQuality": [1,2,3],
        "tutorial": "rf.html"
    },

    {
        "name": "Vacuum Chamber",
        "description": "A simple tube, without any magnet. Does nothing.",
        "texture": "vacuum.png",
        "icon": "vacuumIcon.png",
        "price": 1,
        "matrix": [[1,0,0,0,0,0],
                   [0,1,0,0,0,0],
                   [0,0,1,0,0,0],
                   [0,0,0,1,0,0],
                   [0,0,0,0,1,0],
                   [0,0,0,0,0,1]
                  ],
        "maxQuality": [1,2,3],
        "tutorial": "vacuum-chamber.html"
    },

    {
        "name": "Quadrupole Magnet x",
        "description": "Four magnets aimed at focusing the beam on the x axis ",
        "texture": "quadx.png",
        "icon": "quadxIcon.png",
        "price": 15,
        "matrix": [[1,0,0,0,0,0],
                   [0,1,0,0,0,0],
                   [0,0,1,0,0,0],
                   [0,0,0,1,0,0],
                   [0,0,0,0,1,0],
                   [0,0,0,0,0,1]
                  ],
        "maxIntensity": [10,20,30],
        "maxQuality": [1,2,3],
        "tutorial": "quadrupole.html"
    },

    {
        "name": "Quadrupole Magnet y",
        "description": "Four magnets aimed at focusing the beam on the y axis ",
        "texture": "quady.png",
        "icon": "quadyIcon.png",
        "price": 15,
        "matrix": [[1,0,0,0,0,0],
                   [0,1,0,0,0,0],
                   [0,0,1,0,0,0],
                   [0,0,0,1,0,0],
                   [0,0,0,0,1,0],
                   [0,0,0,0,0,1]
                  ],
        "maxIntensity": [10,20,30],
        "maxQuality": [1,2,3],
        "tutorial": "quadrupole.html"
    }
];
