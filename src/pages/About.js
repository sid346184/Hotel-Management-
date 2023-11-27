import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box,Typography} from '@mui/material'

const About = () => {
  return (
    <Layout>
    <Box  sx={{
      backgroundSize: "cover",
    backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/51c748abe4b0c275d0aa86bf/1446760124528-7E44QF4KTDASBJF1OVIK/SOdgD.gif')", // Add your actual URL here
    p: 10,
    textAlign: "center",
    position: "relative", // Add this to position the text container relative to the image
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for transparency
      zIndex: 1, // Make sure the overlay is above the image
    },
    "& h4, & p": {
      zIndex: 2, // Ensure the text is on top of the overlay
      position: "relative",
      color: "#fff", // Set the text color to white or any color that blends with the overlay
    },
    "& h4": { fontWeight: "bold" },
    "& p": { textAlign: "justify", my: 2 }
     }}>
        
      <Typography variant='h4'>
        Welcome to the Resaurant
      </Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus reiciendis vel vitae ipsa hic aliquam, saepe assumenda expedita optio, eius, neque facere blanditiis veritatis. Quod fugiat cumque ex inventore earum a blanditiis est odio eos. Nobis et debitis libero amet, minima dolorum quisquam, optio est veniam pariatur, ad impedit magni blanditiis! Iste quia facilis, corporis incidunt minus ad a aliquid quidem culpa veritatis odio ex autem asperiores libero? Vitae quasi, aperiam cupiditate, sed quas voluptatem maiores aliquid ipsum dolore harum esse quos, rem necessitatibus eius distinctio ut accusamus et similique unde odio doloremque nesciunt? Possimus illo officia praesentium eaque.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus reiciendis vel vitae ipsa hic aliquam, saepe assumenda expedita optio, eius, neque facere blanditiis veritatis. Quod fugiat cumque ex inventore earum a blanditiis est odio eos. Nobis et debitis libero amet, minima dolorum quisquam, optio est veniam pariatur, ad impedit magni blanditiis! Iste quia facilis, corporis incidunt minus ad a aliquid quidem culpa veritatis odio ex autem asperiores libero? Vitae quasi, aperiam cupiditate, sed quas voluptatem maiores aliquid ipsum dolore harum esse quos, rem necessitatibus eius distinctio ut accusamus et similique unde odio doloremque nesciunt? Possimus illo officia praesentium eaque.
      </p>
    </Box>
    </Layout>
  )
}

export default About
