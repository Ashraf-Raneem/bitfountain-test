import { Button, Dialog } from "@material-ui/core";
import React, { useState } from "react";
import ModelDetail from "../modelDetail/ModelDetail";

interface ModelInterface {
  id?: String;
  brandId: String;
  name: String;
  typeId: String;
  comment: String;
  description: String;
}

const Model: React.FC<ModelInterface> = ({
  id,
  brandId,
  name,
  typeId,
  comment,
  description,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="model-container">
      <p>
        <strong> Brand Id : </strong> {brandId}
      </p>
      <p>
        <strong> Name : </strong>
        {name}
      </p>
      <p>
        <strong> Type Id : </strong>
        {typeId}
      </p>
      <p>
        <strong> Comment : </strong>
        {comment}
      </p>
      <p>
        <strong> Description : </strong>
        {description}
      </p>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Details
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <ModelDetail name={name} brandId={brandId}></ModelDetail>
      </Dialog>
    </div>
  );
};
export default Model;
