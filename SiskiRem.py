class Woman:
    BoobaSize = 0.0

class Ram(Woman):
    BoobaSize = 2.0
    

class Rem(Woman):
    BoobaSize = Ram.BoobaSize * 1.5

def main():
    print("(.)(.) - Это сиськи Рем. Они больше, чем у Рам. Размер:" + str(Rem.BoobaSize))
    print("(.)(.) - Это сиськи Рам. Они меньше, чем у Рем. Размер:" + str(Ram.BoobaSize))

if __name__ == "__main__":
    main()