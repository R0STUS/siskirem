using System;

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine($"(.)(.) - Это сиськи Рем. Они больше, чем у Рам. Размер:{Rem.BoobaSize}");
        Console.WriteLine($"(.)(.) - Это сиськи Рам. Они меньше, чем у Рем. Размер:{Ram.BoobaSize}");
        Console.Read();
    }
}

public abstract class Human { }
public abstract class Men:Human { }
public abstract class Woman:Men
{
    public static float BoobaSize { get; private set; } = 0.0f;
}
public class Ram:Woman
{
    public static new float BoobaSize { get; private set; } = 2.0f;
}

public class Rem:Woman
{
   public static new float BoobaSize => Ram.BoobaSize * 1.5f; 
}
