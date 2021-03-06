import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRow/Top/ContentRowTop';
import Footer from './Footer';
import ContentRowCenter from './ContentRow/Center/ContentRowCenter';

function ContentWrapper(){
    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <ContentRowCenter />
                    <Footer />
                </div>
            </div>    
        </>
    )
}
export default ContentWrapper;