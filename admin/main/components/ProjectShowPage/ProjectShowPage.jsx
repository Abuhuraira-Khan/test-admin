"use client"
import * as React from "react"
import "./ProjectShowPage.css"
import Navbar from '../Navbar/Navbar'
import ProjectShowCard from "./projectShowCard/ProjectShowCard"
import SearchBar from "../SearchBar/SearchBar"

const ProjectShowPage = () => {



  return (
    <div className="ProjectShowPageBody">
      <Navbar/>
      <SearchBar/>

      {/* "/assets/images/Screenshot 2024-04-16 034539.png" */}
      <div className="all-project">
        <div className="all-project-wrapper">
          <ProjectShowCard
          projectImg="/assets/images/Screenshot 2024-04-16 034539.png"
          appsCategory="website application"
          projectTitle="project 1"
          projectDesc="hello wrold lorem"
          PropjectLink="https://twitter.com/home?utm_source=homescreen&utm_medium=shortcut"
          />


        </div>
      </div>
    </div>
  )
}

export default ProjectShowPage
