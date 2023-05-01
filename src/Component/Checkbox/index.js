import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";

export default function CheckboxLabels() {
	const [checkedValues, setCheckedValues] = useState({
		football: false,
		basketball: false,
		abc: false
	});

	const handleCheckboxChange = (event) => {
		setCheckedValues({ ...checkedValues, [event.target.name]: event.target.checked });
	};

	return (
		<FormGroup>
			<Typography variant="h5" gutterBottom>
				ABC
			</Typography>
			<FormControlLabel
				control={
					<Checkbox
						checked={checkedValues.football}
						onChange={handleCheckboxChange}
						name="football"
					/>
				}
				label="Football"
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={checkedValues.basketball}
						onChange={handleCheckboxChange}
						name="basketball"
					/>
				}
				label="Basketball"
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={checkedValues.abc}
						onChange={handleCheckboxChange}
						name="abc"
					/>
				}
				label="ABC"
			/>
		</FormGroup>
	);
}
