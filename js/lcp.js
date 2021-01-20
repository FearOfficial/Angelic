new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
        console.log('LCP candidate:', entry.startTime + ' ms', entry);
    }
}).observe({ type: 'largest-contentful-paint', buffered: true });