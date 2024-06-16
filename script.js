(function(){
    var script = {
 "mouseWheelEnabled": true,
 "downloadEnabled": false,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "horizontalAlign": "left",
 "overflow": "visible",
 "shadow": false,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "borderRadius": 0,
 "definitions": [{
 "initialPosition": {
  "yaw": 57.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0D675657_1FAD_78B1_4192_26C7CE5EFB31"
},
{
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": -169.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0C92869F_1FAD_79B2_41B6_8567ED3887FE"
},
{
 "items": [
  {
   "media": "this.panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_camera"
  },
  {
   "media": "this.panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_camera"
  },
  {
   "media": "this.panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_camera"
  },
  {
   "media": "this.panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 10.97,
   "yaw": 179.49,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19"
  }
 ],
 "thumbnailUrl": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_t.jpg",
 "id": "panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A",
 "label": "0002",
 "hfov": 360,
 "vfov": 180,
 "overlays": [
  "this.overlay_10A8E4CE_1F6E_9992_419B_E47868EABC9F"
 ],
 "partial": false,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -9.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0C84E681_1FAD_7991_41A8_A52D7C0A3A1D"
},
{
 "initialPosition": {
  "yaw": -0.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0D74C666_1FAD_7893_41B8_CFF991A7DAA5"
},
{
 "initialPosition": {
  "yaw": -151.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0D464630_1FAD_788E_41A6_34205DF27D22"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_camera"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 28.31,
   "yaw": -122.58,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19"
  },
  {
   "backwardYaw": -177.97,
   "yaw": 170.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5"
  }
 ],
 "thumbnailUrl": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_t.jpg",
 "id": "panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F",
 "label": "0003",
 "hfov": 360,
 "vfov": 180,
 "overlays": [
  "this.overlay_10614660_1F6D_988E_41A6_F0F01D259DC0",
  "this.overlay_10B281EC_1F6A_FB96_41BC_D3876482891B"
 ],
 "partial": false,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama"
},
{
 "items": [
  {
   "media": "this.panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_camera"
  },
  {
   "media": "this.panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_camera"
  },
  {
   "media": "this.panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_camera"
  },
  {
   "media": "this.panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 170.82,
   "yaw": -177.97,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F"
  }
 ],
 "thumbnailUrl": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_t.jpg",
 "id": "panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5",
 "label": "0004",
 "hfov": 360,
 "vfov": 180,
 "overlays": [
  "this.overlay_10256149_1F6A_B89E_41B2_F82BA7924A9E"
 ],
 "partial": false,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 2.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0D571642_1FAD_7893_4181_E1B8DBA11C20"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_camera"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -122.58,
   "yaw": 28.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F"
  },
  {
   "backwardYaw": 179.49,
   "yaw": 10.97,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A"
  }
 ],
 "thumbnailUrl": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_t.jpg",
 "id": "panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19",
 "label": "0001",
 "hfov": 360,
 "vfov": 180,
 "overlays": [
  "this.overlay_12B6AFE8_1F6A_E79E_4182_CB26FA7A4144",
  "this.overlay_11C9A6F5_1F6E_F971_41B1_1F499357555B",
  "this.overlay_0F9CDD8E_1F9D_6B92_41A7_76D96349A465"
 ],
 "partial": false,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_camera"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "shadow": false,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "transitionDuration": 500,
 "class": "ViewerArea",
 "toolTipBackgroundColor": "#000000",
 "firstTransitionDuration": 0,
 "minWidth": 100,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "right": "0%",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 641,
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
 "layout": "absolute",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "overflow": "visible",
 "top": 15,
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 133,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "--STICKER"
 }
},
{
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundOpacity": 0.64,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "0%",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": 118,
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "--MENU"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "0%",
 "shadow": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photo"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "0%",
 "shadow": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photoalbum"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "0%",
 "shadow": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "0%",
 "shadow": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "0%",
 "shadow": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "0%",
 "shadow": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM + text"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "0%",
 "shadow": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "0%",
 "shadow": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "--REALTOR"
 }
},
{
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "minWidth": 1,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "minWidth": 1,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "right": 30,
 "shadow": false,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "propagateClick": true,
 "bottom": 8,
 "paddingRight": 0,
 "maxHeight": 37,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "mode": "push",
 "height": 75,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "borderSize": 0,
 "minWidth": 1,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 49,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "minWidth": 1,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "minWidth": 1,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19, this.camera_0C92869F_1FAD_79B2_41B6_8567ED3887FE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.1,
   "yaw": 179.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_1_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -26.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0D20E5F7_1FAD_7B72_4171_2F3555F27E8D",
   "yaw": 179.49,
   "hfov": 20.1,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.5,
   "distance": 100
  }
 ],
 "id": "overlay_10A8E4CE_1F6E_9992_419B_E47868EABC9F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19, this.camera_0D464630_1FAD_788E_41A6_34205DF27D22); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.27,
   "yaw": -122.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_1_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -35.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0D2085F8_1FAD_7B7E_41A5_73DF867DDDA3",
   "yaw": -122.58,
   "hfov": 18.27,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.56,
   "distance": 100
  }
 ],
 "id": "overlay_10614660_1F6D_988E_41A6_F0F01D259DC0"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5, this.camera_0D571642_1FAD_7893_4181_E1B8DBA11C20); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.4,
   "yaw": 170.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_1_HS_1_0_0_map.gif",
      "width": 44,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -36.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 05c Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0D2055F8_1FAD_7B7E_41B8_ABCF77B57E75",
   "yaw": 170.82,
   "hfov": 17.4,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.89,
   "distance": 50
  }
 ],
 "id": "overlay_10B281EC_1F6A_FB96_41BC_D3876482891B"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F, this.camera_0C84E681_1FAD_7991_41A8_A52D7C0A3A1D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.71,
   "yaw": -177.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_1_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -37.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0D23F5F8_1FAD_7B7E_41B3_893CC63797D1",
   "yaw": -177.97,
   "hfov": 17.71,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.96,
   "distance": 100
  }
 ],
 "id": "overlay_10256149_1F6A_B89E_41B2_F82BA7924A9E"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A, this.camera_0D74C666_1FAD_7893_41B8_CFF991A7DAA5); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.65,
   "yaw": 10.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_1_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -15.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0D21F5F4_1FAD_7B76_41BF_86B0953CC397",
   "yaw": 10.97,
   "hfov": 16.65,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.1,
   "distance": 100
  }
 ],
 "id": "overlay_12B6AFE8_1F6A_E79E_4182_CB26FA7A4144"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F, this.camera_0D675657_1FAD_78B1_4192_26C7CE5EFB31); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.35,
   "yaw": 28.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_1_HS_1_0_0_map.gif",
      "width": 44,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 05c Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0D2175F7_1FAD_7B72_419D_F964A0A25866",
   "yaw": 28.31,
   "hfov": 18.35,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.7,
   "distance": 50
  }
 ],
 "id": "overlay_11C9A6F5_1F6E_F971_41B1_1F499357555B"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.83,
   "yaw": 64.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 17.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0D2125F7_1FAD_7B72_41A0_ED32FC9B6491",
   "yaw": 64.9,
   "hfov": 9.83,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 17.29,
   "distance": 100
  }
 ],
 "id": "overlay_0F9CDD8E_1F9D_6B92_41A7_76D96349A465"
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "overflow": "visible",
 "right": "0%",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 110,
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "right": "0%",
 "horizontalAlign": "center",
 "overflow": "scroll",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "bottom": "0%",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": "85.959%",
 "contentOpaque": false,
 "gap": 3,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 }
},
{
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "right": "0%",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "bottom": 53,
 "paddingRight": 0,
 "maxHeight": 2,
 "paddingLeft": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 2,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Image",
 "scaleMode": "fit_outside",
 "paddingBottom": 0,
 "maxWidth": 3000,
 "paddingTop": 0,
 "data": {
  "name": "white line"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 30,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "height": 51,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 3,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowSpread": 1,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "shadowColor": "#000000",
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "10%",
 "minHeight": 1,
 "shadow": true,
 "shadowOpacity": 0.3,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "layout": "vertical",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "right": "10%",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "5%",
 "bottom": "80%",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "shadowSpread": 1,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "shadowColor": "#000000",
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "10%",
 "minHeight": 1,
 "shadow": true,
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "layout": "vertical",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "right": "10%",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "5%",
 "bottom": "80%",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowSpread": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowColor": "#000000",
 "layout": "vertical",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "right": "15%",
 "minHeight": 1,
 "shadow": true,
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "shadowSpread": 1,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "shadowColor": "#000000",
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "10%",
 "minHeight": 1,
 "shadow": true,
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "layout": "vertical",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "right": "10%",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "5%",
 "bottom": "80%",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "shadowSpread": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowColor": "#000000",
 "layout": "vertical",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "right": "15%",
 "minHeight": 1,
 "shadow": true,
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "shadowSpread": 1,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "shadowColor": "#000000",
 "layout": "vertical",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "right": "15%",
 "minHeight": 1,
 "shadow": true,
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowSpread": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowColor": "#000000",
 "layout": "vertical",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "right": "15%",
 "minHeight": 1,
 "shadow": true,
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowSpread": 1,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "shadowColor": "#000000",
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "10%",
 "minHeight": 1,
 "shadow": true,
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "layout": "vertical",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "right": "10%",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "5%",
 "bottom": "80%",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1477DEBA_1F6A_E9F2_4191_45B8544C9B3A_1_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D20E5F7_1FAD_7B72_4171_2F3555F27E8D",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_1_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D2085F8_1FAD_7B7E_41A5_73DF867DDDA3",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14771511_1F6A_F88E_4180_A0EEF8A5501F_1_HS_1_0.png",
   "width": 560,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D2055F8_1FAD_7B7E_41B8_ABCF77B57E75",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_149F86E1_1F6A_998E_41B9_8B88268A72C5_1_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D23F5F8_1FAD_7B7E_41B3_893CC63797D1",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_1_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D21F5F4_1FAD_7B76_41BF_86B0953CC397",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_1_HS_1_0.png",
   "width": 560,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D2175F7_1FAD_7B72_419D_F964A0A25866",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1476F680_1F6A_998F_41B0_D5EC841B2C19_1_HS_2_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D2125F7_1FAD_7B72_41A0_ED32FC9B6491",
 "colCount": 4,
 "frameCount": 24
},
{
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "height": 60,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "minWidth": 1,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "iconWidth": 0,
 "layout": "horizontal",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "width": 120,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Netron",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadow": false,
 "iconHeight": 0,
 "rollOverShadow": false,
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "label": "HOUSE INFO",
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "fontStyle": "normal",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "minWidth": 1,
 "class": "Button",
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "layout": "horizontal",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "width": 130,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Netron",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadow": false,
 "iconHeight": 32,
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "label": "PANORAMA LIST",
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "fontStyle": "normal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "minWidth": 1,
 "class": "Button",
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button panorama list"
 },
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "layout": "horizontal",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "width": 124.8,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Netron",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadow": false,
 "iconHeight": 32,
 "borderRadius": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "label": "PHOTOALBUM",
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "fontStyle": "normal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "minWidth": 1,
 "class": "Button",
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button photoalbum"
 },
 "shadowBlurRadius": 15
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "overflow": "visible",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "paddingLeft": 50,
 "propagateClick": false,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 460,
 "paddingTop": 20,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 }
},
{
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "borderRadius": 0,
 "maxHeight": 60,
 "paddingLeft": 0,
 "propagateClick": false,
 "mode": "push",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "borderSize": 0,
 "minWidth": 50,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "height": "100%",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "width": "85%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "height": "100%",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "width": "50%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "overflow": "visible",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "paddingLeft": 50,
 "propagateClick": false,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 460,
 "paddingTop": 20,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 }
},
{
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "width": "25%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "borderRadius": 0,
 "maxHeight": 60,
 "paddingLeft": 0,
 "propagateClick": false,
 "mode": "push",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "borderSize": 0,
 "minWidth": 50,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 140,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 }
},
{
 "itemMinHeight": 50,
 "itemLabelPosition": "bottom",
 "itemLabelFontFamily": "Montserrat",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "scrollBarWidth": 10,
 "rollOverItemLabelFontColor": "#04A3E1",
 "backgroundOpacity": 0.05,
 "width": "100%",
 "horizontalAlign": "center",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "shadow": false,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemPaddingLeft": 3,
 "itemOpacity": 1,
 "minHeight": 1,
 "itemMinWidth": 50,
 "propagateClick": false,
 "itemThumbnailOpacity": 1,
 "paddingRight": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "itemPaddingRight": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemLabelGap": 7,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "class": "ThumbnailGrid",
 "minWidth": 1,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemHeight": 156,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "rollOverItemThumbnailShadow": true,
 "itemLabelFontSize": 14,
 "itemThumbnailShadow": false,
 "itemThumbnailHeight": 125,
 "selectedItemThumbnailShadow": true,
 "borderRadius": 5,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "paddingLeft": 70,
 "itemHorizontalAlign": "center",
 "itemThumbnailWidth": 220,
 "itemBackgroundOpacity": 0,
 "itemWidth": 220,
 "itemMaxWidth": 1000,
 "itemPaddingBottom": 3,
 "gap": 26,
 "itemLabelFontStyle": "normal",
 "paddingTop": 10,
 "itemMaxHeight": 1000,
 "itemLabelHorizontalAlign": "center",
 "paddingBottom": 70,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemMode": "normal",
 "itemThumbnailBorderRadius": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "height": "100%",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "width": "85%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "height": "100%",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "width": "15%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "overflow": "visible",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "paddingLeft": 50,
 "propagateClick": false,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 400,
 "paddingTop": 20,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 }
},
{
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "borderRadius": 0,
 "maxHeight": 60,
 "paddingLeft": 0,
 "propagateClick": false,
 "mode": "push",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "borderSize": 0,
 "minWidth": 50,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 140,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MapViewer",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "transitionDuration": 500,
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "minWidth": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Floor Plan"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 140,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "height": "100%",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "visible",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "visible",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "width": "55%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "width": "45%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "overflow": "visible",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 60,
 "paddingLeft": 60,
 "propagateClick": false,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 460,
 "paddingTop": 20,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 }
},
{
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "borderRadius": 0,
 "maxHeight": 60,
 "paddingLeft": 0,
 "propagateClick": false,
 "mode": "push",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "borderSize": 0,
 "minWidth": 50,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.png",
 "maxHeight": 1000,
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": "100%",
 "borderSize": 0,
 "minWidth": 1,
 "class": "Image",
 "scaleMode": "fit_to_height",
 "paddingBottom": 0,
 "maxWidth": 2000,
 "paddingTop": 0,
 "data": {
  "name": "Image"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "right",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 60,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 100,
 "paddingTop": 0,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container space"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "right": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "transitionDuration": 500,
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "minWidth": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": 0,
 "playbackBarLeft": 0,
 "bottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "width": "100%",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Container arrows"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "right",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 60,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "height": "100%",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 100,
 "paddingTop": 0,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 100,
 "top": "0%",
 "paddingLeft": 80,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": "100%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "right": 20,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "propagateClick": false,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "height": "36.14%",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "minWidth": 50,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "insetBorder": false,
 "right": "0%",
 "shadow": false,
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "class": "WebFrame",
 "minWidth": 1,
 "scrollEnabled": true,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "right",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 60,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "height": "100%",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 100,
 "paddingTop": 0,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 100,
 "top": "0%",
 "paddingLeft": 80,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": "100%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "right": 20,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "propagateClick": false,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "height": "36.14%",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "minWidth": 50,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 100,
 "top": "0%",
 "paddingLeft": 80,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": "100%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "width": "100%",
 "right": 20,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "propagateClick": false,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "height": "36.14%",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "minWidth": 50,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "transitionDuration": 500,
 "class": "ViewerArea",
 "toolTipBackgroundColor": "#F6F6F6",
 "firstTransitionDuration": 0,
 "minWidth": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "top": "20%",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "propagateClick": false,
 "bottom": "20%",
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "borderSize": 0,
 "minWidth": 50,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "width": "14.22%",
 "right": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "top": "20%",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "propagateClick": false,
 "bottom": "20%",
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "minWidth": 50,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "transitionDuration": 500,
 "class": "ViewerArea",
 "toolTipBackgroundColor": "#F6F6F6",
 "firstTransitionDuration": 0,
 "minWidth": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "top": "20%",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "propagateClick": false,
 "bottom": "20%",
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "borderSize": 0,
 "minWidth": 50,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "right": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "top": "20%",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "propagateClick": false,
 "bottom": "20%",
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "minWidth": 50,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "right": 20,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "propagateClick": false,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "height": "10%",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "minWidth": 50,
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "maxHeight": 1000,
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "bottom",
 "height": "100%",
 "borderSize": 0,
 "minWidth": 1,
 "class": "Image",
 "scaleMode": "fit_outside",
 "paddingBottom": 0,
 "maxWidth": 2000,
 "paddingTop": 0,
 "data": {
  "name": "Image"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "right",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 60,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 100,
 "paddingTop": 0,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Envidox Virtual Tour</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">Exhibit realistic and immersive virual tours for your apartment design</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.59vh;\">EnviDox Solutions is an innovative digital service company specializing in immersive experiences through the power of AR/VR technology and Artificial Intelligence. Our team of experts utilizes cutting-edge technology to create seamless and stunning virtual tours, websites, Chatbots and other digital solutions that captivate audiences.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:3.62vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingBottom": 20,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "data": {
  "name": "Button"
 },
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": "46%",
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.7,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "shadow": false,
 "iconHeight": 32,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundOpacity": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "mode": "push",
 "fontSize": "3vh",
 "label": "Click to Explore",
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "borderSize": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "minWidth": 1,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "paddingBottom": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "width": "12%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "borderRadius": 0,
 "maxHeight": 150,
 "paddingLeft": 0,
 "propagateClick": false,
 "mode": "push",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": "8%",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "borderSize": 0,
 "minWidth": 70,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 150,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": "30%",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Container separator"
 }
},
{
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "width": "12%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "borderRadius": 0,
 "maxHeight": 150,
 "paddingLeft": 0,
 "propagateClick": false,
 "mode": "push",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": "8%",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "borderSize": 0,
 "minWidth": 70,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxWidth": 150,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 20,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "data": {
  "name": "Button"
 },
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "width": "46%",
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.7,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "shadow": false,
 "iconHeight": 32,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundOpacity": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "mode": "push",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "borderSize": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "minWidth": 1,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "paddingBottom": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 20,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "width": 207,
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.7,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "shadow": false,
 "iconHeight": 32,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundOpacity": 1,
 "height": 59,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 34,
 "label": "lorem ipsum",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "borderSize": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "minWidth": 1,
 "class": "Button",
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "visible": false,
 "iconWidth": 32,
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button"
 },
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "height": "45%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.08vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 }
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "maxHeight": 200,
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": "100%",
 "borderSize": 0,
 "minWidth": 1,
 "class": "Image",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "maxWidth": 200,
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "75%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "backgroundPreloadEnabled": true,
 "minHeight": 20,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "minWidth": 20,
 "paddingTop": 0,
 "defaultVRPointer": "laser",
 "paddingBottom": 0,
 "scripts": {
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } }
 },
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
