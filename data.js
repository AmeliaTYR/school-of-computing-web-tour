var APP_DATA = {
  "scenes": [
    {
      "id": "0-com1-building",
      "name": "COM1 Building",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.6766330929083786,
        "pitch": -0.21223236773541565,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.43023995363941836,
          "pitch": 0.0971273010660667,
          "rotation": 5.497787143782138,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3780018110169152,
          "pitch": 0.04732073990713204,
          "title": "Bus Stop",
          "text": "Internal Shuttle Bus (ISB) bus stop around the corner"
        },
        {
          "yaw": -1.3304048778956048,
          "pitch": -0.32085124710350676,
          "title": "Central Library",
          "text": "A nice place to study"
        }
      ]
    },
    {
      "id": "1-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.2286958668106234,
        "pitch": 0.05508473888426657,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.226794348146095,
          "pitch": 0.2215668494253613,
          "rotation": 0,
          "target": "0-com1-building"
        },
        {
          "yaw": 2.261499653762969,
          "pitch": 0.10383976229539726,
          "rotation": 0,
          "target": "2-foyer-at-level-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5568777290434355,
          "pitch": 0.39633122409249033,
          "title": "Computing History Display",
          "text": "Information on how computers have evolved over the years"
        },
        {
          "yaw": -2.2926935772879276,
          "pitch": 0.06675134266534855,
          "title": "Free Printing",
          "text": "For SOC Students up to 50 pages per month"
        }
      ]
    },
    {
      "id": "2-foyer-at-level-2",
      "name": "Foyer at Level 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.06498124377306524,
        "pitch": 0.08108838376569594,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -2.829170864885432,
          "pitch": 0.10288068606749512,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1131524643688806,
          "pitch": 0.11116016223653347,
          "title": "Study / Showcase area",
          "text": "This space is commonly used for tech showcases / career fairs"
        }
      ]
    }
  ],
  "name": "School of Computing web tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
