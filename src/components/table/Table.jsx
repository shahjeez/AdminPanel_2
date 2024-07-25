import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const TableD = () =>{
    const rows = [
        {
            id: 1,
            products: "2 Bread, 2L Milk, 12 Eggs",
            customer_num: "0301-1234567",
            date: "2 August 2024",
            time: "09:30",
            amount: 2500,
            method: "Credit Card",
            status: "Pending"
        },
        {
            id: 2,
            products: "1Kg Apples, 500g Cheese, 1 Bottle Juice",
            customer_num: "0302-2345678",
            date: "2 August 2024",
            time: "11:00",
            amount: 1500,
            method: "Cash On Delivery",
            status: "Delivered"
        },
        {
            id: 3,
            products: "1Kg Chicken, 2Kg Rice",
            customer_num: "0303-3456789",
            date: "2 August 2024",
            time: "13:15",
            amount: 2000,
            method: "Online",
            status: "Delivered"
        },
        {
            id: 4,
            products: "3Kg Oranges, 1 Pack Biscuits",
            customer_num: "0304-4567890",
            date: "2 August 2024",
            time: "14:30",
            amount: 1000,
            method: "Cash On Delivery",
            status: "Delivered"
        },
        {
            id: 5,
            products: "2L Milk, 1Kg Bananas",
            customer_num: "0305-5678901",
            date: "2 August 2024",
            time: "16:00",
            amount: 800,
            method: "Credit Card",
            status: "Pending"
        },
        {
            id: 6,
            products: "1Kg Tomatoes, 500g Spinach, 1Kg Potatoes",
            customer_num: "0306-6789012",
            date: "2 August 2024",
            time: "17:45",
            amount: 500,
            method: "Online",
            status: "Delivered"
        },
        {
            id: 7,
            products: "1Kg Apples, 1Kg Grapes, 1 Pack Cookies",
            customer_num: "0307-7890123",
            date: "2 August 2024",
            time: "19:00",
            amount: 1200,
            method: "Cash On Delivery",
            status: "Delivered"
        },
        {
            id: 8,
            products: "2 Bread, 2Kg Sugar",
            customer_num: "0308-8901234",
            date: "2 August 2024",
            time: "20:30",
            amount: 600,
            method: "Credit Card",
            status: "Pending"
        },
        {
            id: 9,
            products: "1Kg Beef, 1L Cooking Oil",
            customer_num: "0309-9012345",
            date: "2 August 2024",
            time: "21:45",
            amount: 2200,
            method: "Online",
            status: "Delivered"
        },
        {
            id: 10,
            products: "1Kg Flour, 500g Butter, 1 Pack Pasta",
            customer_num: "0310-0123456",
            date: "2 August 2024",
            time: "22:30",
            amount: 1100,
            method: "Cash On Delivery",
            status: "Delivered"
        }
    ];
    
    return(
        
             <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order_ID</TableCell>
            <TableCell className='tableCell'>PhoneNo</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Time</TableCell>
            <TableCell className='tableCell'>Order Cart</TableCell>
            <TableCell className='tableCell'>Total Amount</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
            <TableCell className='tableCell'>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className='tableCell' >{row.customer_num}</TableCell>
              <TableCell className='tableCell' >{row.date}</TableCell>
              <TableCell className='tableCell' >{row.time}</TableCell>
              <TableCell className='tableCell' style={{height:"40px"}}>{row.products}</TableCell>
              <TableCell className='tableCell' >{row.amount}</TableCell>
              <TableCell className='tableCell' >
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className='tableCell' ><a href={`/details/${row.id}`}>See Details</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}
export default TableD;