import { onCLS, onFID, onFCP, onLCP } from 'web-vitals';

// Define a custom type for the metrics if it's not provided by web-vitals
interface Metric {
    name: string;
    value: number;
    delta: number;
  }
  
  type ReportHandler = (metric: Metric) => void;
  
  const reportWebVitals = (onPerfEntry?: ReportHandler) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      // Assuming `onCLS`, `onFID`, `onFCP`, `onLCP` are functions that call the handler with metric data
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
    }
  };
  
  export default reportWebVitals;
  