void perm(int &n) {
    int v[9], i = 0, ultimaCifra, j;

    while (n != 0) {
        v[i] = n % 10;
        i++;
        n /= 10;
    }

    ultimaCifra = v[i-1];

    for (j = i-2; j >= 0; j--) {
        n = n*10 +v[j];
    }

    n = n*10 + ultimaCifra;
}