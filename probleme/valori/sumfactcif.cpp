#include  <math.h>

int sumfactcif (int n) {
    int sumaFact = 0, cifraFact, i;
    if (n == 0) return 1;
    while (n != 0) {
        int cifraFact = 1;
        for (i = 1; i <= n % 10; i++) {
            cifraFact = cifraFact * i;
        }
    n /= 10;
    sumaFact += cifraFact;
    }
return sumaFact;
}