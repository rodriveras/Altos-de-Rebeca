var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Satelite_1 = new ol.layer.Tile({
            'title': 'Satelite',
            //'type': 'base',
            'opacity': 0.767000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Parcelas_2 = new ol.format.GeoJSON();
var features_Parcelas_2 = format_Parcelas_2.readFeatures(json_Parcelas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_2.addFeatures(features_Parcelas_2);
var lyr_Parcelas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelas_2, 
                style: style_Parcelas_2,
                popuplayertitle: "Parcelas",
                interactive: true,
    title: 'Parcelas<br />\
    <img src="styles/legend/Parcelas_2_0.png" /> Disponible<br />\
    <img src="styles/legend/Parcelas_2_1.png" /> Reservada<br />\
    <img src="styles/legend/Parcelas_2_2.png" /> Vendida<br />'
        });
var format_Postes_3 = new ol.format.GeoJSON();
var features_Postes_3 = format_Postes_3.readFeatures(json_Postes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Postes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postes_3.addFeatures(features_Postes_3);
var lyr_Postes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postes_3, 
                style: style_Postes_3,
                popuplayertitle: "Postes",
                interactive: true,
                title: '<img src="styles/legend/Postes_3.png" /> Postes'
            });
var format_Fotos_georref_4 = new ol.format.GeoJSON();
var features_Fotos_georref_4 = format_Fotos_georref_4.readFeatures(json_Fotos_georref_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fotos_georref_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fotos_georref_4.addFeatures(features_Fotos_georref_4);
var lyr_Fotos_georref_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fotos_georref_4,
maxResolution:1.6802679691357179,
 
                style: style_Fotos_georref_4,
                popuplayertitle: "Fotos_georref",
                interactive: true,
                title: '<img src="styles/legend/Fotos_georref_4.png" /> Fotos_georref'
            });
var format_Rutadeacceso_5 = new ol.format.GeoJSON();
var features_Rutadeacceso_5 = format_Rutadeacceso_5.readFeatures(json_Rutadeacceso_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutadeacceso_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutadeacceso_5.addFeatures(features_Rutadeacceso_5);
var lyr_Rutadeacceso_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutadeacceso_5, 
                style: style_Rutadeacceso_5,
                popuplayertitle: "Ruta de acceso",
                interactive: true,
                title: '<img src="styles/legend/Rutadeacceso_5.png" /> Ruta de acceso'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Satelite_1.setVisible(true);lyr_Parcelas_2.setVisible(true);lyr_Postes_3.setVisible(false);lyr_Fotos_georref_4.setVisible(true);lyr_Rutadeacceso_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Satelite_1,lyr_Parcelas_2,lyr_Postes_3,lyr_Fotos_georref_4,lyr_Rutadeacceso_5];
lyr_Parcelas_2.set('fieldAliases', {'id': 'id', 'Area M2': 'Area M2', 'Postacion': 'Postacion', 'Condicion': 'Condicion', });
lyr_Postes_3.set('fieldAliases', {'id': 'id', 'Area M2': 'Area M2', 'Postacion': 'Postacion', });
lyr_Fotos_georref_4.set('fieldAliases', {'id': 'id', 'Foto': 'Foto', });
lyr_Rutadeacceso_5.set('fieldAliases', {'Distancia': 'Distancia', });
lyr_Parcelas_2.set('fieldImages', {'id': 'TextEdit', 'Area M2': 'Range', 'Postacion': 'TextEdit', 'Condicion': 'TextEdit', });
lyr_Postes_3.set('fieldImages', {'id': 'TextEdit', 'Area M2': 'TextEdit', 'Postacion': 'TextEdit', });
lyr_Fotos_georref_4.set('fieldImages', {'id': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Rutadeacceso_5.set('fieldImages', {'Distancia': 'TextEdit', });
lyr_Parcelas_2.set('fieldLabels', {'id': 'inline label - always visible', 'Area M2': 'inline label - always visible', 'Postacion': 'inline label - always visible', 'Condicion': 'no label', });
lyr_Postes_3.set('fieldLabels', {'id': 'header label - visible with data', 'Area M2': 'no label', 'Postacion': 'no label', });
lyr_Fotos_georref_4.set('fieldLabels', {'id': 'no label', 'Foto': 'inline label - always visible', });
lyr_Rutadeacceso_5.set('fieldLabels', {'Distancia': 'inline label - always visible', });
lyr_Rutadeacceso_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});