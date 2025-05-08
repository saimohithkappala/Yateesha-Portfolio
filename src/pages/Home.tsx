"use client"

import { useState } from "react"
import { Container, Typography, Box, Grid, Button } from "@mui/material"
import { motion } from "framer-motion"
import { projects, type FrontendProject } from "../components/data/projects"
import ProjectModal from "../components/ProjectModal"
import RadarChart from "../components/RadarChart"
import InteractiveDemo from "../components/InteractiveDemo"
import { ProjectCard } from "../components/ProjectCard"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<FrontendProject>(projects[0])
  const [modalOpen, setModalOpen] = useState(false)

  const handleViewDetails = (project: FrontendProject) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <>
      <Navbar />
      <HeroSection />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Project Cards Section */}
        <Box mb={8}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  background: "linear-gradient(90deg, #6366f1, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Featured Projects
              </Typography>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon fontSize="small" />}
                sx={{
                  borderColor: "#6366f1",
                  color: "#6366f1",
                  "&:hover": {
                    borderColor: "#4f46e5",
                    backgroundColor: "rgba(99, 102, 241, 0.04)",
                  },
                }}
              >
                View All
              </Button>
            </Box>
          </motion.div>

          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <ProjectCard project={project} onViewDetails={() => handleViewDetails(project)} index={index} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tech Radar Section */}
        <Box my={8}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 4,
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Technical Skills
            </Typography>
          </motion.div>

          <RadarChart
            labels={["React", "TypeScript", "CSS", "MUI", "Redux", "Node.js", "Express", "MongoDB"]}
            data={[95, 90, 85, 88, 80, 75, 70, 65]}
          />
        </Box>

        {/* Interactive Component Section */}
        <Box my={8}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 4,
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Interactive Components
            </Typography>
          </motion.div>

          <InteractiveDemo />
        </Box>
      </Container>

      {/* Modal for Project Details */}
      <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} project={selectedProject} />

      <Footer />
    </>
  )
}

export default Home
