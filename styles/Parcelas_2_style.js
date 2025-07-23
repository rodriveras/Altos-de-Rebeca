var size = 0;
var placement = 'point';
function categories_Parcelas_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Disponible':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(242,242,242,0.25)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(25,249,31,0.07254901960784314)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Reservada':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(242,242,242,0.25)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(247,189,5,0.24313725490196078)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vendida':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(242,242,242,0.25)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(200,38,9,0.25)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Parcelas_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Condicion");
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Arial\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("id") !== null) {
        labelText = String(feature.get("id"));
    }
    
var style = categories_Parcelas_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
