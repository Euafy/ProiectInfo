 void F(int n, int a[], int &k) {
    k = 0;
    int contor = 0, i;

    for (i = 0; i < n; i++) {
        if (a[i]%2 == 0 ) {
            k = k*10 + a[i];
            contor++;
        }
    }
    if ( contor == 0) k = -1;

 }