import type React from "react"
import { Box, Container, Typography, IconButton, Link, Divider } from "@mui/material"
import Grid from '@mui/material/Grid';
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 8,
        backgroundColor: "#f8fafc",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Yateesh PORTFOLIO
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A showcase of my frontend development projects and skills, built with React, TypeScript, and Material UI.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                size="small"
                sx={{
                  color: "#6366f1",
                  "&:hover": {
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "#6366f1",
                  "&:hover": {
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "#6366f1",
                  "&:hover": {
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  },
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "#6366f1",
                  "&:hover": {
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "#6366f1",
                  "&:hover": {
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  },
                }}
              >
                <EmailIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
              Navigation
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {["Home", "Projects", "Skills", "Contact"].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    underline="hover"
                    color="text.secondary"
                    sx={{
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "#6366f1",
                      },
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
              Resources
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {["Blog", "Documentation", "GitHub", "LinkedIn"].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    underline="hover"
                    color="text.secondary"
                    sx={{
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "#6366f1",
                      },
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
              Get In Touch
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Have a project in mind? Let's work together!
            </Typography>
            <Link
              href="mailto:yateeshapappala@gmail.com"
              underline="hover"
              sx={{
                color: "#6366f1",
                fontWeight: 500,
                fontSize: "0.875rem",
              }}
            >
              yateeshapappala@gmail.com
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Dev Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
