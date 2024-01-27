#include<stdio.h>
#include<stdlib.h>
int main()
{
int size, i;
int *p;
printf("\nEnter the array size\n");
scanf("%d",&size);
p = (int*)malloc(sizeof(int)*size);
printf("Enter values\n");
for(i=0 ; i<size ; i++){
scanf("%d",&p[i]);};
printf("The values of the array ");
for(i=0 ; i<size ; i++)
printf("%d ",p[i]);
}