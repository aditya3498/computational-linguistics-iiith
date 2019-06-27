#include <bits/stdc++.h>

using namespace std;

int main()
{
	int q, n, k, i, value, value1, a[110], dif;

	cin >> q;

	while(q--)
	{
		cin >> n >> k;

		for(i = 0; i < n; i++)
		{
			cin >> a[i];

			//ans = max(a[i])
		}

		sort(a, a + n, greater<int>());

		if(a[n - 1] + 2 * k >= a[0])
		{
			cout << a[n - 1] + k << endl;
		}

		else
		{
			cout << "-1" << endl;
 		}
 	}
}