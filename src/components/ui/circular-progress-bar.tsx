"use client";

import { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} size={200} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <Typography variant="h4" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
        <Typography variant="body2" color="textPrimary">
          150/2000 mL
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel() {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 100);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
