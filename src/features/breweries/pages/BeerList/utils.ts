import { getBeerList } from '../../../../api';
import { Beer } from '../../../../shared/types';
import handle from '../../../../shared/utils/error';

const fetchData = (setData: (data: Array<Beer>) => void) => {
  (async () => {
    try {
      const response = await getBeerList();
      setData(response.data);
    } catch (error) {
      handle(error);
    }
  })();
};

export { fetchData };
