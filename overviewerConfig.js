var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "World - overworld",
        "World"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1613062327",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Survival Daytime",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "survivalday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "World - overworld",
            "last_rendertime": 1613059075,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                96,
                192
            ],
            "minZoom": 0,
            "spawn": [
                0,
                96,
                192
            ],
            "north_direction": 0
        },
        {
            "name": "Survival Nighttime",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "survivalnight",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "World - overworld",
            "last_rendertime": 1613059075,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                96,
                192
            ],
            "minZoom": 0,
            "spawn": [
                0,
                96,
                192
            ],
            "north_direction": 0
        },
        {
            "name": "Underground",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "cave",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "World - overworld",
            "last_rendertime": 1613059075,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                96,
                192
            ],
            "minZoom": 0,
            "spawn": [
                0,
                96,
                192
            ],
            "north_direction": 0
        },
        {
            "name": "Biome Coloring Overlay",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "biomeover",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "World",
            "last_rendertime": 1613059075,
            "imgextension": "png",
            "isOverlay": [
                "survivalday"
            ],
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                96,
                192
            ],
            "minZoom": 0,
            "tilesets": [
                "survivalday"
            ],
            "spawn": [
                0,
                96,
                192
            ],
            "north_direction": 0
        }
    ]
};
