import React from 'react';
// @ts-ignore
import classes from './MyModal.module.css';

interface Props {
  children: any
  visible: boolean
  setVisible: any
}
const MyModal= ({ children, visible, setVisible }: Props) => {

  const rootClassed= [classes.myModal];
  if (visible) {
    rootClassed.push(classes.active);
  }
  return (
    <div className={rootClassed.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
