package golearn

type MyInterface interface {
	Exec()
}

func Method(intr MyInterface) {
	go intr.Exec()
	go intr.Exec()
	go intr.Exec()
}
