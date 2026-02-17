import { Table, TableBody, TableHeader } from '@/components/ui/table';

export function CoinOverviewFallback() {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image bg-gray-700 animate-pulse" />
        <div className="info">
          <div className="header-line-sm bg-gray-700 rounded animate-pulse" />
          <div className="header-line-lg bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="period-button-skeleton bg-gray-700 animate-pulse" />
        ))}
      </div>
      <div className="chart chart-skeleton bg-gray-700 animate-pulse" />
    </div>
  );
}

export function TrendingCoinsFallback() {
  return (
    <div id="trending-coins-fallback">
      <h4 className="bg-gray-700 rounded w-40 h-7 mb-4 animate-pulse" />
      <div className="trending-coins-table">
        <Table>
          <TableHeader>
            <tr>
              <th className="name-cell">Name</th>
              <th className="price-cell">Price</th>
              <th className="change-cell">24h %</th>
            </tr>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, i) => (
              <tr key={i}>
                <td className="name-cell">
                  <div className="name-link">
                    <div className="name-image bg-gray-700 animate-pulse" />
                    <div className="name-line bg-gray-700 rounded animate-pulse" />
                  </div>
                </td>
                <td className="price-cell">
                  <div className="bg-gray-700 rounded h-4 w-16 animate-pulse" />
                </td>
                <td className="change-cell">
                  <div className="bg-gray-700 rounded h-4 w-12 animate-pulse" />
                </td>
              </tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
