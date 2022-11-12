package parallelization

import (
	"sync"
	"time"
)

func RunAllSequential(numOfProcess int, processingTime uint) time.Duration {
	start := time.Now()

	for i := 1; i <= numOfProcess; i++ {
		ExecuteMockProcess(processingTime)
	}

	return time.Since(start)
}

func RunAllParallel(numOfProcess int, processingTime uint) time.Duration {
	start := time.Now()

	var wg sync.WaitGroup

	for i := 1; i <= numOfProcess; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			ExecuteMockProcess(processingTime)
		}()
	}

	wg.Wait()
	return time.Since(start)
}
