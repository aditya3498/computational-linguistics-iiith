#include <bits/stdc++.h>

using namespace std;

int main()
{
	int i, j, h, w, b[i][j] = {0};

	char a[510][510];

	cin >> h >> w;

	for(i = 0; i < h; i++)
	{
		for(j = 0; j < w; j++)
		{
			cin >> a[i][j];
		}
	}

	for(i = 0; i < h; i++)
	{
		for(j = 0; j < w; j++)
		{
			if(a[i][j] == '*' && i >= 1 && j >= 1 && i < h - 1 && j < w - 1)
			{
				if(a[i - 1][j] == '*' && a[i][j - 1] == '*' && a[i + 1][j] == '*' && a[i][j + 1] == '*')
				{
					b[i][j] = 1;

					cout << i << j;

					b[i - 1][j] = 1;

					b[i][j + 1] = 1;

					b[i + 1][j] = 1;
				}
			}
		}
	}

	for(i = 0; i < h; i++)
	{
		for(j = 0; j < w; j++)
		{
			cout << b[i][j] << " ";
		}

		cout << endl;
	}
}