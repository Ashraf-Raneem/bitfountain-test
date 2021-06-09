import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Container,
} from "@material-ui/core";
import { connect } from "react-redux";
import { getDeviceType, postDevice } from "../../redux/model/ModelActions";

const ModelAddForm: React.FC = (props: any) => {
  const [formState, setFormState] = useState({
    BrandId: "",
    Name: "",
    TypeId: "",
    Comment: "",
  });
  useEffect(() => {
    props.getDeviceType();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormState({ ...formState, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFormState({ ...formState, TypeId: event.target.value as string });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    formData: any
  ): void => {
    e.preventDefault();
    props.postDevice(formData);
  };

  const model = props.model.deviceType;

  return (
    <Container maxWidth="lg">
      <h3>Add a model</h3>
      <Box margin={5}>
        <form onSubmit={(e) => handleSubmit(e, formState)}>
          <Box marginTop={2} className="form-group">
            <TextField
              variant="standard"
              size="medium"
              name="BrandId"
              color="primary"
              type="text"
              label="Brand Id"
              onChange={(e) => handleChange(e)}
              fullWidth
            />
          </Box>
          <Box marginTop={2} className="form-group">
            <TextField
              variant="standard"
              size="medium"
              name="Name"
              color="primary"
              type="text"
              label="Name"
              onChange={(e) => handleChange(e)}
              fullWidth
            />
          </Box>
          <Box marginTop={5} className="form-group">
            <InputLabel id="demo-simple-select-label">TypeId</InputLabel>
            <Select
              name="TypeId"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleSelectChange}
              value={formState.TypeId}
              fullWidth
            >
              <MenuItem value={""} disabled>
                Select TypeId
              </MenuItem>
              {model !== null ? (
                model[0].map((item: any) => {
                  return (
                    <MenuItem value={item.Id}>
                      {item.Id} : {item.Description}
                    </MenuItem>
                  );
                })
              ) : (
                <MenuItem value="">Loading...</MenuItem>
              )}
            </Select>
          </Box>
          <Box marginTop={2} marginBottom={5} className="form-group">
            <TextField
              variant="standard"
              size="medium"
              name="Comment"
              color="primary"
              type="text"
              label="Comment"
              onChange={(e) => handleChange(e)}
              fullWidth
            />
          </Box>

          <Button type="submit" color="primary" variant="contained">
            {props.model.loading ? "Submitting..." : "Add form"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};
const mapStateToProps = (state: any) => ({
  model: state.model,
});

export default connect(mapStateToProps, { getDeviceType, postDevice })(
  ModelAddForm
);
