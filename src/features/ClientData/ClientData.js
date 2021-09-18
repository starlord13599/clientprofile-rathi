import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles, alpha } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import MiniDrawer from "../Drawer/Drawer";
import SearchIcon from "@material-ui/icons/Search";

const columns = [
  { id: "accountId", label: "Account Id", minWidth: 170, align: "center" },
  { id: "exchgSeg", label: "Exchg Seg", minWidth: 100, align: "center" },
  {
    id: "tradingSymbol",
    label: "Trading Symbol",
    minWidth: 250,
    align: "center",
  },
  {
    id: "symbol",
    label: "Symbol",
    minWidth: 170,
    align: "center",
  },
  {
    id: "expiryDate",
    label: "Expiry Date",
    minWidth: 170,
    align: "center",
  },
  {
    id: "instName",
    label: "Instrument Name",
    minWidth: 170,
    align: "center",
  },
  {
    id: "buyQty",
    label: "Buy Qty",
    minWidth: 170,
    align: "center",
  },
  {
    id: "buyAvgPrice",
    label: "Buy Avg Price",
    minWidth: 170,
    align: "center",
  },
  {
    id: "buyValue",
    label: "Buy Value",
    minWidth: 170,
    align: "center",
  },
  {
    id: "buyQtyLots",
    label: "Buy Qty Lots",
    minWidth: 170,
    align: "center",
  },
  {
    id: "sellQty",
    label: "Sell Qty",
    minWidth: 170,
    align: "center",
  },
  {
    id: "sellAvgPrice",
    label: "Sell Avg Price",
    minWidth: 170,
    align: "center",
  },
  {
    id: "sellValue",
    label: "Sell Value",
    minWidth: 170,
    align: "center",
  },
];

function createData(
  accountId,
  exchgSeg,
  tradingSymbol,
  symbol,
  expiryDate,
  instName,
  buyQty,
  buyAvgPrice,
  buyValue,
  buyQtyLots,
  sellQty,
  sellAvgPrice,
  sellValue
) {
  return {
    accountId,
    exchgSeg,
    tradingSymbol,
    symbol,
    expiryDate,
    instName,
    buyQty,
    buyAvgPrice,
    buyValue,
    buyQtyLots,
    sellQty,
    sellAvgPrice,
    sellValue,
  };
}

const rows = [
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
  createData(
    "AA100",
    "INFO",
    "BAJAJFINANCEABCD450003PE",
    "BAJAJFINANCE",
    "26/10/2021",
    "OPTSTK",
    10000,
    4.56838,
    49618.6,
    80,
    0,
    0,
    0
  ),
];

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#acaeb0"),
    backgroundColor: "#acaeb0",
    "&:hover": {
      backgroundColor: "#acaeb0",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 10,
  },
  container: {
    maxHeight: 440,
  },
  margin: {
    margin: theme.spacing(1),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ClientData() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <MiniDrawer>
      <Box display="flex" alignItems="center">
        <ColorButton
          variant="contained"
          color="primary"
          className={classes.margin}
        >
          Generate Data
        </ColorButton>
        <ColorButton
          variant="contained"
          color="primary"
          className={classes.margin}
        >
          Export Table Data
        </ColorButton>
        <ColorButton
          variant="contained"
          color="primary"
          className={classes.margin}
        >
          Column Visibility
        </ColorButton>
        <div style={{ fontWeight: "700", fontSize: "1rem" }}>
          Report generated on 8/8/2021
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Box>

      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      {columns.map((column) => {
                        const value = row[column.id];

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </MiniDrawer>
  );
}

export default ClientData;
