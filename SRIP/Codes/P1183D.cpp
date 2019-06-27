#include <bits/stdc++.h>

using namespace std;

int main()
{
	int q, i, n, a[210000], b[210000];

	cin >> q;

	while(q--)
	{
		cin >> n;

		for(i = 0; i < n; i++)
		{
			cin >> a[i];

			b[a[i]]++;
		}

		sort(b, b + n, greater<int>());

		ans += b[0];
	}
}