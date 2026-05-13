// app/projects/[slug]/components/SlowQueryChart.tsx
"use client";

import { useEffect, useRef } from "react";

const dataKo = [
  { label: "마이페이지 상품 리뷰", before: 3000, after: 70,  improvement: "97.7%" },
  { label: "클레임 조회",          before: 2600, after: 117, improvement: "95.5%" },
  { label: "쿠폰 발급 Count",      before: 500,  after: 29,  improvement: "94.2%" },
];

const dataEn = [
  { label: "Mypage Product Review", before: 3000, after: 70,  improvement: "97.7%" },
  { label: "Claim Lookup",          before: 2600, after: 117, improvement: "95.5%" },
  { label: "Coupon Issue Count",    before: 500,  after: 29,  improvement: "94.2%" },
];

export default function SlowQueryChart({ locale }: { locale: string }) {
  const e = locale === "en";
  const data = e ? dataEn : dataKo;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<unknown>(null);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    function initChart() {
      const canvas = canvasRef.current;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Chart = (window as any).Chart;
      if (!canvas || !Chart) return;

      if (chartRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (chartRef.current as any).destroy();
      }

      chartRef.current = new Chart(canvas, {
        type: "bar",
        data: {
          labels: data.map((d) => d.label),
          datasets: [
            {
              label: e ? "Before (ms)" : "개선 전 (ms)",
              data: data.map((d) => d.before),
              backgroundColor: "#F09595",
              borderColor: "#E24B4A",
              borderWidth: 0.5,
              borderRadius: 4,
            },
            {
              label: e ? "After (ms)" : "개선 후 (ms)",
              data: data.map((d) => d.after),
              backgroundColor: "#5DCAA5",
              borderColor: "#1D9E75",
              borderWidth: 0.5,
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx: { dataset: { label: string }; parsed: { y: number } }) =>
                  ` ${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()}ms`,
              },
            },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { font: { size: 12 }, color: "#888780", autoSkip: false },
            },
            y: {
              grid: { color: "rgba(136,135,128,0.15)" },
              ticks: {
                font: { size: 11 },
                color: "#888780",
                callback: (v: number) => v.toLocaleString() + "ms",
              },
            },
          },
        },
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).Chart) {
      initChart();
    } else {
      script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
      script.onload = initChart;
      document.head.appendChild(script);
    }

    return () => {
      if (chartRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (chartRef.current as any).destroy();
        chartRef.current = null;
      }
    };
  }, [locale]);

  return (
    <div>
      <div className="relative w-full h-64 md:h-80">
        <canvas ref={canvasRef} />
      </div>

      <div className="flex gap-5 mt-3">
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#F09595] border border-[#E24B4A] inline-block" />
          {e ? "Before" : "개선 전"}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#5DCAA5] border border-[#1D9E75] inline-block" />
          {e ? "After" : "개선 후"}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {data.map((d) => (
          <div key={d.label} className="bg-blue-50 rounded-xl px-3 py-2.5 text-center">
            <p className="font-mono text-base font-medium text-blue-900 leading-none mb-1">
              {d.improvement}
            </p>
            <p className="text-[10px] text-blue-700 leading-tight">{d.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
