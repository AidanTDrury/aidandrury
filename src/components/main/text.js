import { Typography } from "@mui/material";

import React from 'react'

const Text = (props) => {
  return (
    <Typography variant={ props.variant }>
        { props.content }
    </Typography>
  )
}

export default Text;