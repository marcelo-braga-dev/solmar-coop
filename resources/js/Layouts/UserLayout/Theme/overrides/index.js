// third-party
import {merge} from 'lodash';

// project import
import Badge from './Badge';
import Button from './Button';
import CardContent from './CardContent';
import Checkbox from './Checkbox';
import Chip from './Chip';
import IconButton from './IconButton';
import InputLabel from './InputLabel';
import LinearProgress from './LinearProgress';
import ListItemIcon from './ListItemIcon';
import OutlinedInput from './OutlinedInput';
import Paper from './Paper';
import Tab from './Tab';
import TableCell from './TableCell';
import Tabs from './Tabs';
import Typography from './Typography';
import TextField from './TextField';
import CardHeader from './CardHeader';
import TabPanel from './TabPanel.js';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
    return merge(
        Button(theme),
        Badge(theme),
        CardContent(),
        Checkbox(theme),
        Chip(theme),
        IconButton(theme),
        InputLabel(theme),
        LinearProgress(),
        ListItemIcon(),
        OutlinedInput(theme),
        Paper(theme),
        Tab(theme),
        TableCell(theme),
        Tabs(),
        Typography(),
        TextField(theme),
        CardHeader(),
        TabPanel(theme),
    );
}
