import { useEffect, useState } from "react";

function GiffImages(props) {
  let [giffData, setGiffData] = useState([]);

  useEffect(() => {
    tranformAndSetData(props.data.data);
  }, [props.data]);

  function tranformAndSetData(data) {
    data &&
      data.map((item) => {
        return {
          id: item.id,
          images: {
            original: {
              webp: item.images.original.webp,
              url: item.images.original.url
            }
          }
        };
      });

    setGiffData(data);
  }

  return (
    <>
      {giffData && giffData.length > 0 ? (
        <div>
          <div> Total Count: {giffData.length} </div>
          <div>
            {" "}
            {giffData.map((item) => {
              return <img src={item.images.original.webp} alt="loading..." />;
            })}{" "}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default GiffImages;
