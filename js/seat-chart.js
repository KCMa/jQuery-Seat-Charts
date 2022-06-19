var firstSeatLabel = 1;
$(document).ready(function () {
    var sc = $("#seat-map").seatCharts({
        map: createMapArray(3, 3)
        // [
        //   "zf_fffffffffffffffffffffffffffffffff",
        //   "ff_fffffffffffffffffffffffffffffffff",
        //   "ee_eefffffffffffffffffffffffffffffff",
        //   "ee_eefffffffffffffffffffffffffffffff",
        //   "ee___fffffffffffffffffffffffffffffff",
        //   "ee_eefffffffffffffffffffffffffffffff",
        //   "ee_eefffffffffffffffffffffffffffffff",
        //   "ee_eefffffffffffffffffffffffffffffff",
        //   "eeeeefffffffffffffffffffffffffffffff",
        // ],
        ,
        // [
        //   "zf_fffffffffffffffffffffffffffffffff",
        //   "ff_fffffffffffffffffffffffffffffffff",
        //   "ee_eefffffffffffffffffffffffffffffff",
        //   "ee_eefffffffffffffffffffffffffffffff",
        //   "ee___fffffffffffffffffffffffffffffff",
        //   "ee_eefffffffffffffffffffffffffffffff",
        //   "ee_eefffffffffffffffffffffffffffffff",
        //   "ee_eefffffffffffffffffffffffffffffff",
        //   "eeeeefffffffffffffffffffffffffffffff",
        // ],
        seats: {
            f: {
                price: 100,
                classes: "first-class",
                category: "First Class"
            },
            e: {
                price: 40,
                classes: "economy-class",
                category: "Economy Class"
            }
        },
        naming: {
            top: false,
            getLabel: function (character, row, column) {
                return firstSeatLabel++;
            }
        },
        legend: {
            node: $("#legend"),
            items: [
                ["y", "your seat", "Your seat"],
                ["o", "available", "Other seats in the same order"],
                ["s", "seats", "Seats"],
            ]
        }
    });
    //   //this will handle "[cancel]" link clicks
    //   $("#selected-seats").on("click", ".cancel-cart-item", function () {
    //     //let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
    //     sc.get($(this).parents("li:first").data("seatId")).click();
    //   });
    //   //let's pretend some seats have already been booked
    //   sc.get(["1_2", "4_1", "7_1", "7_2"]).status("unavailable");
});
// create map array
function createMapArray(noRows, noColumns) {
    var _map = [];
    var defaultSeatChar = "a";
    var row = defaultSeatChar.repeat(noColumns);
    for (var i = 0; i < noRows; i++) {
        _map.push(row);
    }
    return _map;
}
// function recalculateTotal(sc) {
//   var total = 0;
//   //basically find every selected seat and sum its price
//   sc.find("selected").each(function () {
//     total += this.data().price;
//   });
//   return total;
// }
