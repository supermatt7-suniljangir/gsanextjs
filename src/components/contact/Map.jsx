import React from "react";

const Map = () => {
  return (
    <div className="h-[60vh] md:h-screen">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7613.656962965136!2d78.229036!3d17.420017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbed274865c61b%3A0x4f3b0c644a1e03b7!2sGlobal%20Stone%20Art!5e0!3m2!1sen!2sus!4v1735559872375!5m2!1sen!2sus"
        width="100%"
        height="100%"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
