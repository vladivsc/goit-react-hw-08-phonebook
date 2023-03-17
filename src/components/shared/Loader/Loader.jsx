import { BallTriangle } from 'react-loader-spinner';

import styles from '../Loader/loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Loader;