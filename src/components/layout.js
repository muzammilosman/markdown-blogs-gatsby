import React from 'react';
import Helmet from 'react-helmet'
import useSitemetadata from '../hooks/use-sitemetadata';
import Container from './container'

export default function Layout ({children}) {
    const {title, description} = useSitemetadata()
    return (
        <>
            <Helmet>
                <html lang="en"/>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Helmet>
            <Container>
                <div>{children}</div>
            </Container>
        </>
    )
}