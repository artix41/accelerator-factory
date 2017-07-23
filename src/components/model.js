export var listComponents =
[
    {
        "name": "RF Cavity",
        "shopCategory": "Radiofrequency Cavities",
	"shopDescription": ["Max Voltage: 5", "Max Voltage: 10", "Max Voltage: 25"],
	"upgradeName": ["Bronze", "Silver", "Gold"],
        "description": "A radiofrequency (RF) cavity is a metallic chamber that contains an electromagnetic field. Its primary purpose is to accelerate charged particles. Learn more: https://home.cern/about/engineering/radiofrequency-cavities",
        "texture": ["rf-bronze.png", "rf-silver.png", "rf-gold.png"],
	"aRatio" : 7.109,
	"colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
        "icon": "rf-large.png",
        "price": [10, 15, 25],
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
        "shopCategory": "Vacuum Chambers",
	"shopDescription": ["Purity: 0.1", "Purity: 0.4", "Purity: 0.9"],
	"upgradeName": ["Bronze", "Silver", "Gold"],
        "description": "A simple tube, without any magnet. Does nothing.",
        "texture": ["vacuum-tube-bronze.png", "vacuum-tube-silver.png", "vacuum-tube-gold.png"],
	"aRatio" : 6.9,
	"colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
        "icon": "vacuum-tube-large.png",
        "price": [1, 3, 6],
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
        "shopCategory": "Quadrupole Magnets in X",
	"shopDescription": ["Max B-field: 1 G Gauss", "Max B-field: 2 G Gauss", "Max B-field: 5 G Gauss"],
	"upgradeName": ["Bronze", "Silver", "Gold"],
        "description": "Four magnets aimed at focusing the beam on the x axis ",
        "texture": ["quadrupole-x-bronze.png","quadrupole-x-silver.png","quadrupole-x-gold.png"],
	"colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
	"aRatio" : 1,
        "icon": "dipole-large.png",
        "price": [15, 25, 45],
        "matrix": [[1,0,0,0,0,0],
                   [0,1,0,0,0,0],
                   [0,0,1,0,0,0],
                   [0,0,0,1,0,0],
                   [0,0,0,0,1,0],
                   [0,0,0,0,0,1]
                  ],
        "focusing": [10,20,30],
        "maxQuality": [1,2,3],
        "tutorial": "quadrupole.html"
    },

    {
        "name": "Quadrupole Magnet y",
        "shopCategory": "Quadrupole Magnets in Y",
	"upgradeName": ["Bronze", "Silver", "Gold"],
        "description": "Four magnets aimed at focusing the beam on the y axis ",
        "texture": ["quadrupole-y-bronze.png","quadrupole-y-silver.png","quadrupole-y-gold.png"],
	"aRatio" : 1,
	"colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
        "icon": "quadyIcon.png",
        "price": [15, 25, 50],
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
        "shopCategory": "Detectors",
	"upgradeName": ["Bronze", "Silver", "Gold"],
        "description": "Detect the result of proton collisions",
        "texture": ["detector-bronze.png","detector-silver.png","detector-gold.png"],
	"colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
	"icon": "detector-large.png",
        "price": [15, 25, 50],
        "matrix": [[1,0,0,0,0,0],
                   [0,1,0,0,0,0],
                   [0,0,1,0,0,0],
                   [0,0,0,1,0,0],
                   [0,0,0,0,1,0],
                   [0,0,0,0,0,1]
		   ],
        "maxIntensity": [10,20,30],
        "maxQuality": [1,2,3],
        "tutorial": "detector.html"
    },
    {
	"name": "Proton Injector",
	"shopCategory": "Proton Injectors",
        "upgradeName": ["Bronze", "Silver", "Gold"],
        "description": "Inject protons to your accelerator",
	"texture": ["injector-bronze.png", "injector-silver.png", "injector-gold.png"],
	"colorName": ["0xCE5A00", "0xBDBDBD", "0xFFC200"],
	"icon": "injector-large.png",
	"price": [0, 10, 20],
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
