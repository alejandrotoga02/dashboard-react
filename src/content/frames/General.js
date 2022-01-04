import IFrame from "./IFrame";

const General = () => {
  const domain = "http://cognidata.southcentralus.cloudapp.azure.com/single/";
  const queryParams =
    "?appid=0b34b568-f242-4a1d-b54c-7bfb96d3f274&sheet=18afa921-7264-4a7d-84fe-aa9ac56380b7&opt=ctxmenu,currsel";
  const iframe = `<iframe src="${domain}${queryParams}" style="border:none;width:100%;height:1000px;"></iframe>`;
  return (
    <>
      <IFrame iframe={iframe} />
    </>
  );
};

export default General;
