import {Stack, Typography} from "@mui/material";

const TextInfo = ({title, text}) => {
    return (
        <Stack direction="column" spacing={0}>
            {title && <Typography fontWeight={500} variant="body2">{title}:</Typography>}
            {text && <Typography>{text}</Typography>}
        </Stack>
    )
}
export default TextInfo
