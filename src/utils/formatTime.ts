export const formatTime = (timer: number | undefined) => {
  if (timer === undefined) return;
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes: any = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);

  return `${getMinutes} : ${getSeconds}`;
};
