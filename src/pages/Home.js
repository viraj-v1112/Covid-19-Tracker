import React, { Fragment, useContext } from "react";
import CardView from "../components/CardView";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CoronaContext from "../context/corona/coronaContext";

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
    "&:nth-of-type(odd)": {
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

const Home = () => {
  const classes = useStyles();

  const coronaContext = useContext(CoronaContext);

  const { statewise } = coronaContext;

  return (
    <Fragment>
      <h3 className='black-text center'>COVID-19 Statistics(INDIA)</h3>
      <hr></hr>
      <CardView />
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label='customized table'
          align='center'
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>State/UT</StyledTableCell>
              <StyledTableCell align='center'>Confirmed</StyledTableCell>
              <StyledTableCell align='center'>Active</StyledTableCell>
              <StyledTableCell align='center'>Recovered</StyledTableCell>
              <StyledTableCell align='center'>Deaths</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statewise.map(row => (
              <StyledTableRow key={row.state}>
                <StyledTableCell component='th' scope='row'>
                  {row.state}
                </StyledTableCell>
                <StyledTableCell align='right'>{row.confirmed}</StyledTableCell>
                <StyledTableCell align='right'>{row.active}</StyledTableCell>
                <StyledTableCell align='right'>{row.recovered}</StyledTableCell>
                <StyledTableCell align='right'>{row.deaths}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Home;
