module.exports = {
    siteMetadata: {
        title: `Chris Tseng's Portfolio`,
        description: `你好！我是國凱，我是一名網頁前端工程師，樂於嘗試學習新知、目前主攻使用 React 開發。`,
        author: `曾國凱 Kuo-Kai Tseng`,
        siteUrl: `https://chris-tseng-portfolio-tw.netlify.app`,
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: `gatsby-starter-default`,
        //         short_name: `starter`,
        //         start_url: `/`,
        //         // background_color: `#663399`,
        //         // This will impact how browsers show your PWA/website
        //         // https://css-tricks.com/meta-theme-color-and-trickery/
        //         // theme_color: `#663399`,
        //         display: `minimal-ui`,
        //         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        //     },
        // },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/
                }
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
