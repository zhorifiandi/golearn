# Parallelize


Instead of running it sequentially
```mermaid
gantt
    title Run All Task in Sequential
    dateFormat  mm:ss
    axisFormat %M:%S
    section Run All Sequential
    Task 1     :t1, 00:00, 5s
    Task 2     :t2, after t1  , 5s
    Task 3     :t3, after t2  , 5s
    Task 4     :t4, after t3  , 5s
```

Try to parallelize it!

```mermaid
gantt
    title Run All Task in Parallel
    dateFormat  mm:ss
    axisFormat %M:%S
    
    section Run All Parallel
    Task 1     :d1, 00:00, 5s
    Task 2     :d2, 00:00, 5s
    Task 3     :d3, 00:00, 5s
    Task 4     :d4, 00:00, 5s
```

Instead of running it sequentially

```go
func RunAllSequential(numOfProcess int, processingTime uint) time.Duration {
	start := time.Now()

	for i := 1; i <= numOfProcess; i++ {
		ExecuteMockProcess(processingTime)
	}

	return time.Since(start)
}
```

Try to parallelize it! Leverage
- Goroutines
- Wait Group

```go
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

```