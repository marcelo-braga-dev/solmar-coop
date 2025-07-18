// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
    const disabledStyle = {
        '&.Mui-disabled': {
            backgroundColor: theme.palette.grey[200],
        },
    };

    const successStyle = {
        '&.MuiButton-colorSuccess': {
            color: '#fff',
            backgroundColor: '#41D310E2',
            borderColor: theme.palette.success.light,
            '&:hover': {
                backgroundColor: '#39BD0BE2',
                color: '#fff',
            },
        },
    };

    const errorStyle = {
        '&.MuiButton-colorError': {
            color: '#fff',
            backgroundColor: '#ec1414',
            borderColor: theme.palette.success.light,
            '&:hover': {
                backgroundColor: '#d10e0e',
                color: '#fff',
            },
        },
    };

    const warningStyle = {
        '&.MuiButton-colorWarning': {
            color: '#fff',
            backgroundColor: '#fa8128',
            borderColor: theme.palette.success.light,
            '&:hover': {
                backgroundColor: '#e6731e',
                color: '#fff',
            },
        },
    };

    const warningStyleOutlined = {
        '&.MuiButton-outlinedWarning': {
            color: '#fa8128',
            borderColor: '#fa8128',
            backgroundColor: '#ffffff',
            '&:hover': {
                backgroundColor: '#fff3e0',
                borderColor: '#e6731e',
                color: '#e6731e',
            },
        },
    };

    const infoStyle = {
        '&.MuiButton-colorInfo': {
            color: '#fff',
            backgroundColor: '#28a9fa',
            borderColor: theme.palette.success.light,
            '&:hover': {
                backgroundColor: '#1793e1',
                color: '#fff',
            },
        },
    };

    const rootStyle = {
        fontWeight: 700,
        paddingBlock: 7,
        paddingInline: 20,
        borderRadius: 10,
        backgroundColor: '#000',
        '&:hover': {
            backgroundColor: '#303030',
            color: '#fff',
        },
        ...successStyle,
        ...errorStyle,
        ...warningStyle,
        ...infoStyle,
    };

    return {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                variant: 'contained',
            },
            styleOverrides: {
                root: {...rootStyle},
                contained: {
                    ...disabledStyle,
                },
                outlined: {
                    ...disabledStyle,
                    ...warningStyleOutlined

                },
                sizeSmall: {
                    fontSize: '0.8rem',
                    paddingBlock: 3,
                    paddingInline: 15,
                    fontWeight: 500,
                },
            },
        },
    };
}
