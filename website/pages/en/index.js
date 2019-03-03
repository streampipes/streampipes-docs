/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
/* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
    return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
    return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
    return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
    render() {
        return (
            <div className="pluginWrapper buttonWrapper">
                <a className="button sp-button" href={this.props.href} target={this.props.target}>
                    {this.props.children}
                </a>
            </div>
        );
    }
}

Button.defaultProps = {
    target: '_self',
};

const SplashContainer = props => (
    <div className="homeContainer">
        <div className="homeSplashFade sp-background">
            <div className="wrapper homeWrapper">{props.children}</div>
        </div>
    </div>
);

const Logo = props => (
    <div>
        <img src={props.img_src} width="300px"/>
    </div>
);

const ScreenshotSection = props => (
    <div>
        <img src={props.screenshot_src} className="screenshot"/>
    </div>
);

const ProjectTitle = props => (
    <h2 className="projectTitle smaller">
        {siteConfig.tagline}
    </h2>
);

const PromoSection = props => (
    <div className="section promoSection">
        <div className="promoRow">
            <div className="pluginRowBlock">{props.children}</div>
        </div>
    </div>
);

class HomeSplash extends React.Component {
    render() {
        let language = this.props.language || '';
        return (
            <SplashContainer>
                <Logo img_src={imgUrl('logo.png')}/>
                <div className="inner">
                    <ProjectTitle/>
                    <h4 style={{color:'rgb(27, 20, 100)'}}>A complete toolbox to easily analyze IoT data streams without programming skills.</h4>
                    <PromoSection>
                        <Button href={docUrl('user-guide-tour.html', language)}>View the tour</Button>
                        <Button href={docUrl('user-guide-installation.html', language)}>Installation Guide</Button>
                        <Button href={'https://www.github.com/streampipes/streampipes-ce'}><i
                            className="fab fa-github"></i>&nbsp;View on Github</Button>
                    </PromoSection>
                    <ScreenshotSection screenshot_src={imgUrl('streampipes-screenshot.png')}/>
                </div>
            </SplashContainer>
        );
    }
}

const Grid = props => (
    <GridBlock
        align="center"
        layout="threeColumn"
        className="myCustomClass"
        contents={[
            {
                title: `[Learn](${siteConfig.baseUrl}docs/tutorial.html)`,
                content: 'Learn how to use this project',
                image: siteConfig.baseUrl + 'img/learn.png',
                imageAlt: 'Learn how to use this project',
                imageLink: siteConfig.baseUrl + 'docs/tutorial.html',
            },
            {
                title: 'Frequently Asked Questions',
                content: 'Questions gathered from the community',
                image: siteConfig.baseUrl + 'img/faq.png',
                imageAlign: 'top',
            },
            {
                title: 'More',
                content: 'Lots of documentation is on this site',
            },
        ]}
    />
);

const Block = props => (
    <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock align="center" contents={props.children} layout={props.layout}/>
    </Container>
);

const Features = props => (
    <Block layout="fourColumn">
        {[
            {
                content: 'This is the content of my feature',
                image: imgUrl('docusaurus.svg'),
                imageAlign: 'top',
                title: 'Feature One',
            },
            {
                content: 'The content of my second feature',
                image: imgUrl('docusaurus.svg'),
                imageAlign: 'top',
                title: 'Feature Two',
            },
        ]}
    </Block>
);

const FeatureCallout = props => (
    <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
    </div>
);

const LearnHow = props => (
    <Block background="light">
        {[
            {
                content: 'Talk about learning how to use this',
                image: imgUrl('docusaurus.svg'),
                imageAlign: 'right',
                title: 'Learn How',
            },
        ]}
    </Block>
);

const TryOut = props => (
    <Block id="try">
        {[
            {
                content: 'Talk about trying this out',
                image: imgUrl('docusaurus.svg'),
                imageAlign: 'left',
                title: 'Try it Out',
            },
        ]}
    </Block>
);

const Description = props => (
    <Block background="dark">
        {[
            {
                content: 'This is another description of how this project is useful',
                image: imgUrl('docusaurus.svg'),
                imageAlign: 'right',
                title: 'Description',
            },
        ]}
    </Block>
);

const Showcase = props => {
    if ((siteConfig.users || []).length === 0) {
        return null;
    }
    const showcase = siteConfig.users
        .filter(user => {
            return user.pinned;
        })
        .map((user, i) => {
            return (
                <a href={user.infoLink} key={i}>
                    <img src={user.image} alt={user.caption} title={user.caption}/>
                </a>
            );
        });

    return (
        <div className="productShowcaseSection paddingBottom">
            <h2>{"Who's Using This?"}</h2>
            <p>This project is used by all these people</p>
            <div className="logos">{showcase}</div>
            <div className="more-users">
                <a className="button" href={pageUrl('users.html', props.language)}>
                    More {siteConfig.title} Users
                </a>
            </div>
        </div>
    );
};

class Index extends React.Component {
    render() {
        let language = this.props.language || '';

        return (
            <div>
                <HomeSplash language={language}/>
            </div>
        );
    }
}

module.exports = Index;
