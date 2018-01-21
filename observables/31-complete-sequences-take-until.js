function endAfterStop(pricesNASDAQ, printRecord, stopButton) {
    // ----- To finish this expression, use Observable.fromEvent to convert the "click" event on the stop button to an Observable
      let stopButtonClicks = Observable.fromEvent(stopButton, "click");
      let microsoftPrices =
              pricesNASDAQ.
                  filter(function(priceRecord) {
                      return priceRecord.name === "MSFT";
                  })
            .takeUntil(stopButtonClicks);	
                  // ----- To finish this expression, use takeUntil to complete the sequence when stopButtonClicks fires.
  
      microsoftPrices.
          forEach(function(priceRecord) {
              printRecord(priceRecord);
          });
  }        