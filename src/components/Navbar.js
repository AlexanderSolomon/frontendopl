import React from 'react'
import {AppBar, IconButton, Toolbar} from "@mui/material"
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton>
                <Link to="/">home</Link>
            </IconButton>
            Navbar
        </Toolbar>
    </AppBar>
  )
}


export default Navbar