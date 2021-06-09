import { CircularProgress, Grid, Box, Button, Dialog } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ModalAddForm from "../components/modelAddForm/ModelAddForm";
import { connect } from "react-redux";
import Model from "../components/model/Model";
import { getModels } from "../redux/model/ModelActions";
import { withRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Index: React.FC = (props: any) => {
  const [formModal, setFormModal] = useState(false);
  useEffect(() => {
    props.getModels();
  }, []);
  const handleClose = () => {
    setFormModal(false);
  };
  const model = props.model.models;
  return (
    <React.Fragment>
      <Navbar />
      <Box margin={10}>
        <div className="model-header-group">
          <div className="model-header">
            <h3>These are the list of available models</h3>
          </div>
          <div className="model-add-btn">
            <Button
              color="primary"
              variant="contained"
              onClick={() => setFormModal(true)}
            >
              Add Item
            </Button>
          </div>
        </div>
        <div className="model-block">
          <Grid container spacing={1}>
            {model !== null ? (
              model.map((item: any) => {
                return (
                  <Grid item xs={6} md={3} spacing={3}>
                    <Model
                      id={item.Id}
                      brandId={item.BrandId}
                      name={item.Name}
                      typeId={item.TypeId}
                      comment={item.Comment}
                      description={item.Description}
                    />
                  </Grid>
                );
              })
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </div>
      </Box>
      <Dialog open={formModal} onClose={handleClose}>
        <ModalAddForm />
      </Dialog>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  model: state.model,
});
export default withRouter(connect(mapStateToProps, { getModels })(Index));
