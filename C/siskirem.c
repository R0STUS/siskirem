#include <stdio.h>
#include <string.h>

int main() {
    char* siskirem = "Это сиськи Рем. Они больше, чем у Рам. Размер:   ";
    char* siskiram = "Это сиськи Рам. Они меньше, чем у Рем. Размер: ";
    char** a = &siskirem;
    char*** b = &a;
    printf("%s\b\b%d\n%s%d\n", **b, strlen(siskirem), siskiram, strlen(siskiram));
    return 0;
}
