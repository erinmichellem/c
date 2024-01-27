#include<stdio.h>
void display(int*,int);
int main()
{
    int a[5]={1,2,3,4,5};
    display(a,5);
}

void display(int *p,int n)
{
    int i;
    for(i=0;i<n;i++)
    {
        printf("The value of the %dth element and its address =%d %d\n",i,p[i],(p+i));
    }
}