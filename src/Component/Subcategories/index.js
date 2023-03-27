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
import { useRouter } from "next/router";
import { Data } from "@/src/Common/card";
export const SubCategoires = () => {
  const router = useRouter();

  const RenderItem = ({ x }) => {
    return (
      <Grid item xs={3}>
        <Card
          sx={{ minWidth: 200 }}
          style={{ backgroundColor: "#ffffff", borderRadius: 10 }}
          elevation={0}
          spacing={10}
        >
          <CardActionArea onClick={() => router.push("/PromptDetails")}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: x.color }}
                  aria-label="recipe"
                  variant="rounded"
                >
                  <ContentCopyIcon />
                </Avatar>
              }
              title={x.name}
              subheader={x.ToolesName}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {x.Desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* </Link> */}
      </Grid>
    );
  };
  return (
    <div style={{ backgroundColor: "#eff7fd" }}>
      <Box paddingRight={5} paddingLeft={5} paddingBottom={5} paddingTop={5}>
      <h1>Prompt</h1>
        <Grid
          container
          spacing={1}
          //   columns={{ xs:2 , md: 12 }}
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: 20 }}
        >
          {Data.map((item) => {
            return <RenderItem x={item} />;
          })}
        </Grid>
      </Box>
    </div>
  );
};
