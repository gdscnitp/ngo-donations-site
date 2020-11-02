import React from "react";

const Button = () => {
  return (
      <>
    <table className="feed-table">
      <tr>
        <td>
          <div>
            <button className="btn btn-warning mt-3 mb-5 feed-up-btn">
              Donate Now
            </button>
          </div>
        </td>
        <td>
          <div>
            <button className="btn btn-warning mt-3 mb-5 feed-up-btn">
              Create New Request
            </button>
          </div>
        </td>
      </tr>
    </table>
    </>
  );
};

export default Button;
