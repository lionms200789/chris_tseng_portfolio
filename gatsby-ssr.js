/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react');

const RipplePreloader = () => {
    return <div class="ripple-preloader">
        <div class="preloader">
            <div></div>
            <div></div>
        </div>
    </div>
}

exports.onRenderBody = ({
    setHeadComponents,
    setPostBodyComponents,
    setPreBodyComponents
}) => {
    setHeadComponents([
        <link as="script" rel="preload" href="/scripts/preloader.js" />
    ])
    setPreBodyComponents([<div className="preloader-wrap"><RipplePreloader /></div>])
    setPostBodyComponents([
        <script src="/scripts/preloader.js" />
    ])
};