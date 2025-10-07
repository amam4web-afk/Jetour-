var data = [];
$.ajax({
  url: '/prj/archive/getParterList?categoryCode=globalpartners',
  type: 'post',
  dataType: "json",
  data: { lang_id: "en" },
  success: (res) => {
    res.data.forEach((v) => {
      if (v.children) {
        v.children.forEach((item) => {
          item.latitude = parseFloat(item.latitude);
          item.longitude = parseFloat(item.longitude);
          if (!isNaN(item.latitude) && !isNaN(item.longitude)) {
            data.push(item);
          }
        });
      }
    });
    GetMap();
  },
});

document.addEventListener('DOMContentLoaded', function() {
    GetMap();
});

var map, mapMb, popup;

var popupTemplate = `<div class="customInfobox" style="width:max-content;">
  <div class="title">{title}</div>
  <div class="distributorAddress"><img src="/data/tms/website/html/images/map/address_icon.png"/><div>{distributorAddress}</div></div>
  <div class="phone"><img src="/data/tms/website/html/images/map/phone_icon.png"/><div>{phone}</div></div>
  <div class="world"><img src="/data/tms/website/html/images/map/world_icon.png"/><div>{websiteAddress}</div></div>
  <div class="world"><img src="/data/tms/website/html/images/map/ins_icon.png"/><div>{ins}</div></div>
  <div class="world"><img src="/data/tms/website/html/images/map/email_icon.png"/><div>{email}</div></div>
</div>`;

function GetMap() {
  // IMPORTANT: Replace with your Azure Maps subscription key.
  var azureMapsKey = "9s3prvoShOJDhlgnzCTScGTV8YHNM0O7mZdVRAK2AVE7i0mc0LLBJQQJ99BGACYeBjFOopNYAAAgAZMP1h5Y";

  map = new atlas.Map('myMap', { authOptions: { authType: 'subscriptionKey', subscriptionKey: azureMapsKey }, view: 'Auto', renderWorldCopies: false });
  mapMb = new atlas.Map('mapMb', { authOptions: { authType: 'subscriptionKey', subscriptionKey: azureMapsKey }, view: 'Auto', renderWorldCopies: false });
  popup = new atlas.Popup({ pixelOffset: [0, -20], closeButton: true, fillColor: 'transparent' });


  map.events.add('ready', () => onMapReady(map));
  mapMb.events.add('ready', () => onMapReady(mapMb));
}

function onMapReady(targetMap) {
    targetMap.events.add('click', (e) => {
        popup.close();
    });
    targetMap.controls.add([
            new atlas.control.StyleControl(),
            new atlas.control.ZoomControl()
        ], {
            position: 'top-right'
    });
    setPins(targetMap);
    setMapBounds(targetMap);
}

function setPins(targetMap) {
    targetMap.markers.clear();
    data.forEach(item => {
        addStandardMarker(targetMap, item);
    });
}

function addStandardMarker(targetMap, item) {
    const element = document.createElement('div');
    element.style.width = '18px';
    element.style.height = '18px';
    element.style.borderRadius = '50%';
    element.style.background = '#ff874a';
    element.style.border = '2px solid white';
    element.style.cursor = 'pointer';

    element.addEventListener('click', (e) => {
        e.stopPropagation();
        pushpinClicked(item, [item.longitude, item.latitude], targetMap);
    });

    var marker = new atlas.HtmlMarker({
        htmlContent: element,
        position: [item.longitude, item.latitude]
    });
    targetMap.markers.add(marker);
}

function addSpecialMarker(targetMap, item) {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.cursor = 'pointer';

    const icon = document.createElement('div');
    icon.style.width = '25px';
    icon.style.height = '30px';
    icon.style.backgroundImage = 'url(/data/tms/website/html/images/map/address.png)';
    icon.style.backgroundSize = 'cover';

    const text = document.createElement('div');
    text.innerText = 'JETOUR';
    text.style.fontWeight = 'bold';
    text.style.color = '#333';
    text.style.marginTop = '2px';

    container.appendChild(icon);
    container.appendChild(text);

    container.addEventListener('click', (e) => {
        e.stopPropagation();
        pushpinClicked(item, [item.longitude, item.latitude], targetMap);
    });

    var marker = new atlas.HtmlMarker({
        htmlContent: container,
        position: [item.longitude, item.latitude],
        // Offset the marker so that the tip of the pin is at the coordinate.
        // The icon is 30px high.
        pixelOffset: [0, 30]
    });
    targetMap.markers.add(marker);
}



function setMap(latitude, longitude, zoom = 3, index, state, item) {
    const lon = parseFloat(longitude);
    const lat = parseFloat(latitude);

    [map, mapMb].forEach(targetMap => {
        targetMap.markers.clear();
        data.forEach(d => {
            if (d.city_name_cn !== state) {
                addStandardMarker(targetMap, d);
            }
        });
        addSpecialMarker(targetMap, item);
        console.log('设置了地图 经纬度', lat, lon, zoom, index, state, item, 'setMap');
        targetMap.setCamera({ center: [lon, lat], zoom: zoom });
    });
}

function setMapBounds(targetMap) {
    if (data.length === 0) return;
    var bounds = atlas.data.BoundingBox.fromPositions(data.map(p => [p.longitude, p.latitude]));
    targetMap.setCamera({ bounds: bounds, padding: 80 });
}

function pushpinClicked(item, position, targetMap) {
  popup.close();
  var content = popupTemplate
    .replace("{title}", item.city_name_cn || '')
    .replace("{distributorAddress}", item.address || 'null')
    .replace("{websiteAddress}", !item.url ? "null" : `<a style="color: #fff;" href="${item.url}" target="_blank">${item.url}</a>`)
    .replace("{ins}", !item.ins ? "null" : `<a style="color: #fff;" href="${item.ins}" target="_blank">${item.ins}</a>`)
    .replace("{phone}", item.telephone || 'null')
    .replace("{email}", !item.email ? "null" : `<a style="color: #fff;" href="mailto:${item.email}">${item.email}</a>`);

  popup.setOptions({ content: content, position: position });
  popup.open(targetMap);
}