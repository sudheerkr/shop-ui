import axios from "axios";

function AxiosInstance(config = {}) {
  const instance = axios.create({ ...config });

  instance.interceptors.response.use(undefined, (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      //
      return instance(error.config);
    }

    throw error;
  });

  return instance;
}

export default AxiosInstance;
