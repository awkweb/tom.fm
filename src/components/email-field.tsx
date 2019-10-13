import React, { MouseEvent, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useCopyToClipboard } from 'react-use'

import Box from './Box'
import Text from './text'
import Field from './field'

const EmailField = () => {
    const {
        site: {
            siteMetadata: { email },
        },
    } = useStaticQuery(graphql`
        query EmailFieldQuery {
            site {
                siteMetadata {
                    email
                }
            }
        }
    `)
    const [showCopied, setShowCopied] = useState(false)
    const [, copyToClipboard] = useCopyToClipboard()
    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        copyToClipboard(email)
        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 1000)
    }
    return (
        <Field label="E-Mail">
            <>
                {showCopied ? (
                    <Text>Copied!</Text>
                ) : (
                    <Box
                        alignItems={Box.AlignItems.Center}
                        css={`
                            height: 1.375rem;
                        `}
                        display={Box.Display.Flex}
                        justifyContent={Box.JustifyContent.SpaceBetween}
                    >
                        <Text>{email}</Text>
                        <Box
                            css={`
                                button {
                                    padding: 0;
                                    border: 0;
                                }
                                * {
                                    cursor: pointer;
                                }
                            `}
                        >
                            <button title="Copy to clipboard" onClick={onClick}>
                                <Text
                                    color={Text.Color.Secondary}
                                    size={Text.Size.Small}
                                    weight={Text.Weight.SemiBold}
                                >
                                    Copy
                                </Text>
                            </button>
                        </Box>
                    </Box>
                )}
            </>
        </Field>
    )
}

export default EmailField
