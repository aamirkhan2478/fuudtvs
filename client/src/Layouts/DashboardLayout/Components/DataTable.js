import React from "react";
import {
  alpha,
  Box,
  Checkbox,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { visuallyHidden } from "@mui/utils";
import SearchBar from "../../ReusableComponents/SearchBar";

const DataTable = ({
  children,
  tableHead,
  data,
  selected,
  setSelected,
  rowCount,
  setRowCount,
  setNumSelected,
  numSelected,
  order,
  orderBy,
  handleRequestSort,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  handleSearch,
  setConfirmDialog,
  dispatch,
  setLoading,
  deleteMany,
  searchBar,
  title,
  searchQuery,
  setRefreshing,
  HideCheckBox,
}) => {
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n._id);
      setSelected(newSelecteds);
      setNumSelected(newSelecteds.length);
      setRowCount(data.length);
      return;
    }
    setSelected([]);
    setRowCount(-1);
    setNumSelected(-1);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <Box sx={{ width: "100%", boxShadow: 2 }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(numSelected > 0 && {
              bgcolor: (theme) =>
                alpha(
                  theme.palette.primary.main,
                  theme.palette.action.activatedOpacity
                ),
            }),
          }}
        >
          {numSelected > 0 ? (
            <Typography
              sx={{ flex: "1 1 100%" }}
              color="inherit"
              variant="subtitle1"
              component="div"
            >
              {numSelected} selected
            </Typography>
          ) : (
            <Typography
              sx={{ flexGrow: 1 }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              {title}
            </Typography>
          )}
          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton
                onClick={() => {
                  setConfirmDialog({
                    isOpen: true,
                    title: "Are You Sure!",
                    subtitle: `You want to delete ${numSelected} rows`,
                    color: "error",
                    text: "Delete",
                    onConfirm: () => {
                      dispatch(deleteMany(selected, searchQuery));
                      setConfirmDialog({ isOpen: false });
                      setRefreshing(true);
                      setNumSelected(0);
                      setRowCount(0);
                    },
                  });
                }}
              >
                <Delete sx={(theme) => ({ color: theme.palette.error.main })} />
              </IconButton>
            </Tooltip>
          ) : (
            <SearchBar handleSearch={handleSearch} searchBar={searchBar} />
          )}
        </Toolbar>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" sx={{ display: HideCheckBox }}>
                  <Checkbox
                    color="primary"
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                {tableHead.map((headCell) => (
                  <TableCell
                    sortDirection={orderBy === headCell.id ? order : false}
                    key={headCell.id}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={createSortHandler(headCell.id)}
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 ? (
                children
              ) : setLoading ? (
                <CircularProgress size={30} />
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={20}
                    sx={{ bgcolor: "red", color: "white", fontWeight: "bold" }}
                  >
                    Data Not Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default DataTable;
