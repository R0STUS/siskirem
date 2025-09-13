import gleam/int
import gleam/io
import woman

pub fn main() {
  let size = 80
  let rem = woman.Woman(boobs_size: size)
  let ram = woman.Woman(boobs_size: size * 2)

  let siskirem = "(.)(.) - Это сиськи Рем. Они больше, чем у Рам. Размер: "
  let siskiram = "(.)(.) - Это сиськи Рам. Они меньше, чем у Рем. Размер: "

  io.println(siskirem <> int.to_string(rem.boobs_size))
  io.println(siskiram <> int.to_string(ram.boobs_size))
}
