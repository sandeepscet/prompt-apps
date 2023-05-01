import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function RadioButton() {
	return (
		<FormControl>
			<FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
			>
				<FormControlLabel value="female" control={<Radio />} label="Female" />
				<FormControlLabel value="male" control={<Radio />} label="Male" />
				<FormControlLabel value="other" control={<Radio />} label="Other" />
			</RadioGroup>
		</FormControl>
	);
}
