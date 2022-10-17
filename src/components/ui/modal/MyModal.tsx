import React, { ReactNode } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import classes from './MyModal.module.css';

interface Props {
  children: ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const MyModal = ({ children, visible, setVisible }: Props) => {
  const rootClassed = [classes.myModal];
  if (visible) {
    rootClassed.push(classes.active);
  }
  return (
    <div className={rootClassed.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.myModalContent} onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
