import React, { useState } from 'react'
import { useInterval } from 'react-use'

import Text from './text'
import Field from './field'
import Box from './Box'

const VersionField = () => {
    const [version, setVersion] = useState('26.288.204017')

    useInterval(() => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const days = now.getDate()
        const hours = now.getHours()
        const minutes = now.getMinutes()
        const seconds = now.getSeconds()

        const today = new Date(year, month, days)
        const birth = new Date(1993, 1, 4)
        const ms = (today as any) - (birth as any)

        const s = Math.floor(ms / 1000)
        const m = Math.floor(s / 60)
        const h = Math.floor(m / 60)
        let d = Math.floor(h / 24)
        const y = Math.floor(d / 365)
        d = d % 365

        const major = `${y}`
        const minor = `${d < 100 ? `0` : ``}${d < 10 ? `0` : ``}${d}`
        const patch = `${hours < 10 ? `0` : ``}${hours}${
            minutes < 10 ? `0` : ``
        }${minutes}${seconds < 10 ? `0` : ``}${seconds}`

        setVersion(`${major}.${minor}.${patch}`)
    })
    return (
        <Field label="Version">
            <Box
                css={`
                    font-feature-settings: 'tnum' on, 'zero' on;
                `}
            >
                <Text>{version}</Text>
            </Box>
        </Field>
    )
}

export default VersionField
