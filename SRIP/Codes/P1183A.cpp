#include <bits/stdc++.h>

using namespace std;

int main()
{
	int n, dup, i, sum = 0, j ,digit;

	cin >> n;

	dup = n;

	for(i = dup; ;i++)
	{
		j = i, sum = 0;

		while(j > 0)
		{
			digit = j % 10;

			sum += digit;

			j /= 10;

			//cout << sum;

			//break;
		}

		//cout << sum;

		if(sum % 4 == 0)
		{
			//cout << sum << endl;

			break;
		}
	}

	//ans = sum % 4;

	cout << i << endl;
}