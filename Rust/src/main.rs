trait Woman {
    fn get_boobs_size(&self) -> i32;
    fn new() -> Self;
}

struct Ram {
    boobs_size: i32,
}

struct Rem {
    boobs_size: i32,
}

impl Woman for Ram {
    fn new() -> Self {
        Self { boobs_size: 83 }
    }

    fn get_boobs_size(&self) -> i32 {
        self.boobs_size
    }
}

impl Woman for Rem {
    fn new() -> Self {
        Self { boobs_size: 81 }
    }

    fn get_boobs_size(&self) -> i32 {
        self.boobs_size
    }
}

fn main() {
    let rem = Rem::new();
    let ram = Ram::new();

    let siskirem = "Это сиськи Рем. Они больше, чем у Рам. Размер: ";
    let siskiram = "Это сиськи Рам. Они меньше, чем у Рем. Размер: ";

    println!("{} {}", siskirem.trim(), ram.get_boobs_size());
    println!("{} {}", siskiram.trim(), rem.get_boobs_size());
}
