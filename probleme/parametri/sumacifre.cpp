void sumcif (int n, int &spar, int &simpar) {
    int ultima; spar = 0; simpar = 0;
    while (n != 0) {
        ultima = n % 10;
        if (ultima % 2 == 0) spar += ultima;
            else simpar += ultima;
    n /= 10;
    }
}