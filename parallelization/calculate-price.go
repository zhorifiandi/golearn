package parallelization

import (
	"log"
	"sync"
)

var ProcessingTime = uint(1)

func CalculateTotalPrice_Sequential() float64 {
	productA := FetchProductAData()
	productB := FetchProductBData()
	seller := FetchSellerData()
	shippingFee := FetchShippingFee(seller.Address)
	promo := FetchPromoInformation()

	totalPrice := productA.Price + productB.Price + shippingFee.Amount - promo.Discount
	log.Default().Printf("Total Price: %v\n", totalPrice)

	return totalPrice
}

type Order struct {
	Products   []Product
	Seller     *Seller
	Shipping   *ShippingFee
	Promo      *Promo
	TotalPrice float64
}

// parallel group 1
func fetchProductAndSellerInfo(order *Order) {
	var productA Product
	var productB Product
	var seller Seller
	var wg sync.WaitGroup

	wg.Add(3)
	go func() {
		defer wg.Done()
		productA = FetchProductAData()
	}()

	go func() {
		defer wg.Done()
		productB = FetchProductBData()
	}()

	go func() {
		defer wg.Done()
		seller = FetchSellerData()
	}()

	wg.Wait()

	*order = Order{
		Products: []Product{productA, productB},
		Seller:   &seller,
	}
}

// sequential group 1
func fetchShippingFee(order *Order) {
	fetchProductAndSellerInfo(order)
	shipping := FetchShippingFee(order.Seller.Address)
	order.Shipping = &shipping
}

// parallel group 2
func fetchCalculationComponents(order *Order) {
	var promo Promo
	var wg sync.WaitGroup

	wg.Add(2)
	go func() {
		defer wg.Done()
		promo = FetchPromoInformation()
	}()

	go func() {
		defer wg.Done()
		fetchShippingFee(order)
	}()

	wg.Wait()

	order.Promo = &promo
}

func CalculateTotalPrice_Parallelized() float64 {
	var order Order
	fetchCalculationComponents(&order)

	totalPrice := order.Products[0].Price + order.Products[1].Price + order.Shipping.Amount - order.Promo.Discount
	log.Default().Printf("Total Price: %v\n", totalPrice)

	return totalPrice
}

type Product struct {
	Name  string
	Price float64
}

type Seller struct {
	Name    string
	Address string
}

type ShippingFee struct {
	Amount float64
}

type Promo struct {
	Discount float64
}

func FetchProductAData() Product {
	ExecuteMockProcess(ProcessingTime)
	log.Default().Println("Product A data fetched")
	return Product{
		Name:  "Product A",
		Price: 50,
	}
}

func FetchProductBData() Product {
	ExecuteMockProcess(ProcessingTime)
	log.Default().Println("Product B data fetched")
	return Product{
		Name:  "Product B",
		Price: 100,
	}
}

func FetchSellerData() Seller {
	ExecuteMockProcess(ProcessingTime)
	log.Default().Println("Seller data fetched")
	return Seller{
		Name:    "Seller A",
		Address: "Address A",
	}
}

func FetchShippingFee(sellerAddress string) ShippingFee {
	ExecuteMockProcess(ProcessingTime)
	log.Default().Println("Shipping fee fetched")
	return ShippingFee{
		Amount: 10,
	}
}

func FetchPromoInformation() Promo {
	ExecuteMockProcess(ProcessingTime)
	log.Default().Println("Promo information fetched")
	return Promo{
		Discount: 5,
	}
}
