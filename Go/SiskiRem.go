package main

import "fmt"

func main() {
	var RamBreastSize float64 = 2.0
	var Ram Women = Women{RamBreastSize}
	var Rem Women = Women{RamBreastSize * 1.5}
	fmt.Printf("(.)(.) - Это сиськи Рем. Они больше, чем у Рам. Размер:%f\n", Rem.BoobSize)
	fmt.Printf("(.)(.) - Это сиськи Рам. Они меньше, чем у Рем. Размер: %f\n", Ram.BoobSize)
}

type Women struct {
	BoobSize float64
}
