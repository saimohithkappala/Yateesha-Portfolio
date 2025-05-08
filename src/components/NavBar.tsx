import type React from "react"
import { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import { motion } from "framer-motion"

interface NavbarProps {
  window?: () => Window
}

const navItems = ["Projects", "Skills", "Demo", "Contact"]

const NavBar: React.FC<NavbarProps> = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          Portfolio
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
                "&:hover": {
                  background: "linear-gradient(90deg, #4f46e5, #db2777)",
                },
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              Resume
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <IconButton color="primary">
          <GitHubIcon />
        </IconButton>
        <IconButton color="primary">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary">
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  )

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          color="default"
          elevation={0}
          sx={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: { xs: "flex", sm: "none" }, flexGrow: 0 }}>
                  <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                    <MenuIcon />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    flexGrow: 1,
                    justifyContent: "space-between",
                    gap: 4,
                  }}
                >
                  <Box sx={{ flexGrow: 0 }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 700,
                        background: "linear-gradient(90deg, #6366f1, #ec4899)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Yateesh Portfolio
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "space-between", gap: 4, alignItems: "center" }}>
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <Button color="inherit" sx={{ fontWeight: 500 }}>
                          {item}
                        </Button>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          background: "linear-gradient(90deg, #6366f1, #ec4899)",
                          "&:hover": {
                            background: "linear-gradient(90deg, #4f46e5, #db2777)",
                          },
                        }}
                      >
                        Resume
                      </Button>
                    </motion.div>
                  </Box>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Toolbar />
    </>
  )
}

export default NavBar
