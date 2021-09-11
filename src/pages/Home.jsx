import React from 'react'
import Helmet from '../components/Helmet'
import Heroslider from '../components/Heroslider'
import heroSliderData from '../assets/fake-data/hero-slider'

const Home = () => {
    return (
        <Helmet title = "Trang chủ">
            { /* hero slider  */ }
            <Heroslider
                data={heroSliderData}
                control={true}
                auto={true}
                timeOut = {5000}
            />
            { /* end hero slider */ }
        </Helmet>
    )
}

export default Home
