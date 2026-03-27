export default function OverviewScreenV5IntelligenceLed() {
  const filters = [
    "Brand: Suntory",
    "Category: Beverages",
    "Arena: Energy Drinks",
    "Market: India",
    "Period: Last 30 days",
    "Competitor Set: Pepsi / Coca-Cola",
  ];

  const signalMix = [62, 38]; // positive, negative
  const sourceVolume = [
    { label: "Instagram / Meta", value: 1480 },
    { label: "Public reviews", value: 620 },
    { label: "Ground inputs", value: 184 },
    { label: "Memory references", value: 21 },
  ];

  const lifecycleStages = [
    { label: "Product", value: 61 },
    { label: "Packaging", value: 84 },
    { label: "Quality", value: 48 },
    { label: "Logistics", value: 33 },
    { label: "Retail / Availability", value: 29 },
    { label: "Communication", value: 57 },
    { label: "Digital Presence", value: 52 },
    { label: "Sustainability", value: 46 },
  ];

  const digitalPresence = [
    { label: "Discoverability weakness", value: 58 },
    { label: "Content resonance gap", value: 46 },
    { label: "Engagement inconsistency", value: 52 },
    { label: "Search / query gap", value: 39 },
  ];

  const sustainability = [
    { label: "Packaging waste mentions", value: 41 },
    { label: "Recyclability confusion", value: 56 },
    { label: "Material quality criticism", value: 38 },
    { label: "Positive eco perception", value: 22 },
  ];

  const groundTruth = [
    {
      title: "Distributor confirmations",
      count: 12,
      note: "Opening difficulty mentioned across 3 regions",
    },
    {
      title: "Retail observations",
      count: 8,
      note: "Customers compare convenience against category leaders",
    },
    {
      title: "CX escalations",
      count: 17,
      note: "Complaints tied to frustration, not only curiosity",
    },
  ];

  const attention = [
    {
      title: "Packaging is the largest weakness in the current lifecycle",
      why: "Highest negative pressure across customer voice and field confirmations",
      action: "Open Investigation",
    },
    {
      title: "Digital presence is not converting enough attention into trust",
      why: "Visibility is decent, but resonance and discoverability remain uneven across digital surfaces",
      action: "Open Digital Inquiry",
    },
    {
      title: "Sustainability perception is weak, but not yet dominant",
      why: "Low signal volume, but high sensitivity and memory relevance",
      action: "Explore Sustainability View",
    },
    {
      title: "Taste remains the strongest source of advocacy",
      why: "Repeat positive mentions remain high across owned and public surfaces",
      action: "Review Opportunity",
    },
  ];

  const memoryNotes = [
    "Past RCA linked cap design issues with both packaging design and handling conditions.",
    "Consultant review warned that convenience weakness can block substitution against category leaders.",
    "Current sustainability criticism overlaps with recyclability confusion rather than broad anti-brand sentiment.",
  ];

  const heatmapRows = [
    { stage: "Product", cells: [22, 31, 18, 14] },
    { stage: "Packaging", cells: [64, 72, 84, 69] },
    { stage: "Quality", cells: [28, 36, 48, 30] },
    { stage: "Logistics", cells: [16, 21, 33, 19] },
    { stage: "Communication", cells: [41, 57, 46, 38] },
    { stage: "Digital Presence", cells: [52, 34, 27, 44] },
    { stage: "Sustainability", cells: [26, 35, 46, 29] },
  ];
  const heatmapCols = ["Voice", "Ground", "Memory", "Competition"];

  const trend = [58, 61, 64, 62, 66, 69, 71, 68, 73, 76, 78, 82];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl p-6 md:p-8">
        <header className="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Overview</p>
              <h1 className="text-3xl font-semibold tracking-tight">Leadership Intelligence Overview</h1>
              <p className="mt-1 max-w-4xl text-sm text-slate-500">
                Upstream intelligence view of conversation intensity, polarity, ground corroboration, lifecycle pressure, sustainability weakness, and memory-linked risk in the selected arena.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Priorities",
                "Investigation",
                "Competition",
                "Memory",
                "Inquiry",
              ].map((item) => (
                <button
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
            {filters.map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {item}
              </button>
            ))}
          </div>
        </header>

        <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">People talking</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">2,284</p>
            <p className="mt-2 text-sm text-slate-500">Across voice sources in the last 30 days</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Ground confirmations</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">37</p>
            <p className="mt-2 text-sm text-slate-500">Field, distributor, CX, and ops observations attached</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Negative vs positive</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">38 : 62</p>
            <p className="mt-2 text-sm text-slate-500">Conversation polarity split</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Memory-linked issues</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">3</p>
            <p className="mt-2 text-sm text-slate-500">Current themes with relevant RCA or report history</p>
          </div>
        </section>

        <section className="mb-6 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Conversation Split</h2>
              <p className="text-sm text-slate-500">Positive vs negative</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <div className="overflow-hidden rounded-full bg-slate-200">
                <div className="flex h-8 w-full">
                  <div className="bg-emerald-400" style={{ width: `${signalMix[0]}%` }} />
                  <div className="bg-rose-400" style={{ width: `${signalMix[1]}%` }} />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-slate-500">Positive</p>
                  <p className="mt-2 text-3xl font-semibold text-emerald-700">62%</p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-slate-500">Negative</p>
                  <p className="mt-2 text-3xl font-semibold text-rose-700">38%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">How Attention Is Building</h2>
              <p className="text-sm text-slate-500">Combined intensity across voice + ground</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <svg viewBox="0 0 500 180" className="h-56 w-full">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-slate-900"
                  points={trend.map((p, i) => `${20 + i * 42},${170 - (p - 45) * 4}`).join(" ")}
                />
                {trend.map((p, i) => (
                  <circle key={i} cx={20 + i * 42} cy={170 - (p - 45) * 4} r="4" className="fill-slate-900" />
                ))}
              </svg>
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>Week 1</span>
                <span>Week 12</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6 grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Where Intelligence Is Coming From</h2>
              <p className="text-sm text-slate-500">Source influence snapshot</p>
            </div>
            <div className="space-y-4">
              {sourceVolume.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="text-slate-500">{item.value}</span>
                  </div>
                  <div className="h-4 rounded-full bg-slate-100">
                    <div
                      className="h-4 rounded-full bg-slate-800"
                      style={{ width: `${(item.value / 1480) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Weakness Across Product Lifecycle</h2>
              <p className="text-sm text-slate-500">Pressure by business area</p>
            </div>
            <div className="space-y-4">
              {lifecycleStages.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="text-slate-500">{item.value}</span>
                  </div>
                  <div className="h-4 rounded-full bg-slate-100">
                    <div
                      className={`h-4 rounded-full ${item.label === "Packaging" ? "bg-rose-400" : item.label === "Sustainability" ? "bg-amber-400" : "bg-slate-700"}`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-6 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Weakness Map</h2>
              <p className="text-sm text-slate-500">What is supported by voice, ground, memory, and competition</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 text-left text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">Lifecycle area</th>
                    {heatmapCols.map((col) => (
                      <th key={col} className="px-4 py-3 font-medium">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {heatmapRows.map((row) => (
                    <tr key={row.stage} className="hover:bg-slate-50">
                      <td className="px-4 py-4 font-medium text-slate-900">{row.stage}</td>
                      {row.cells.map((cell, idx) => (
                        <td key={idx} className="px-4 py-4">
                          <div
                            className="rounded-lg px-2 py-1 text-center font-medium text-slate-900"
                            style={{ backgroundColor: `rgba(15,23,42,${0.08 + cell / 110})` }}
                          >
                            {cell}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Digital Presence Signals</h2>
                <p className="text-sm text-slate-500">Visibility, resonance, and discoverability</p>
              </div>
              <div className="space-y-4">
                {digitalPresence.map((item) => (
                  <div key={item.label}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>{item.label}</span>
                      <span className="text-slate-500">{item.value}</span>
                    </div>
                    <div className="h-4 rounded-full bg-slate-100">
                      <div className="h-4 rounded-full bg-sky-400" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Sustainability Pressure</h2>
                <p className="text-sm text-slate-500">Specific watch area</p>
              </div>
              <div className="space-y-4">
                {sustainability.map((item) => (
                  <div key={item.label}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>{item.label}</span>
                      <span className="text-slate-500">{item.value}</span>
                    </div>
                    <div className="h-4 rounded-full bg-slate-100">
                      <div className="h-4 rounded-full bg-amber-400" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Ground Corroboration</h2>
                <p className="text-sm text-slate-500">Closest to field reality</p>
              </div>
              <div className="space-y-3">
                {groundTruth.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium text-slate-900">{item.title}</p>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">{item.count}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">What Needs Attention</h2>
              <button className="text-sm font-medium text-slate-500 hover:text-slate-900">Open Priorities</button>
            </div>
            <div className="space-y-3">
              {attention.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.why}</p>
                  <p className="mt-3 text-sm font-medium text-slate-700">{item.action}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">What We Already Know</h2>
              <button className="text-sm font-medium text-slate-500 hover:text-slate-900">Open Memory</button>
            </div>
            <div className="space-y-3">
              {memoryNotes.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
