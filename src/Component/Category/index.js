import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import { CategoiresData } from "@/src/Common/categoriesCard";
import { Colors } from "@/src/Theme/colors";
import { Row } from "@nextui-org/react";
import { typography } from "../../Theme/typography";

export const Category = () => {
  const router = useRouter();

  const RenderItem = ({ x }) => {
    return (
      <>
        <Grid item xs={3}>
          <Card
            sx={{ minWidth: 200 }}
            style={{ backgroundColor: "#ffffff", borderRadius: 10 }}
            elevation={0}
            spacing={10}
          >
            <CardActionArea onClick={() => router.push("/PromptDetails")}>
              <CardHeader
                style={{ backgroundColor: x.color }}
                avatar={
                  <Avatar
                    sx={{ bgcolor: x.color }}
                    aria-label="recipe"
                    variant="rounded"
                    style={{
                      color: Colors.White,
                      fontSize: 12,
                    }}
                  >
                    <ContentCopyIcon />
                  </Avatar>
                }
                title={
                  <>
                    <Typography
                      align="right"
                      style={{
                        color: Colors.White,
                      }}
                    >
                      {x.ToolesName}
                    </Typography>
                    <ArrowForwardIcon />
                  </>
                }
              />

              <Box style={{ backgroundColor: x.color }}>
                <Typography
                  style={{
                    marginLeft: 16,
                    color: Colors.White,
                    ...typography.body18Regular,
                  }}
                  align="left"
                >
                  {x.name}
                </Typography>
                <Typography
                  style={{
                    marginLeft: 16,
                    color: Colors.White,
                    fontSize: 12,
                    paddingBottom: 10,
                  }}
                  align="left"
                >
                  {x.Desc}
                </Typography>
              </Box>
              <CardContent>
                <Box></Box>
                <Typography variant="body2" color="text.secondary">
                  {x.Desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </>
    );
  };

  return (
    <div style={{ backgroundColor: "#eff7fd" }}>
      <Box paddingRight={5} paddingLeft={5} paddingBottom={5} paddingTop={5}>
        <Grid
          container
          spacing={1}
          //   columns={{ xs:2 , md: 12 }}
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: 20 }}
        >
          {CategoiresData.map((item) => {
            return <RenderItem x={item} />;
          })}
        </Grid>
      </Box>
    </div>
  );
};
