import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'

import Box from '../../Box'
import Text from '../../Text'
import Button from './button'

const StyledInput = styled('input')`
    ::placeholder {
        color: ${props => props.theme.colors.secondary};
        opacity: 1;
    }
    appearance: none;
    background-color: transparent;
    border-right: none;
    border: none;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.root};
    outline: none;
    min-width: 15rem;
    line-height: ${props => props.theme.lineHeights.body};
    padding: ${props => props.theme.space[2]} 0;
`

const useButtondown = () => {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        const emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
        setIsValid(!!email && emailRegex.test(email))
    }, [email])

    const handleChange = (event: ChangeEvent<any>) => {
        const {
            target: { value },
        } = event
        setEmail(value)
    }
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        try {
            setIsLoading(true)
            const body = {
                email,
                referrer_url: 'tom.fm',
            }
            const response = await fetch(
                'https://api.buttondown.email/v1/subscribers',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${process.env.GATSBY_BUTTONDOWN_API_KEY}`,
                    },
                    body: JSON.stringify(body),
                },
            )
            if (response.ok) {
                setIsSubscribed(true)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return {
        email,
        isLoading,
        isSubscribed,
        isValid,
        handleChange,
        handleSubmit,
    }
}

const Form = () => {
    const {
        email,
        isLoading,
        isSubscribed,
        isValid,
        handleChange,
        handleSubmit,
    } = useButtondown()

    if (isSubscribed) {
        return (
            <Box
                alignItems={Box.AlignItems.Center}
                css={`
                    height: 2.25rem;
                `}
                display={Box.Display.Flex}
                mt={3}
            >
                <Text font={Text.Font.Monospace}>
                    Subscribed <b>{email}!</b>
                </Text>
            </Box>
        )
    }

    return (
        <Box
            alignItems={Box.AlignItems.Baseline}
            bb
            borderColor={Box.BorderColor.Text}
            display={Box.Display.InlineFlex}
            el={Box.Element.Form}
            mt={{ lg: 3 }}
            onSubmit={handleSubmit}
        >
            <StyledInput
                disabled={isLoading}
                placeholder="email@address.com"
                value={email}
                onChange={handleChange}
            />
            <Button isLoading={isLoading} isValid={isValid} />
        </Box>
    )
}

export default Form
