import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
    colors: {
        primary: {
            "50": "#E5EDFF",
            "100": "#B8CDFF",
            "200": "#8AADFF",
            "300": "#5C8CFF",
            "400": "#2E6CFF",
            "500": "#175CFF",
            "600": "#003DCC",
            "700": "#002E99",
            "800": "#001E66",
            "900": "#000F33"
        },
        secondary: {
            "50": "#E9E9FC",
            "100": "#C0C0F6",
            "200": "#9898F1",
            "300": "#6F6FEC",
            "400": "#4747E6",
            "500": "#1E1EE1",
            "600": "#1818B4",
            "700": "#121287",
            "800": "#0C0C5A",
            "900": "#08083B"
        },
        text: {
            "50": "#F1F1F4",
            "100": "#D7D7DF",
            "200": "#BEBECB",
            "300": "#A4A5B7",
            "400": "#8A8BA3",
            "500": "#71728E",
            "600": "#57586E",
            "700": "#444455",
            "800": "#2D2E39",
            "900": "#17171C"
        },
        background: {
            "50": "#F1F1F1",
            "100": "#DBDBDB",
            "200": "#C4C4C4",
            "300": "#ADADAD",
            "400": "#969696",
            "500": "#808080",
            "600": "#666666",
            "700": "#4D4D4D",
            "800": "#333333",
            "900": "#1A1A1A"
        },
        muted: {
            "50": "#F6F6F6",
            "100": "#DBDBDB",
            "200": "#C4C4C4",
            "300": "#ADADAD",
            "400": "#969696",
            "500": "#808080",
            "600": "#666666",
            "700": "#4D4D4D",
            "800": "#333333",
            "900": "#1A1A1A"
        }
    },
};

export const theme = extendTheme(config);
