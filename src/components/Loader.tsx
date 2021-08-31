import React from "react";
interface parentPropData {
    modal: string;
}
const Loader: React.FC<parentPropData> = (props: parentPropData) => {
    return (
        <div className="row center-align">
              <p>{props.modal} are loading!!</p> 
              <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default Loader;