import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Nav({ label, menus = [] }) {
    return (
        <PopupState variant="popover"  popupId="demo-popup-menu">
            {(popupState) => (
                <>
                    <Button endIcon={menus.length > 0 && <KeyboardArrowDownIcon />} variant="text" color='inherit' {...bindTrigger(popupState)}>
                        {label}
                    </Button>
                    {menus.length > 0 && <Menu {...bindMenu(popupState)}>
                        {menus.length > 0 && menus.map((menu) => <MenuItem  style={{minWidth:"100px"}} key={menu.id} onClick={popupState.close}>{menu.title}</MenuItem>)}
                    </Menu>}
                </>
            )}
        </PopupState>
    )

}

export default Nav