import React, { Suspense } from 'react';

export default class LazyLoading extends React.Component {

    private LazyLoadedComponent = React.lazy(() => import('./LazyLoading/LazyLoadingComponent'));

    render() {
        return <>
            <Suspense fallback={<div>{console.warn("Loading...")} Loading...</div>}>
                <this.LazyLoadedComponent />
            </Suspense>
        </>
    }
}