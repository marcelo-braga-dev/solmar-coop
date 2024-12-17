import {Stack, Typography} from "@mui/material";

const TextInfo = ({title, text}) => {
    return (
        <Stack direction="column" spacing={0} marginBottom={2}>
            {title && <Typography fontWeight={500} variant="body2"  sx={{color: '#555', fontWeight: 400, fontSize: 13}}>{title}</Typography>}
            {text && <Typography>{text}</Typography>}
        </Stack>
    )
}
export default TextInfo
