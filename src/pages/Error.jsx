import React from "react";

function Error() {
  return (
    <div className="h-[90vh] w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-7xl font-primary font-bold">Error</h1>
      <p className="my-4 text-xl md:text-3xl font-primary">
        Ooooopss looks like the page doesnt exist
      </p>
    </div>
  );
}

export default Error;
