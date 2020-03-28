import React, { useContext, useEffect, Fragment } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CoronaContext from '../context/corona/coronaContext';
import Spinner from '../components/Spinner';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    marginBottom: 50,
    marginTop: 50,
    maxWidth: 700
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  const coronaContext = useContext(CoronaContext);

  const { getHelp, help, loading, setLoading } = coronaContext;
  useEffect(() => {
    setLoading();
    getHelp();
    // eslint-disable-next-line
  }, []);
  console.log('help', help);
  console.log('loading', loading);
  const { regional, primary } = help;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div align='center'>
        <h5>Ministry of Health & Welfare</h5>
        <p>Number : {primary.number}</p>
        <p>Toll-Free : 1075</p>
        <p>E-Mail : {primary.email}</p>
      </div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label='customized table'
          align='center'
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>State/UT</StyledTableCell>
              <StyledTableCell align='center'>Number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {regional.map(row => (
              <StyledTableRow key={row.loc}>
                <StyledTableCell component='th' scope='row'>
                  {row.loc}
                </StyledTableCell>
                <StyledTableCell align='right'>{row.number}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
