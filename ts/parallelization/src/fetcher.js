"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductAData = fetchProductAData;
exports.fetchProductBData = fetchProductBData;
exports.fetchSellerData = fetchSellerData;
exports.fetchShippingFee = fetchShippingFee;
exports.fetchPromoInformation = fetchPromoInformation;
exports.fetchProductAndSellerInfo = fetchProductAndSellerInfo;
exports.fetchShippingFeeForOrder = fetchShippingFeeForOrder;
exports.fetchCalculationComponents = fetchCalculationComponents;
var processingTime = 1000;
function executeMockProcess(time) {
    return new Promise(function (resolve) { return setTimeout(resolve, time); });
}
function fetchProductAData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, executeMockProcess(processingTime)];
                case 1:
                    _a.sent();
                    console.log("Product A data fetched");
                    return [2 /*return*/, { name: "Product A", price: 50 }];
            }
        });
    });
}
function fetchProductBData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, executeMockProcess(processingTime)];
                case 1:
                    _a.sent();
                    console.log("Product B data fetched");
                    return [2 /*return*/, { name: "Product B", price: 100 }];
            }
        });
    });
}
function fetchSellerData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, executeMockProcess(processingTime)];
                case 1:
                    _a.sent();
                    console.log("Seller data fetched");
                    return [2 /*return*/, { name: "Seller A", address: "Address A" }];
            }
        });
    });
}
function fetchShippingFee(sellerAddress) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, executeMockProcess(processingTime)];
                case 1:
                    _a.sent();
                    console.log("Shipping fee fetched");
                    return [2 /*return*/, { amount: 10 }];
            }
        });
    });
}
function fetchPromoInformation() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, executeMockProcess(processingTime)];
                case 1:
                    _a.sent();
                    console.log("Promo information fetched");
                    return [2 /*return*/, { discount: 5 }];
            }
        });
    });
}
function fetchProductAndSellerInfo(order) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, productA, productB, seller;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        fetchProductAData(),
                        fetchProductBData(),
                        fetchSellerData(),
                    ])];
                case 1:
                    _a = _b.sent(), productA = _a[0], productB = _a[1], seller = _a[2];
                    order.products = [productA, productB];
                    order.seller = seller;
                    return [2 /*return*/];
            }
        });
    });
}
function fetchShippingFeeForOrder(order) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetchProductAndSellerInfo(order)];
                case 1:
                    _b.sent();
                    _a = order;
                    return [4 /*yield*/, fetchShippingFee(order.seller.address)];
                case 2:
                    _a.shipping = _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function fetchCalculationComponents(order) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        fetchPromoInformation().then(function (promo) { return (order.promo = promo); }),
                        fetchShippingFeeForOrder(order),
                    ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
