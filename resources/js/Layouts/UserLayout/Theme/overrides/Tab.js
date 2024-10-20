// ==============================|| OVERRIDES - TAB ||============================== //

export default function Tab(theme) {
    return {
        MuiTab: {
            styleOverrides: {
                root: {
                    minHeight: 50,
                    color: theme.palette.text.primary,
                    '&.Mui-selected': {
                        color: 'orange',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: 'orange',
                },
            },
        },
    };
}
