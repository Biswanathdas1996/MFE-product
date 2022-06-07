import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Product from "./Product";
import Container from "@mui/material/Container";
import { productData } from "./mock";

export default function ProductList({ cartCount }) {
  const [loading, setLoading] = useState<boolean>(false);
  localStorage.setItem("products", JSON.stringify(productData));

  return (
    <Container style={{ marginTop: "2rem" }}>
      {!loading && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {productData &&
              productData?.data?.map((data) => {
                return (
                  <Grid item xs={12} sm={12} md={3} lg={3} key={data?.title}>
                    <Product data={data} cartCount={cartCount} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      )}
    </Container>
  );
}
