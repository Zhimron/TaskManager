import React from 'react'
import { ComboboxTeams } from '../../assets/Components/ComboboxTeams';
import { useCustomFetch } from '../../Hooks/useCustomFetch';
import { ButtonComp } from '../../assets/Components/ButtonComp';

export const AssignTask = () => {


  return (
    <div className="flex">
      <div className="p-5 w-full h-full">
        <ComboboxTeams />
        <div className="border-2 mr-5  overflow-y-scroll h-96 w-full  mt-5  ">
          <table className="table table-xs table-pin-rows table-pin-cols ">
            {/* head */}
            <thead>
              <tr className="text-body text-lg   ">
                <th></th>
                <th></th>
                <th>Task Assigned</th>
                <th>severity</th>
                <th>Report</th>
                <th>Task Created</th>
                <th>DeadLine</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              <tr className="font-text">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <td>1</td>
                <td>SAMPLE</td>
                <td>SAMPLE</td>
                <td>SAMPLE</td>
                <td>SAMPLE</td>
                <td>SAMPLE</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ButtonComp className="w-full"/>
      </div>
    </div>
  );
}
