import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'

import Box from '../../Box'
import Text from '../../Text'
import Button from './button'

const StyledInput = styled('input')`
    ::placeholder {
        color: ${props => props.theme.colors.secondary};
    }
    appearance: none;
    background-color: ${props => props.theme.colors.background};
    border: ${props =>
        `${props.theme.borderWidths.normal} ${props.theme.borderStyles.solid} ${props.theme.colors.text}`};
    border-top-left-radius: ${props => props.theme.radii.large};
    border-bottom-left-radius: ${props => props.theme.radii.large};
    border-right: none;
    color: ${props => props.theme.colors.text};
    flex: 7;
    font-family: ${props => props.theme.fonts.monospace};
    height: 2.25rem;
    outline: none;
    padding: ${props => props.theme.space[1]} ${props => props.theme.space[3]};
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
                        Authorization: `Token ${process.env.gatsby_buttondown_api_key}`,
                    },
                    body: JSON.stringify(body),
                },
            )
            if (response.ok) {
                setIsSubscribed(true)
            }
        } catch (e) {
            console.log(e)
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
            css={`
                max-width: 24rem;
            `}
            display={Box.Display.Flex}
            el={Box.Element.Form}
            fluidWidth
            mt={3}
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
