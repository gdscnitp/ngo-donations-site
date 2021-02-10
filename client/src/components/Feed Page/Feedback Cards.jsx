import React, {useState, useEffect} from "react";
import icon from "./assests/image 21.svg";
import axios from 'axios';

const Feed = () => {
  const [response, setResponse] = useState({
  });
  var res;
  const getList = async () => {
   res = await axios.get(`http://localhost:5000/requests/getlist`);
   setResponse(res);
  };
  

  


  
  useEffect(() => {
    setResponse({res});
    console.log(res)
  }, [res])
  
  return (
    <>
     <div className="container col-12 mb-0">
        <div class="tabContainer">
          <div class="buttonContainer">
            <button className="tab-btn-1">Activities</button>
            <button className="tab-btn-2"  onClick={() => getList()}>Requests</button>
          </div>
        </div>
      </div>
    <div>
    {response.data !== undefined ? (response.data.map((data) => {
      return (
      <div className="container col-10">
      <div className="card mt-5 feed-card">
        <div className="row">
          <div className="col-md-2">
            <img src={icon} className="feed-img" alt="Feed" />
          </div>
          <div className="col-md-8">
            <p className="mt-3 mb-3 text-center feed-title">Reason:- {data.reason}</p>
            <p className="text-center feed-para">Description:- {data.desc}</p>
            <p className="text-center feed-para mt-4">Location:- {data.loc}</p>
          </div>
          <div className="col-md-2">
            <button className="btn btn-warning mt-5 feed-card-btn">
              Contact
            </button>
          </div>
        </div>
      </div>
      </div>
      )
    })) : ""}
    </div>
      
      <br/><br/><br/>
    </>
  );
};

export default Feed;
