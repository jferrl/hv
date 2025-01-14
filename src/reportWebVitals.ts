import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler): any => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        // tslint:disable-next-line: no-floating-promises
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }: any): any => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
