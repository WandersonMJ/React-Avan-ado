/* eslint-disable @typescript-eslint/no-explicit-any */
type Defineds = {
    Component: any
    pageProps: any
}

function MyApp({ Component, pageProps }: Defineds) {
    return <Component {...pageProps} />
}

export default MyApp
