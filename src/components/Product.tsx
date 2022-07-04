import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

type Props = {
  data: any;
  cartCount?: any;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Product({ data, cartCount }: Props) {
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

  const addToCartHandler = async (productId: number) => {
    const addedCartItems: any = JSON.parse(localStorage.getItem("cart"));
    const productData = JSON.parse(localStorage.getItem("products"));
    const getAddedItem: any = productData?.find(
      (data: any) => data.id === productId
    );
    let cart: any = [];
    if (addedCartItems) {
      cart = [...addedCartItems];
    }
    if (getAddedItem) {
      cart.push(getAddedItem);
    }

    await localStorage.setItem("cart", JSON.stringify(cart));
    setOpenSuccessAlert(true);

    cart ? cartCount(cart?.length) : cartCount(1);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setOpenSuccessAlert(false);
  };
  const added = JSON.parse(localStorage.getItem("cart"))?.find(
    (val: any) => val.id === data.id
  );

  return (
    <>
      <Snackbar
        open={openSuccessAlert}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Yeh....!! Item added successfully
        </Alert>
      </Snackbar>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={data?.img}
          alt={data?.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            id={`product_title_${data.id}`}
          >
            {data?.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "#d17504eb" }}
          >
            ${parseFloat(data?.price).toFixed(2)}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              height: "4rem",
            }}
          >
            {data?.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            id={`cart_${data?.id}`}
            onClick={() => addToCartHandler(data?.id)}
            variant="contained"
            color="warning"
            fullWidth={true}
            disabled={added ? true : false}
            disableElevation
          >
            {!added ? " Add to cart" : "In cart"}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
