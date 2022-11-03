import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar,  Page, Search, Inject } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/data/dummy';
import { Header } from '../components';


const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-19 bg-white rounded-3xl'>
      <Header category='Pages' title='Employees' />
      <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width='auto'
      >
        <ColumnsDirective>
        {employeesGrid.map((item, index) => (
          <ColumnDirective  key={index} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees