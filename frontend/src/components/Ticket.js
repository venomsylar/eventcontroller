import React from 'react';

const Ticket = ({data}) => {
	return (
			<div className="Ticket">
				<table>
					<thead>
						<tr>
							<th>Code</th>
							<th>Sector</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{data.code}</td>
							<td>{data.sector}</td>
							<td>{data.price}</td>
						</tr>
					</tbody>
				</table>
				<table>
					<thead>
					<tr>
						<th>Ticket Type</th>
						<th>Row</th>
						<th>Place</th>
						<th>Order</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>{data.ticket_type}</td>
						<td>{data.row}</td>
						<td>{data.place}</td>
						<td>{data.order}</td>
					</tr>
					</tbody>
				</table>
				<table>
					<thead>
					<tr>
						<th>Status</th>
						<th>Seller</th>
						<th>Date</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>{data.status}</td>
						<td>{data.seller}</td>
						<td>{data.date}</td>
					</tr>
					</tbody>
				</table>
			</div>
	);
};

export default Ticket;
