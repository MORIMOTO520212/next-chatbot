export const useConvertImageToDataUrl = () => {
  const _converter = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const b64Image = event.target?.result as string;
        resolve(b64Image);
      };
      reader.readAsDataURL(file);
    });
  };

  const convertImageToDataUrl = async (files: File[]): Promise<string[]> => {
    const dataUrls: string[] = await Promise.all(
      files.map(async (file) => await _converter(file)),
    );
    return dataUrls;
  };
  return {
    convertImageToDataUrl,
  };
};
