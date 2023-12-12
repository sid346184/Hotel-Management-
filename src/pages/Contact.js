import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{mx:3,my:10,"& h4":{fontWeight:"bold",mb:2}}}>
          <Typography variant='h4'>
            Contact Us
          </Typography>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi distinctio voluptas dolores! Tempora modi nemo temporibus cupiditate incidunt? Perferendis possimus repellendus vero voluptas aliquid deserunt at numquam perspiciatis beatae!</p>
        </Box>

        <Box sx={{m:3,width:"350px"}}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:"black",color:"white"}} align='center'>
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                  <LocalPhoneIcon sx={{pt:1}}/>  1800-00-0000 (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                  <EmailIcon sx={{pt:1}}/>  help@mail.com 
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                  <WhatsAppIcon sx={{pt:1}}/>  +91 1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact
