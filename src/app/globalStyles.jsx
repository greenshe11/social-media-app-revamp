import { Global } from '@emotion/react';

export default function GlobalStyles() {
    return (<Global
        styles={`
           ::-webkit-scrollbar {
                width: 8px; /* Thinner scrollbar */
            }

            ::-webkit-scrollbar-track {
                background: transparent; /* No background */
            }

            ::-webkit-scrollbar-thumb {
                background: rgba(0, 0, 0, 0.5); /* Semi-transparent thumb */
                border-radius: 4px; /* Slightly rounded corners */
            }

            ::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 0, 0, 0.7); /* Darker on hover */
            }

        `}
    />)
        };