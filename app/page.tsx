
import CoinOverView from '@/components/home/CoinOverView';
import TrendingCoins from '@/components/home/TrendingCoins';
import { Suspense } from 'react';
import { CoinOverviewFallback, TrendingCoinsFallback } from '@/components/fallback';


const page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverView />
        </Suspense>

        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Catagories</p>
      </section>
    </main>
  );
};

export default page;
