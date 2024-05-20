import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";



export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Promo Code</th>
            <th className="">Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {

            return (
              <tr key={idx}>
                <td>{row.PromoCode}</td>
                <td className="">{row.description}</td>
                <td>
                  <span className={`label label-${row.statusID == '1' ? 'available': 'expired'}`}>
                    {row.statusID == '1' ? 'available' : 'expired'}
                  </span>
                </td>
                <td className="fit">
                  <span className="actions">
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

