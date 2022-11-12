package parallelization_test

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/zhorifiandi/golearn/parallelization"
)

func TestRunAll(t *testing.T) {
	numOfProcess := 20
	processingTime := uint(1)

	actualSequentialTime := parallelization.RunAllSequential(numOfProcess, processingTime)
	actualParallelTime := parallelization.RunAllParallel(numOfProcess, processingTime)

	t.Logf("Sequential Elapsed Time: %v\n", actualSequentialTime)
	t.Logf("Parallel Elapsed Time: %v\n", actualParallelTime)

	assert.Greater(t, actualSequentialTime, actualParallelTime)
}
