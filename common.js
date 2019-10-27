function showCoordinates(pt) {
  let coords = "Lat/Lon " + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3);
  displayText(info, coords);
}

function displayText(container, text) {
  container.innerHTML = text;
}

function errorHandler(error) {
  if (error.name && error.message) {
    let info =
      '<br><span style=" color: red;">' +
      error.name +
      error.message +
      "</span>";
  } else {
    let info = '<br><span style=" color: red;">' + error + "</span>";
  }
  displayText(heading,info);
};