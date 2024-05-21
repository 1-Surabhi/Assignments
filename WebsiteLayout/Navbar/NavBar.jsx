import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Nav from '../Nav';



const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function NavBar() {

  const menus = [
    {
      id: 1,
      label: "Home",
      active: true,
      subMenu: [
        {
          id: 1,
          title: "Home 1"
        },
        {
          id: 2,
          title: "Home 2"
        }
        ,
        {
          id: 3,
          title: "Home 3"
        },
        {
          id: 4,
          title: "Home 4"
        }
      ]
    },
    {
      id: 2,
      label: "About",
      active: false,
    },
    {
      id: 3,
      label: "Shop",
      active: false,
      subMenu: [
        {
          id: 1,
          title: "abcd"
        }
      ]
    },
    {
      id: 4,
      label: "Vendors",
      active: false,
      subMenu: [
        {
          id: 1,
          title: "abcd"
        }
      ]
    }
    ,
    {
      id: 5,
      label: "Blog",
      active: false,
      subMenu: [
        {
          id: 1,
          title: "abcd"
        }
      ]
    }
    ,
    {
      id: 6,
      label: "Page",
      active: false,
      subMenu: [
        {
          id: 1,
          title: "abcd"
        }
      ]
    }
    ,
    {
      id: 7,
      label: "Contact",
      active: false,
    }
  ]
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const gridStyle = { display: "flex", justifyContent: "center", alignItems: "center" }
  const btnStyle = { textTransform: "capitalize", fontWeight: "600" }

  return (
    <div className='navbar'>
      <div className='categories'>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          style={{ backgroundColor: "#3bb77e", textTransform: "capitalize" }}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          startIcon={<GridViewOutlinedIcon />}
        >
          Browse
          All Categories
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} >
              <Grid item md={6} style={gridStyle}>
                <Button component="label" color='inherit' style={btnStyle} variant="outlined" startIcon={<img width={"22px"} src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/category-1.svg" />} >
                  Milks & Dairies
                </Button>
              </Grid>
              <Grid item md={6} style={gridStyle}>
                <Button component="label" color='inherit' style={btnStyle} variant="outlined" startIcon={<img width={"22px"} src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/category-1.svg" />} >
                  Milks & Dairies
                </Button>
              </Grid>
            </Grid>
          </Box>
        </StyledMenu>
      </div>
      <div className='nav-link'>
        <div>
          <Button startIcon={<LocalFireDepartmentIcon />}  variant="text" color='inherit'>
            Hot Deals
          </Button>
        </div>
        <div className='all-menus'>
          {menus.map((menu) => <Nav/>)}
        </div>

      </div>
      <div className='contact-support'>
        <div className='icon-side'>
          <HeadsetMicOutlinedIcon fontSize='large' />
        </div>
        <div className='contact-side'>
          <h2>1900 - 888</h2>
          <p>24/7 Support Center</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar