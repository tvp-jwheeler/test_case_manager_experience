function buildTableRowMarkup(dataItem, actions) {
      var tableRowMarkup = "<tr>";
      for (var key in dataItem) {
         if (dataItem.hasOwnProperty(key)) {
            var dataItemProp = dataItem[key];
            tableRowMarkup += "<td>"+dataItemProp+"</td>";
         }
      }
      if(actions) {
        //TODO: Process Actions
        tableRowMarkup += "<td>";
        for (var key in actions) {
           if (actions.hasOwnProperty(key)) {
              const actionItemMarkup = actions[key];
              tableRowMarkup += actionItemMarkup + " / "
           }
        }
        tableRowMarkup = tableRowMarkup.substring(0, tableRowMarkup.length - 3);
        tableRowMarkup += "</td>";
      }
      tableRowMarkup += "</tr>";
      return tableRowMarkup;
}

function doGETObjectData(endpoint_path) {
  var deferred = jQuery.Deferred();
  $.get( endpoint_path, function( data ) {
      deferred.resolve(data);
  });
  return deferred.promise();
}

function doPOSTObject(endpoint_path, payload) {
  var deferred = jQuery.Deferred();
  $.ajax({
    type: 'POST',
    data: JSON.stringify(payload),
    contentType: 'application/json',
    url: endpoint_path,            
    success: function(data) {
      deferred.resolve(JSON.stringify(data));
    }
  });
  return deferred.promise();
}