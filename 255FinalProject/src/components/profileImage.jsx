import React, { useEffect, useState } from "react";

const Image = () => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    fetch(
      "https://images.pexels.com/photos/823301/pexels-photo-823301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      { mode: "cors" }
    )
      .then((response) => {
        if (response.ok) {
          return response.url;
        }
        throw new Error("Network response was not ok.");
      })
      .then((url) => setImageURL(url))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <>
      {/* requires styling troubleshooting */}
      {imageURL && (
        <img
          src={imageURL}
          alt="stop and pray picture"
          style={{
            width: "200px",
            height: "auto",
            maxWidth: "100%",
            display: "block", // Change to "flex" once style issue is debugged
            margin: "0 auto", // delete after debugging
          }}
        />
      )}
    </>
  );
};

export default Image;
