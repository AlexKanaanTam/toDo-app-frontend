import { BACKEND } from '../../routers/routers';

export const shortFetch = ({
  url,
  body,
  method,
  params,
  onSuccess = () => {},
  onError = () => {},
}) => {
  let parsedUrl = `${BACKEND}${url}`;
  if (params) {
    parsedUrl = `${parsedUrl}&${params}`;
  }
  fetch(parsedUrl, {
    method: `${method}`,
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject();
      }
      return response.json();
    })
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      onError(error);
    });
};
