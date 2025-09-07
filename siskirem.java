enum Gender {
    UNDEFINED,
    MALE,
    FEMALE
}

abstract class Human {
    public Gender gender = Gender.UNDEFINED;
}

abstract class Man extends Human {
    public Gender gender = Gender.MALE;
}

abstract class Woman extends Man {
    public Gender gender = Gender.FEMALE;
    public float BoobSize = 0.0f;
}

class Ram extends Woman {
    public float BoobSize = 2.0f;
}

class Rem extends Ram {
    public float BoobSize = super.BoobSize * 1.5f;
}

public class siskirem {
    public static void main(String[] args) {
        Ram ram = new Ram();
        Rem rem = new Rem();
        System.out.printf("Это сисьски Рем, они больше, чем у Рам: %f\nЭто сиськи Рам, они больше, чем у Рем: %f\n", rem.BoobSize, ram.BoobSize);
    }
}
