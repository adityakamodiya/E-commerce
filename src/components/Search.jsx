import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "../ComponentCss/search.css"
import { Mycontext } from '../RoutungPage';
import { useContext,useEffect } from 'react';

export default function Search() {
const{searchitems,setsearchitems,searchtriger,searchcat,setsearchcat} = useContext(Mycontext)
// console.log(searchitems)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (category) => {
    setAnchorEl(null);
    // alert("oops!!!!")
    console.log("category/"+category)
    setsearchcat(category)
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        search
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {
          (searchtriger)?
           searchitems.map((category,index)=>{
            return(
        <MenuItem onClick={(e)=>{handleClose(category)}}>{category}</MenuItem>

      )
    }) :''
  }
   {/* <MenuItem onClick={handleClose}>category</MenuItem> */}
      </Menu>
    </div>
  );
}