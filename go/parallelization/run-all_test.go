package parallelization_test

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/zhorifiandi/golearn/parallelization"
)

func TestCalculateTotalPrice_Sequential(t *testing.T) {
	start := time.Now()
	totalPrice := parallelization.CalculateTotalPrice_Sequential()
	elapsed := time.Since(start)
	assert.Equal(t, float64(155), totalPrice)
	t.Logf("Elapsed time: %s", elapsed)
}

func TestCalculateTotalPrice_Parallelized(t *testing.T) {
	start := time.Now()
	totalPrice := parallelization.CalculateTotalPrice_Parallelized()
	elapsed := time.Since(start)
	assert.Equal(t, float64(155), totalPrice)
	t.Logf("Elapsed time: %s", elapsed)
}
