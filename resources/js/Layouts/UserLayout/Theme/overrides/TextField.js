// ==============================|| OVERRIDES - TEXTFIELD ||============================== //

export default function TextField() {
    return {
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    // shrink: true,
                },
            },
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root': {
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FFFFFF',
                    },
                    '& input[type="file"]': {
                        cursor: 'pointer',
                        backgroundColor: '#FFF',
                        borderRadius: '8px',
                        padding: '8px',
                        paddingBlockEnd: '10px',
                    },
                    '& input[type="file"]::-webkit-file-upload-button': {
                        backgroundColor: '#000',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '3px 12px',
                        fontSize: '12px',
                        // fontWeight: 'bold',
                        cursor: 'pointer',
                        marginRight: '10px',
                    },
                    '& input[type="file"]::-webkit-file-upload-button:hover': {
                        backgroundColor: '#000', // Cor no hover
                    },
                },
            },
        },
    };
}
