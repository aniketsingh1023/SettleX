"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AnimatedCounter = ({
  value,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(value * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  return (
    <span className="tabular-nums tracking-tight">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const Hero = () => {
    const session = useSession();
    const router = useRouter();
  return (
    <section className="bg-white flex-1 flex items-center justify-center pt-24 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 text-center lg:text-left">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
            India's Safest <br /> Crypto Exchange
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Start building your crypto portfolio with SettleX. Join millions of
            users investing in Bitcoin, Ethereum, and over 500+ top crypto
            assets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            { session.data?.user ?<button
              onClick={() => router.push("/dashboard")}
              
              className="w-full  px-12 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all hover:-translate-y-0.5"
            >
              Go to Dashboard
            </button> : <button
              onClick={() => signIn("google")}
              className="w-full  px-12 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all hover:-translate-y-0.5"
            >
              Start Trading Now
            </button> }
          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100">
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">
                <AnimatedCounter value={500} suffix="+" duration={1500} />
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Supported Assets
              </p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">
                <AnimatedCounter
                  value={99.9}
                  suffix="%"
                  decimals={1}
                  duration={2000}
                />
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Platform Uptime
              </p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">
                <AnimatedCounter
                  prefix="< "
                  value={10}
                  suffix="ms"
                  duration={1000}
                />
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Trade Latency
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg lg:max-w-none relative animate-fade-in-up">
          <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform rotate-3 scale-105 z-0"></div>
          <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-xl text-gray-800">Market Trends</h3>
            </div>

            {/* Asset List Mock */}
            <div className="space-y-4">
              {[
                {
                  name: "Bitcoin",
                  symbol: "BTC",
                  price: "₹ 54,23,120",
                  change: "+2.4%",
                  color: "text-green-500",
                  icon: "B",
                },
                {
                  name: "Ethereum",
                  symbol: "ETH",
                  price: "₹ 2,94,841",
                  change: "+1.8%",
                  color: "text-green-500",
                  icon: "E",
                },
                {
                  name: "Solana",
                  symbol: "SOL",
                  price: "₹ 11,241",
                  change: "-0.5%",
                  color: "text-red-500",
                  icon: "S",
                },
                {
                  name: "Ripple",
                  symbol: "XRP",
                  price: "₹ 48.24",
                  change: "+5.2%",
                  color: "text-green-500",
                  icon: "X",
                },
              ].map((asset, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                      {asset.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{asset.name}</p>
                      <p className="text-xs text-gray-500 font-medium">
                        {asset.symbol}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{asset.price}</p>
                    <p className={`text-sm font-semibold ${asset.color}`}>
                      {asset.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
