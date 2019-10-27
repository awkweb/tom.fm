import React from 'react'

import Head from 'src/components/head'
import Text from 'src/components/Text'
import { Link } from 'gatsby'

const NotFoundPage = () => (
    <>
        <Head title="404" />
        <Text
            el={Text.Element.H1}
            size={Text.Size.Root}
            weight={Text.Weight.Normal}
        >
            404 Not Found
        </Text>
        <Text el={Text.Element.P}>
            Feel free to hang around here or head back <Link to="/">home</Link>.
        </Text>
    </>
)

export default NotFoundPage
