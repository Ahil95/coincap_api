import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Card } from "@mui/material";
import { Pagination } from "@mui/material";

const MainTable = ({ data }) => {
  const [coins, setCoins] = useState([]);
  const [pageSize, setPageSize] = useState(50);
  console.log({ coins });
  useEffect(() => {
    // Load the initial set of items when the component mounts
    const initialData = data.slice(0, pageSize);
    setCoins(initialData);
  }, [data, pageSize]);
  const loadMore = () => {
    const nextData = data.slice(coins.length, coins.length + pageSize);
    setCoins([...coins, ...nextData]);
  };

  return (
    <>
      <Card
        sx={{
          margin: "-100px 250px",
          zIndex: "10",
          marginBottom: "50px",
          border: "none",
          boxShadow: "2px 2px 24px grey",
        }}
      >
        <TableContainer component={Paper} sx={{}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Rank</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Market Cap</TableCell>
                <TableCell align="right">VWAP(24Hr)</TableCell>
                <TableCell align="right">Supply</TableCell>
                <TableCell align="right">Volume (24Hr)</TableCell>
                <TableCell align="right">Change (24Hr)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coins.map((coin) => (
                <TableRow
                  key={coin.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{coin?.rank}</TableCell>
                  <TableCell align="left" sx={{ display: "flex" }}>
                    <div>
                      <img
                        src={`https://assets.coincap.io/assets/icons/${coin?.symbol.toLowerCase()}@2x.png`}
                        alt="coin"
                        style={{ height: "28px" }}
                      />
                    </div>
                    &nbsp;
                    <div>
                      <div>{coin?.name}</div>
                      <span style={{ opacity: "0.7", fontSize: "12px" }}>
                        {coin?.symbol}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    ${Number(coin?.priceUsd).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    ${Number(coin?.marketCapUsd).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    ${Number(coin?.vwap24Hr).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {Number(coin?.supply).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    ${Number(coin?.volumeUsd24Hr).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {Number(coin?.changePercent24Hr).toFixed(2)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      {coins.length < data.length && (
        <Button
          variant="contained"
          color="primary"
          onClick={loadMore}
          sx={{ borderRadius: "20px" }}
        >
          Load More
        </Button>
      )}
    </>
  );
};

export default MainTable;
