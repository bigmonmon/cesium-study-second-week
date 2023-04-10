window.CESIUM_BASE_URL = '/';

import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiZTZiOTFiYy03ZWM1LTQzZTctYTEwMC03YjI0ODAxOWM5ODgiLCJpZCI6MTMxMTYzLCJpYXQiOjE2ODAwODg5MTZ9.QbDSl81_6gzGm_1l8ggIHv9UQ0i8TUvuawxnp7uhoGg';

const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain()
});    

const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   

viewer.camera.flyTo({
  destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation : {
    heading : Cesium.Math.toRadians(0.0),
    pitch : Cesium.Math.toRadians(-15.0),
  }
});