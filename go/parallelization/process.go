package parallelization

import "time"

func ExecuteMockProcess(second uint) {
	time.Sleep(time.Duration(second) * time.Second)
}
