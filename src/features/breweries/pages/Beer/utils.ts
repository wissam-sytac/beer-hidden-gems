import { getBeer } from '../../../../api';
import { Beer } from '../../../../shared/types';
import handle from '../../../../shared/utils/error';

const fetchData = (setData: (data: Beer) => void, id?: string) => {
  if (!id) return;

  (async () => {
    try {
      const response = await getBeer(id);
      setData(response.data);
    } catch (error) {
      handle(error);
    }
  })();
};

export { fetchData };