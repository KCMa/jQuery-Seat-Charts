var firstSeatLabel = 1;

$(document).ready(function () {
  var sc = $("#seat-map").seatCharts({
    map: createMapArray(3,3)
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
        classes: "first-class", //your custom CSS class
        category: "First Class",
      },
      e: {
        price: 40,
        classes: "economy-class", //your custom CSS class
        category: "Economy Class",
      },
    },
    naming: {
      top: false,
      getLabel: function (character, row, column) {
        return firstSeatLabel++;
      },
    },
    legend: {
      node: $("#legend"),
      items: [
        ["y", "your seat", "Your seat"],
        ["o", "available", "Other seats in the same order"],
        ["s", "seats", "Seats"],
      ],
    },
    //   click: function () {
    //     if (this.status() == "available") {
    //       //let's create a new <li> which we'll add to the cart items
    //       $(
    //         "<li>" +
    //           this.data().category +
    //           " Seat # " +
    //           this.settings.label +
    //           ": <b>$" +
    //           this.data().price +
    //           '</b> <a href="#" class="cancel-cart-item">[cancel]</a></li>'
    //       )
    //         .attr("id", "cart-item-" + this.settings.id)
    //         .data("seatId", this.settings.id)
    //         .appendTo($cart);

    //       /*
    //        * Lets up<a href="https://www.jqueryscript.net/time-clock/">date</a> the counter and total
    //        *
    //        * .find function will not find the current seat, because it will change its stauts only after return
    //        * 'selected'. This is why we have to add 1 to the length and the current seat price to the total.
    //        */
    //       $counter.text(sc.find("selected").length + 1);
    //       $total.text(recalculateTotal(sc) + this.data().price);

    //       return "selected";
    //     } else if (this.status() == "selected") {
    //       //update the counter
    //       $counter.text(sc.find("selected").length - 1);
    //       //and total
    //       $total.text(recalculateTotal(sc) - this.data().price);

    //       //remove the item from our cart
    //       $("#cart-item-" + this.settings.id).remove();

    //       //seat has been vacated
    //       return "available";
    //     } else if (this.status() == "unavailable") {
    //       //seat has been already booked
    //       return "unavailable";
    //     } else {
    //       return this.style();
    //     }
    //   },
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
function createMapArray(noRows: number, noColumns: number) {
  var _map: []=[];
  const defaultSeatChar: string = "a";
  const row: string = defaultSeatChar.repeat(noColumns);

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
