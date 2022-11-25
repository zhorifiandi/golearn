package parallelization

var ProcessingTime = uint(1)

func CalculateTotalPrice_Sequential() {
	FetchProductAData()
	FetchProductBData()
	FetchSellerData()
	FetchShippingFee()
	FetchPromoInformation()
}

func FetchProductAData() {
	ExecuteMockProcess(ProcessingTime)
}

func FetchProductBData() {
	ExecuteMockProcess(ProcessingTime)
}

func FetchSellerData() {
	ExecuteMockProcess(ProcessingTime)
}

func FetchShippingFee() {
	ExecuteMockProcess(ProcessingTime)
}

func FetchPromoInformation() {
	ExecuteMockProcess(ProcessingTime)
}
