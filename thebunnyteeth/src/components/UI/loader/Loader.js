import React, { useState } from "react";
import * as commonService from "utility/utility";
import { baseImagePath } from "utility/utility";
import "./Loader.css"; 
const Loader = (props) => {
  const [loading, setLoading] = useState(false);

  commonService.isLoading.subscribe((val) => {
    if (loading !== val) setLoading(val);
  });

  return (
    <div className={`progress-loader`} hidden={!loading && !props.lazyLoad}>
      <div id="overlay"></div>
    </div>
  );
};

export default Loader;
