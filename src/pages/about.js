import React from "react"
import { Link } from 'gatsby'
import Header from "../components/header"
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Header headerText="About Gastvy"/>
    <Link to='/contact/'>Contact</Link>
    <p>Such wow. Very React.</p>
  </Layout>
)

