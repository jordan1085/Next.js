import React, { Fragment } from 'react';
import Link from 'next/link';
import Header from './Header';

const Layout = props => {
    return (
        <Fragment>
            <Header />
            
            <main>

                {props.children}
            </main>
        </Fragment>
    );
}
 
export default Layout;