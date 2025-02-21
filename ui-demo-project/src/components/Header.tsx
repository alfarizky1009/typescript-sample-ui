import { Button, FormControl, Menu, MenuItem } from "@material-ui/core";
import { createUseStyles } from "react-jss";
import {
  Notifications,
  Email,
  KeyboardArrowDown,
  ManageAccounts,
  Person,
  Password,
  Lock,
  AddPhotoAlternate,
  Logout,
} from "@mui/icons-material";

import { useState } from "react";

const useStyles = createUseStyles(
  {
    container: {
      backgroundColor: "black",
      width: "100vw",
      display: "flex",
      height: "100%",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: "center",
      gap: 10,
    },
    logo: {
      background: "transparent",
      height: 40,
      width: 130,
    },
    icon: {
      color: "white",
      height: 40,
      width: 40,
    },
    quickAction: {
      display: "flex",
      color: "white",
      alignItems: "center",
      justifySelf: "end",
    },
    quickActionContainer: {
      position: "fixed",
      right: 220,
    },
    profileContainer: {
      position: "fixed",
      right: 140,
    },
    nameSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      fontSize: 14,
    },
    langAction: {
      display: "flex",
      color: "white",
      alignItems: "center",
      justifySelf: "end",
    },
    langActionContainer: {
      position: "fixed",
      right: 30,
    },
    flag: {
      width: 40,
      height: 20,
      borderRadius: "10%",
    },
    flagList: {
      width: 40,
      height: 20,
      borderRadius: "10%",
      marginRight: 5,
    },
  },
  { name: Header.name }
);

export default function Header() {
  const classes = useStyles();
  const [quickAnchorEl, setQuickAnchorEl] = useState<null | HTMLElement>(null);
  const openQuick = Boolean(quickAnchorEl);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const openProfile = Boolean(profileAnchorEl);
  const [langAnchorEl, setLangAnchorEl] = useState<null | HTMLElement>(null);
  const openLang = Boolean(langAnchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    setAnchorState: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  ) => {
    setAnchorState(event.currentTarget);
  };
  const handleClose = (
    setAnchorState: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  ) => {
    setAnchorState(null);
  };
  const quickElement = document.getElementById("quick-button");
  const quickRect = quickElement?.getBoundingClientRect();
  const profileElement = document.getElementById("profile-button");
  const profileRect = profileElement?.getBoundingClientRect();
  const langElement = document.getElementById("lang-button");
  const langRect = langElement?.getBoundingClientRect();

  return (
    <FormControl>
      <nav>
        <div className={classes.container}>
          <img
            className={classes.logo}
            src={
              "https://demo.pipsbackfx.app/application/default/themes/twenty22/img/logo-mypbfx.png"
            }
            alt={"sampleLogo"}
          />
          <Button>
            <Email className={classes.icon} />
          </Button>
          <Button>
            <Notifications className={classes.icon} />
          </Button>
          <div className={classes.quickActionContainer}>
            <Button
              id={"quick-button"}
              aria-controls={openQuick ? "quick-menu" : undefined}
              aria-haspopup={"true"}
              aria-expanded={openQuick ? "true" : undefined}
              onClick={(e) => handleClick(e, setQuickAnchorEl)}
              className={classes.quickAction}
            >
              <div className={classes.quickAction}>
                Quick Action
                <KeyboardArrowDown />
              </div>
            </Button>
          </div>
          <Menu
            id={"quick-menu"}
            anchorEl={quickAnchorEl}
            anchorReference={"anchorPosition"}
            anchorPosition={{
              top: quickRect?.top ? quickRect.top + 40 : 0,
              left: quickRect?.left ? quickRect.left : 0,
            }}
            open={openQuick}
            onClose={() => handleClose(setQuickAnchorEl)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleClose(setQuickAnchorEl)}>
              Trading Account Validation
            </MenuItem>
            <MenuItem onClick={() => handleClose(setQuickAnchorEl)}>
              Request Move IB
            </MenuItem>
            <MenuItem onClick={() => handleClose(setQuickAnchorEl)}>
              Add Payment System
            </MenuItem>
            <MenuItem onClick={() => handleClose(setQuickAnchorEl)}>
              Withdrawal Rebate
            </MenuItem>
            <MenuItem onClick={() => handleClose(setQuickAnchorEl)}>
              Rebate Setup
            </MenuItem>
          </Menu>
          <div className={classes.profileContainer}>
            <Button
              id={"profile-button"}
              aria-controls={openProfile ? "profile-menu" : undefined}
              aria-haspopup={"true"}
              aria-expanded={openProfile ? "true" : undefined}
              onClick={(e) => handleClick(e, setProfileAnchorEl)}
              className={classes.quickAction}
            >
              <div className={classes.quickAction}>
                <ManageAccounts />
                <KeyboardArrowDown />
              </div>
            </Button>
          </div>
          <Menu
            id={"profile-menu"}
            anchorEl={profileAnchorEl}
            anchorReference={"anchorPosition"}
            anchorPosition={{
              top: profileRect?.top ? profileRect.top + 40 : 0,
              left: profileRect?.left ? profileRect.left : 0,
            }}
            open={openProfile}
            onClose={() => handleClose(setProfileAnchorEl)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem button={false}>
              <div className={classes.nameSection}>
                <div>
                  <b>Mr. Just User Demo</b>
                </div>
                <div>@userdemo</div>
              </div>
            </MenuItem>
            <hr
              style={{
                width: "80%",
                opacity: "20%",
                marginLeft: "10%",
                marginRight: "10%",
              }}
            />
            <MenuItem>
              <Person />
              Profile
            </MenuItem>
            <MenuItem>
              <Password />
              Change Password
            </MenuItem>
            <MenuItem>
              <Lock />
              Login Security
            </MenuItem>
            <MenuItem>
              <AddPhotoAlternate />
              Update Profile Picture
            </MenuItem>
            <hr
              style={{
                width: "80%",
                opacity: "20%",
                marginLeft: "10%",
                marginRight: "10%",
              }}
            />
            <MenuItem>
              <Logout />
              Logout
            </MenuItem>
          </Menu>
          <div className={classes.langActionContainer}>
            <Button
              id={"lang-button"}
              aria-controls={openLang ? "lang-menu" : undefined}
              aria-haspopup={"true"}
              aria-expanded={openLang ? "true" : undefined}
              onClick={(e) => handleClick(e, setLangAnchorEl)}
              className={classes.langAction}
            >
              <div className={classes.langAction}>
                <img
                  className={classes.flag}
                  alt={"langIcon"}
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                  }
                />
                <KeyboardArrowDown />
              </div>
            </Button>
          </div>
          <Menu
            id={"lang-menu"}
            anchorEl={langAnchorEl}
            anchorReference={"anchorPosition"}
            anchorPosition={{
              top: langRect?.top ? langRect.top + 40 : 0,
              left: langRect?.left ? langRect.left : 0,
            }}
            open={openLang}
            onClose={() => handleClose(setLangAnchorEl)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <img
                className={classes.flagList}
                alt={"indonesia-flag"}
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAABlBMVEX/AAD///9BHTQRAAAAhElEQVR4nO3PMQEAAAjAIO1f2hRegwbMAAAAAAAAAAAAAAAAAAAAAAAAAAAAPNk2/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv+2A+BhVKwOtdkDAAAAAElFTkSuQmCC"
                }
              />
              Indonesia
            </MenuItem>
            <MenuItem>
              <img
                className={classes.flagList}
                alt={"malaysia-flag"}
                src={
                  "https://cdn.britannica.com/31/4031-050-A6FEE261/Flag-Malaysia.jpg"
                }
              />
              Malaysia
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </FormControl>
  );
}
