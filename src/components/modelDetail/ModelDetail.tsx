import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getModel } from "../../redux/model/ModelActions";
import { Box, CircularProgress, Grid } from "@material-ui/core";

interface ModelDetailProps {
  name: String;
  brandId: String;
}

const ModelDetail: React.FC<ModelDetailProps> = (props: any) => {
  useEffect(() => {
    props.getModel(props.brandId, props.name);
  }, []);

  const model = props.model.model;
  return (
    <Box margin={5} className="model-detail-container">
      <h3>Models for {props.brandId}</h3>
      {model !== null ? (
        <Grid container className="model-detail-block">
          {model.length > 0 ? (
            model.map((item: any) => {
              return (
                <Grid item xs={6} spacing={3}>
                  <h3>{item.Name}</h3>
                  <p>
                    <strong>Id:</strong> {item.Id}
                  </p>
                  <p>
                    <strong>Data Type:</strong> {item.DataType}
                  </p>
                  <p>
                    <strong>Brand: </strong>
                    {item.Brand}{" "}
                  </p>
                  <p>
                    <strong>Model:</strong> {item.Model}
                  </p>
                  <p>
                    <strong>Name: </strong>
                    {item.Name}
                  </p>
                  <p>
                    <strong>Display Name:</strong> {item.DisplayName}
                  </p>
                  <p>
                    <strong>Description:</strong> {item.Description}
                  </p>
                  <p>
                    <strong>Status:</strong> {item.Status}
                  </p>
                  <p>
                    <strong>Group Id:</strong> {item.GroupId}
                  </p>
                  <p>
                    <strong>Protocol Order:</strong> {item.ProptocolOrder}
                  </p>
                </Grid>
              );
            })
          ) : (
            <p>There are no models</p>
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

const mapStateToProps = (state: any) => ({
  model: state.model,
});

export default connect(mapStateToProps, { getModel })(ModelDetail);
