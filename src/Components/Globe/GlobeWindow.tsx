import React from 'react';
import { useEffect, useRef } from 'react';
import * as itowns from './iTowns/itowns.js';
import './globewindow.scss';

function GlobeWindow() {
  const viewerDivRef = useRef(null);

  useEffect(() => {
    if (viewerDivRef.current) {
      var position = { longitude: 2.351323, latitude: 48.856712, altitude: 25000000 };
      var view = new itowns.GlobeView(document.getElementById('viewerDiv'), position);

      itowns.Fetcher.json('http://www.itowns-project.org/itowns/examples/layers/JSONLayers/Ortho.json')
        .then((ortho: any) => {
          var orthoSource = new itowns.WMTSSource(ortho.source);
          var orthoLayer = new itowns.ColorLayer('Ortho', {
            source: orthoSource,
          });
          view.addLayer(orthoLayer);
        });

      itowns.Fetcher.json('http://www.itowns-project.org/itowns/examples/layers/JSONLayers/IGN_MNT.json')
        .then((mnt: any) => {
          var mntSource = new itowns.WMTSSource(mnt.source);
          var mntLayer = new itowns.ElevationLayer('IGN_MNT', {
            source: mntSource,
          });
          view.addLayer(mntLayer);
        });

      const atmosphere = view.getLayerById('atmosphere');
      atmosphere.setRealisticOn(view);
    }
  }, [viewerDivRef.current])

  return React.createElement("globebody", { is: "x3d" }, <div id="viewerDiv" ref={viewerDivRef}></div>);
}

export default GlobeWindow;
