void ordon123 (int n, int a[]) {
    int contor1=0, contor2=0, contor3=0;
    for (int i = 0; i < n; i++) {
        if (a[i] == 1) contor1++;
        if (a[i] == 2) contor2++;
        if (a[i] == 3) contor3++;
    }
    
    for (int i = 0; i < contor1; i++) {
        a[i] = 1;
    }
    
    for (int i = contor1; i < contor1+contor2; i++) {
        a[i] = 2;
    }
    
    for (int i = contor1+contor2; i < contor1+contor2+contor3; i++) {
        a[i] = 3;
    }
}