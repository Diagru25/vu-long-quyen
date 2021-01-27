import './StudentActions.scss';

import { Input, Button } from 'adapters/ant-design';
import React from 'react';

const StudentActions = () => {
  return (
    <div className='actions'>
      <Input placeholder='Search student...' style={{ margin: '0  15px' }} />
      <Button type='primary'>Create</Button>
    </div>
  );
};
export default StudentActions;
