import { useEffect, React, useState } from "react";
import axios from "axios";
const Images = ({ imgUrl }) => {
  const [img, setImg] = useState();
  useEffect(() => {
    axios
      .get(imgUrl)
      .then((response) => {
        setImg(response.data.guid.rendered);
      })
      .catch((error) => {
        console.error("Error fetching WordPress posts:", error);
      });
  }, []);

  return (
    <div className="rounded border border-warning">
      <img src={img} alt="img" className="img my-1 rounded" />
    </div>
  );
};

export default Images;
