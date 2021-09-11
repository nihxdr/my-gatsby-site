import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <main>
                <h3>Welcome to my Gatsby site!</h3>
                <p>I'm making this by following the Gatsby Tutorial.</p>
                <StaticImage
                    alt="Cat"
                    src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/is_my_cat_normal_slideshow/1800x1200_is_my_cat_normal_slideshow.jpg"
                />
            </main>
        </Layout>
    )
}

export default IndexPage