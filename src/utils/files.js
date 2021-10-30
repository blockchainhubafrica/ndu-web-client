export const createJsonFile = (json) => {
  const output = JSON.stringify(json);
  const blob = new Blob([output]);
  const fileDownloadUrl = URL.createObjectURL(blob);

  console.log({ json, output, blob, fileDownloadUrl });
};
