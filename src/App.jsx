import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Usercard from  './Usercard.jsx'
import userImage from './assets/img/user.jpg'
import userImage2 from './assets/img/user2.jpg'
import userImage3 from './assets/img/user3.jpg'

function App() {


  return(
  <>

  <Usercard
  image = {userImage}
  name = "Aisha Ahmed"
  age = "30"
  jobtitle = "Cloud Engineer"
  description = "Aisha is a skilled Cloud Engineer specializing in cloud architecture, deployment, and maintenance of scalable cloud infrastructure. With experience in AWS, Azure, and Google Cloud, she is proficient in automation, containerization, and serverless technologies."
  email = "aisha@gmail.com"
  />

<Usercard
  image = {userImage3}
  name = "Samuel Johnson"
  age = "32"
  jobtitle = "Project Manager"
  description = "Samuel is a highly experienced Project Manager with over 8 years of expertise in leading cross-functional teams to deliver high-quality software projects on time and within budget. He excels in Agile and Waterfall methodologies, project planning, risk management, and client communication."
  email = "sam.johnson@gmail.com"
  />

<Usercard
  image = {userImage2}
  name = "Olivia Brown"
  age = "27"
  jobtitle = "Data Engineer"
  description = "Olivia is an expert Data Engineer with a background in building data pipelines, designing data warehouses, and optimizing data systems for large-scale applications. She has extensive experience with SQL, Python, Hadoop, and Spark, enabling her to handle big data with efficiency."
  email = "olivia.brown@gmail.com"
  />

  </>
  )
  
}

export default App
