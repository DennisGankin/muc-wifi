const osmLayer = new ol.layer.Tile({
      source: new ol.source.OSM()
})
  
const iconStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 5,
        fill: new ol.style.Fill({color: 'grey'}),
        stroke: new ol.style.Stroke({
            color: 'white',
            width: 1,
        }),
    }),
});

///create feature array of wifi spots
wifiData.forEach(element => {
    console.log(element.typ)
});

var iconFeatures = wifiData.map(function(elem) {

    let iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([elem.longitude, elem.latitude])),
        name: 'WiFi hotspot',
    });

    iconFeature.setStyle(iconStyle);

    return iconFeature
});
  
const vectorSource = new ol.source.Vector({
    features: iconFeatures,
});
  
const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
});

var map = new ol.Map({
    target: 'map',
    layers: [osmLayer,vectorLayer],
    view: new ol.View({
      center: ol.proj.fromLonLat([11.575, 48.138]),
      zoom: 11.5
    })
});

var attribution = new ol.control.Attribution({
    collapsible: false
});
