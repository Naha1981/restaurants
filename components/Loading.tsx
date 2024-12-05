export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg height="200" width="200" className="animate-spin">
        <ellipse className="e-outer" cx="100" cy="100" rx="96" ry="96" style={{fill: 'none', stroke: '#A5833B', strokeWidth: 6}} />
        <ellipse className="e-mid" cx="100" cy="100" rx="80" ry="80" style={{fill: 'none', stroke: '#A5833B', strokeWidth: 4}} />
        <ellipse className="e-in-out" cx="100" cy="100" rx="73" ry="73" style={{fill: 'none', stroke: '#A5833B', strokeWidth: 2}} />
        <ellipse className="e-in-mid" cx="100" cy="100" rx="68" ry="68" style={{fill: 'none', stroke: '#A5833B', strokeWidth: 1}} />
        <ellipse className="e-in-in" cx="100" cy="100" rx="68" ry="68" style={{fill: 'none', stroke: '#A5833B', strokeWidth: 1}} />
        <ellipse className="static" cx="92" cy="44" rx="34" ry="4" style={{fill: 'none', stroke: '#A5833B', strokeWidth: 1}} />
        <ellipse className="static" cx="95" cy="72" rx="60" ry="4" style={{fill: 'none', stroke: '#A5833B', strokeWidth: 1}} />
        <ellipse className="static" cx="100" cy="100" rx="68" ry="4" style={{fill: 'none', stroke: '#A5833B', strokeWidth: 1}} />
        <ellipse className="static" cx="104" cy="136" rx="56" ry="4" style={{fill: 'none', stroke: '#A5833B', strokeWidth: 1}} />
        <ellipse className="static" cx="108" cy="156" rx="35" ry="4" style={{fill: 'none', stroke: '#A5833B', strokeWidth: 1}} />
      </svg>
    </div>
  )
}

