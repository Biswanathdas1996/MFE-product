import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Product from "./Product";
import Container from "@mui/material/Container";
import axios from "axios";

export default function ProductList({ cartCount }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [productData, setProductData] = useState<any>(null);

  useEffect(() => {
    axios
      .get("https://62af1c073bbf46a3521c2bcf.mockapi.io/mock/products")
      .then((response) => {
        if (response?.status === 200) {
          localStorage.setItem("products", JSON.stringify(response?.data));
          setProductData(response?.data);
          setLoading(false);
        }
      });
  }, []);

  return (
    <Container style={{ marginTop: "2rem" }}>
      {!loading && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {productData &&
              productData?.map((data) => {
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
