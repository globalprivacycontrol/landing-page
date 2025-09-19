import { useMemo, useState, useRef } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import styles from './us-map.module.css';
import { getStateGpcInfo, getStateCodeByName } from '../utils/state-gpc-data';

// Use a lightweight TopoJSON for US states. This URL is stable and small.
const US_TOPO_JSON = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const ACTIVE_FILL = 'var(--text-bright-green)';
const INACTIVE_FILL = 'var(--primary-bg)';

export default function USMap({ height = 520 }) {
  const [hoverInfo, setHoverInfo] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top
    });
  };

  const tooltip = useMemo(() => {
    if (!hoverInfo) return null;
    const { name, active, since, note } = hoverInfo;
    return (
      <div
        className={styles.tooltip}
        role="status"
        style={{ left: mousePos.x, top: mousePos.y }}
      >
        <div>
          <strong>{name}</strong>
        </div>
        <div>{active ? 'GPC active' : 'GPC not active'}</div>
        {active && <div>Since: {since ? since : '—'}</div>}
        {note ? <div>{note}</div> : null}
      </div>
    );
  }, [hoverInfo, mousePos]);

  return (
    <div
      className={styles.mapWrapper}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.mapContainer}>
        <ComposableMap projection="geoAlbersUsa" height={height} data-tip="">
          <Geographies geography={US_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stateName = geo.properties && (geo.properties.name || '');
                const stateCode = getStateCodeByName(stateName);
                const info = getStateGpcInfo(stateCode);
                const isActive = info.active;
                const fill = isActive ? ACTIVE_FILL : INACTIVE_FILL;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={styles.state}
                    tabIndex={0}
                    aria-label={`${info.name}: ${
                      isActive ? 'GPC active' : 'GPC not active'
                    }`}
                    onMouseEnter={() => setHoverInfo(info)}
                    onMouseLeave={() => setHoverInfo(null)}
                    onFocus={() => setHoverInfo(info)}
                    onBlur={() => setHoverInfo(null)}
                    style={{
                      default: { fill },
                      hover: { fill },
                      pressed: { fill }
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      {tooltip}

      <div className={styles.legend} aria-hidden="true">
        <span
          className={styles.legendSwatch}
          style={{ background: ACTIVE_FILL }}
        />
        <span>GPC active</span>
        <span
          className={styles.legendSwatch}
          style={{ background: INACTIVE_FILL }}
        />
        <span>Not active</span>
      </div>
    </div>
  );
}
