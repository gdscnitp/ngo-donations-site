import React from "react";

const Form = () => {
  return (
    <>
      <div className="table-responsive">
        <form action="../../../../../activity" method="post">
        <table className="center">
          <tr>
            <td>
              <label for="form-no">
                The organisation ,people or cause you would like to donate:
              </label>
            </td>
            <td>
              <input
                type="text"
                class="form-control"
                id="validationTooltip01"
                name="donateTo"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">The type of donation:</label>
            </td>
            <td>
              <input
                type="text"
                class="form-control"
                id="validationTooltip01"
                name="donationType"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">
                Photo of goodies/merchandise:(optional)<br></br>(This will apear
                if miney is not selected)
              </label>
            </td>
            <td>
              <div class="custom-file">
                <input
                  type="file"
                  name="photo"
                  class="custom-file-input"
                  id="validatedCustomFile"
                />
                <label class="custom-file-label" for="validatedCustomFile">
                  Choose file...
                </label>
                <div class="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="form-no">
                Would you like to share the amount of money you are donating:
              </label>
            </td>
            <td>
              <input
                type="text"
                class="form-control"
                id="validationTooltip01"
                name="shareTheMoney"
                placeholder="Please enter yes or no"
                required
              />
            </td>
          </tr>
        </table>
        <div className="button">
      <button type="submit" class="btn btn-success">
        Submit for Approval
      </button>
    </div>
        </form>
      </div>
    </>
  );
};

export default Form;
