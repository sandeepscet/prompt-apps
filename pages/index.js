import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Data } from "../src/Common/card";
import { CategoiresData } from "../src/Common/categoriesCard";
import { Category } from "../src/Component/Category";

import PromptDetails from "./PromptDetails";
import { Link } from "react-router-dom";
import { useRouter } from "next/router";
import { SubCategoires } from "@/src/Component/Subcategories";

const MainPage = () => {
  const router = useRouter();
  return (
    <>
      <Category />
      {/* pormpts card desgin */}
      <SubCategoires />
    </>
  );
};

export default MainPage;
