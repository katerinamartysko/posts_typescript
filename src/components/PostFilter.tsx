import React, { FC } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { Filter, KeyofPost } from '../api/types';
import { makeStyles } from 'tss-react/mui';
import { AppTheme } from '../utils/them';

const useStyles = makeStyles()((theme: AppTheme) => ({
  select: {
    width: 170,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
}));

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const PostFilter: FC<Props> = ({ filter, setFilter }) => {
  const { classes } = useStyles();

  const handleChange = (event: SelectChangeEvent) => {
    setFilter({ ...filter, sort: event.target.value as KeyofPost });
  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Поиск..."
        variant="outlined"
        className="myInp"
        value={filter.query || ''}
        onChange={event => setFilter({ ...filter, query: event.target.value as KeyofPost })}
      />
      <FormControl className={classes.select}>
        <InputLabel id="demo-simple-select-label">Сортировать по:</InputLabel>
        <Select labelId="demo-simple-select-label" value={filter.sort || ''} onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'title'}>По названию</MenuItem>
          <MenuItem value={'body'}>По описанию</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default PostFilter;
