export default function Paper(theme) {
    return {
        MuiPaper: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                    '& .MuiPaper-outlined': {
                        paddingInline: 25,
                        paddingBlock: 15,
                        marginBottom: 15,
                    },
                },
            },
        }
    };
}
