class Human {
  /**
   * @param { "male" | "female" } gender
   * @param { string } name
   */
  constructor(gender, name) {
    this.gender = gender;
    this.name = name;
  }

  /**
   * @param {Human} human
   */
  compare(human) {
    throw Error("Function is not implemented!");
  }
}

class Male extends Human {
  /**
   * @param { string } name
   * @param { number } size
   */
  constructor(name, size) {
    super("male", name);
    this.cucumber_size = size;
  }

  /**
   * @param {Human} human
   */
  compare(human) {
    if (!human.cucumber_size) {
      throw Error("This guy have no cucumber!");
    }

    const msg = this.cucumber_size > human.cucumber_size ? "больше" : "меньше";
    return `Это огурец ${this.name}. Он ${msg}, чем у ${human.name}. Размер: ${this.cucumber_size}`;
  }
}

class Female extends Human {
  /**
   * @param { string } name
   * @param { number } boobs_size
   */
  constructor(name, boobs_size) {
    super("female", name);
    this.boobs_size = boobs_size;
  }

  /**
   * @param {Human} human
   */
  compare(human) {
    if (!human.boobs_size) {
      throw Error("This guy have no cucumber!");
    }

    const msg = this.boobs_size > human.boobs_size ? "больше" : "меньше";
    return `Это сиськи ${this.name}. Они ${msg}, чем у ${human.name}. Размер: ${this.boobs_size}`;
  }
}

$(document).ready(function () {
  function log(message) {
    $("#console").append(`<li>${message}</p>`);
  }

  $("#run").click(function (e) {
    e.preventDefault();
    const Rem = new Female("Рем", 83);
    const Ram = new Female("Рам", 81);

    log(Rem.compare(Ram));
    log(Ram.compare(Rem));
  });
  $("#clear").click(function (e) {
    e.preventDefault();
    $("#console").html("");
  });
});
