import moment from "moment";
import React from "react";
import { Table } from "reactstrap";

const PaymentsTable = ({ payments }) => {
    return (
        <>
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