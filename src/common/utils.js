export const numberWithCommas = x => {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
};

export const convertToCSV = objArray => {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  var str = "";

  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line !== "") line += ",";

      line += array[i][index];
    }

    str += line + "\r\n";
  }

  return str;
};

export const exportCSVFile = (headers, items, fileTitle) => {
  if (headers) {
    items.unshift(headers);
  }

  // Convert Object to JSON
  const jsonObject = JSON.stringify(items);

  const csv = convertToCSV(jsonObject);

  const exportedFilename = fileTitle + ".csv" || "export.csv";

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const anchor = document.createElement("a");
  anchor.download = exportedFilename;
  anchor.href = window.URL.createObjectURL(blob);
  anchor.dataset.downloadurl = ["text/csv", anchor.download, anchor.href].join(
    ":"
  );
  anchor.click();
};
