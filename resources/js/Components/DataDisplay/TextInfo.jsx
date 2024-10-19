import {Stack, Typography} from "@mui/material";

const TextInfo = ({title, text}) => {
    return (
        <Stack direction="row" spacing={2}>
            {title && <Typography fontWeight={500}>{title}:</Typography>}
            {text && <Typography>{text}</Typography>}
        </Stack>
    )
}
export default TextInfo
