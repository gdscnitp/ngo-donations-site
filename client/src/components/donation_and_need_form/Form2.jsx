import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Input} from "reactstrap";

const Form2 = () => {
    return(
        <>
        <div className="table-responsive">
        <table className="center">
			<tr>
				<td>
					<label for="form-no">Describe your problem:</label>
				</td>
				<td>
        <input type="text" class="form-control" id="validationTooltip01" required />
				</td>
			</tr>
			<tr>
				<td>
					<label for="form-no">Describe your needs:</label>
				</td>
				<td>
      <Input type="select" name="select" id="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Input>
     
				</td>
			</tr>
            <tr>
				<td>
					<label for="form-no">Location:</label>
				</td>
				<td>
        <input type="text" class="form-control" id="validationTooltip01" required />
				</td>
			</tr>
            <tr>
				<td>
					<label for="form-no">Help Required For:</label>
				</td>
				<td>
        <input type="text" class="form-control" id="validationTooltip01" required />
				</td>
			</tr>
            <tr>
				<td>
					<label for="form-no">No. of persons requiring help:</label>
				</td>
				<td>
        <input type="text" class="form-control" id="validationTooltip01" required />
				</td>
			</tr>
      </table>
      </div>
</>
    )
}

export default Form2;