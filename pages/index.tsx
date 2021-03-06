// theme:
// #181818
// #4f4e4d
// #525252
// #8b8b8b
// #c7c5c1
import Head from 'next/head'
import Main from '../components/main'
import Repos from '../components/repositories'
import AboutMe from '../components/about'
import Contact from '../components/contact'
import React from 'react'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

let i = 0;
class Home extends React.Component {
  static async getInitialProps(){
    if(i == 0){
      const res:any = await fetch('https://api.github.com/users/dan-dervich/repos')
      const data:any = await res.json()
      return { data }
    } 
  }
  render() {
  return (
    <div style={{padding: 10, backgroundColor: '#181818'}}>
      <Head>
        <title>Portfolio Website By Dan Dervich</title>
        <meta name="description" content="Portfolio Website By Dan Dervich" />
        <link rel="icon" href="/Dan Dervich.png" />
      </Head>
      <NavBar />
      <Main />
      <AboutMe />
      <Repos data={this.props}/>
      <Contact />
      <Footer />
    </div>
  )
}
}

export default Home
