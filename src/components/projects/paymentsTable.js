import moment from "moment";
import React from "react";
import { Table } from "reactstrap";

const PaymentsTable = ({ payments }) => {

    // const [amt, setAmt] = useState([])

    const totalamount = []
    // eslint-disable-next-line
    payments?.map((pay) => {
        totalamount.push(pay.amount)
        // setAmt()
        // console.log(pay.amount)
    })
    // console.log(totalamount)

    // {payments.amount?.reduce((acc, current) => acc + current, 0)}
    return (
        <>
            <h4>Total Amount {totalamount.reduce((acc, curr) => acc + curr, 0)} INR</h4>
            <Table striped>
                <thead>
                    <tr>
                        <th>
                            #ID
                        </th>
                        <th>
                            Project ID
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {payments?.map((payment) => {

                        return (
                            <tr>
                                <th scope="row">
                                    {payment._id}
                                </th>
                                <td>
                                    {payment.projectId}
                                </td>
                                <td>
                                    {moment(payment.date).utc().format("DD/MM/YYYY")}
                                    {/* {payment.date} */}
                                </td>
                                <td>
                                    {payment.amount}
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </>
    )
}
export default PaymentsTable;