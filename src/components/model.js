export var listComponents =
[
    {
        "name": "RF Cavity",
        "description": "Magnets that accelerate the particle",
        "texture": ["rf-bronze.png", "rf-silver.png", "rf-gold.png"],
        "price": 10,
        "matrix": [[1,0,0,0,0,0],
                   [0,1,0,0,0,0],
                   [0,0,1,0,0,0],
                   [0,0,0,1,0,0],
                   [0,0,0,0,1,0],
                   [0,0,0,0,0,1]
                  ],
        "maxVoltage": [10,20,30],
        "maxQuality": [1,2,3],
        "tutorial": "rf.html"
    },

    {
        "name": "Vacuum Chamber",
        "description": "A simple tube, without any magnet. Does nothing.",
        "texture": ["vacuum-tube-bronze.png", "vacuum-tube-silver.png", "vacuum-tube-gold.png"],
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
        "texture": ["quadrupole-x-bronze.png","quadrupole-x-silver.png","quadrupole-x-gold.png"],
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
        "texture": ["quadrupole-y-bronze.png","quadrupole-y-silver.png","quadrupole-y-gold.png"],
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
        "name": "Detector",
        "description": "Detect the result of proton collisions",
        "texture": ["detector-bronze.png","detector-silver.png","detector-gold.png"],
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
        "name": "Proton Injector",
        "description": "Inject protons to your accelerator",
        "texture": ["injector-bronze.png", "injector-silver.png", "injector-gold.png"],
        "price": 0,
        "matrix": [[1,0,0,0,0,0],
                   [0,1,0,0,0,0],
                   [0,0,1,0,0,0],
                   [0,0,0,1,0,0],
                   [0,0,0,0,1,0],
                   [0,0,0,0,0,1]
                  ],
        "maxEnergy": [50,100,400],
        "maxQuality": [1,2,3],
        "tutorial": "injector.html"
    },
];