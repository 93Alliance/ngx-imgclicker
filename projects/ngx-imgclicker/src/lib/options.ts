export interface Options  {
    background?: string;
    imgBorder?: string;
    urlCallback?: (url: string) => string;
}

export const defaultOptions: Options = {
    background: 'rgba(0,0,0,0.7)',
    imgBorder: 'border:5px solid #fff',
};
