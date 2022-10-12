import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import { Input } from "antd";
import tempIcon from "../../assets/images/temp.png";

const SearchComponent = ({}) => {
  return (
    <Box width="100%">
      <Input placeholder="Search" style={{ padding: "10px", borderRadius: "20px", marginTop: "30px" }} />
    </Box>
  );
};

export default SearchComponent;
