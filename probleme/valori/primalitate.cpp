#include  <math.h>

int prim (int n) {
    int divizor;
    if (n==1 || n==0) return 0;
    for (divizor = 2; divizor <= sqrt(n); divizor++) {
        if (n % divizor == 0) return 0;
    }
    return 1;
}