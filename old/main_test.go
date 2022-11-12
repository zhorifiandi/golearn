package golearn_test

import (
	"sync"
	"testing"

	"github.com/zhorifiandi/golearn"
)

type mockInterface struct {
	wg        sync.WaitGroup // create a wait group, this will allow you to block later
	CallCount int
}

func (m *mockInterface) Exec() {
	m.wg.Done() // record the fact that you've got a call to exec
	m.CallCount += 1
}

func (m *mockInterface) currentCount() int {
	m.wg.Wait() // wait for all the call to happen. This will block until wg.Done() is called.
	return m.CallCount
}

func TestMethod(t *testing.T) {
	mock := &mockInterface{}
	mock.wg.Add(3) // set up the fact that you want it to block until Done is called once.

	golearn.Method(mock)

	if mock.currentCount() != 3 { // this line with block
		// trimmed
		t.Fail()
	}
}
