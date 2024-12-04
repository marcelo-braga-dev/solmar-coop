export default function CardHeader() {
    return {
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid #ddd',
                    '& .MuiTypography-root': {
                        fontSize: 16,
                        fontWeight: 500
                    },
                }
            }
        }
    };
}
