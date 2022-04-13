int fact(int n) {
    int i, produs;
    produs = 1;
    for (i = 1; i <= n; i++) {
        produs = produs * i;
    }
    return produs;
}