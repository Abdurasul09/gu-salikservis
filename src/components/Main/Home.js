import React from 'react';
import OurPartners from "./OurPartners/OurPartners";
import News from "./News/News";
import Team from "./Team/Team";
import Projects from "./Projects/Projects";
import Hero from "./Hero/Hero";
import Layout from "../Layout";

const Home = () => {
    return (
        <Layout>
            <Hero/>
            <OurPartners/>
            <News/>
            <Team/>
            <Projects/>
        </Layout>
    );
};

export default Home;