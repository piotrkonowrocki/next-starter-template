import React, {FC} from 'react';

interface IEmptyMasterpageProps {
  children: React.ReactNode
}

const EmptyMasterpage: FC<IEmptyMasterpageProps> = ({children}) => (
  <>
    {children}
  </>
);

export default EmptyMasterpage;
